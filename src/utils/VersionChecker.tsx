import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslate } from '../context/LanguageContext';

interface VersionData {
  version: number;          // Timestamp do build
  packageVersion: string;   // Ex: "0.2.5"
}

// Chaves locais do carrinho e pedidos
const STORAGE_CART_KEY = "storely_cart_items";
const STORAGE_SENT_KEY = "storely_sent_orders";

const KEYS_TO_PRESERVE = [
  'storely_auth_token', 
  'country_code',
  STORAGE_CART_KEY,  
  STORAGE_SENT_KEY,
];

const STORAGE_KEYS = {
  INSTALLED_BUILD: 'STORELY_APP_INSTALLED_BUILD',
  PACKAGE_VERSION: 'STORELY_APP_PACKAGE_VERSION',
  REVISION_COUNTER: 'STORELY_APP_REVISION_COUNT',
  PENDING_WELCOME: 'STORELY_WELCOME_AFTER_UPDATE',
};

export default function VersionChecker() {
  const { t } = useTranslate();

  const [isOutdated, setIsOutdated] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [currentDisplayVersion, setCurrentDisplayVersion] = useState<string>('');
  const [newDisplayVersion, setNewDisplayVersion] = useState<string>('');
  const [newVersionData, setNewVersionData] = useState<VersionData | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const isCheckingRef = useRef(false);

  // Limpeza segura executada apenas no momento do clique de atualização
  const prepareSafeStorageForUpdate = async (targetBuild: number, targetPkg: string, targetRev: number) => {
    try {
      const preservedData: Record<string, string> = {};
      KEYS_TO_PRESERVE.forEach((key) => {
        const val = localStorage.getItem(key);
        if (val !== null) preservedData[key] = val;
      });

      localStorage.clear();
      sessionStorage.clear();

      // Restaura dados vitais
      Object.entries(preservedData).forEach(([key, val]) => {
        localStorage.setItem(key, val);
      });

      // Prepara os marcadores para validação após o reload
      localStorage.setItem(STORAGE_KEYS.INSTALLED_BUILD, targetBuild.toString());
      localStorage.setItem(STORAGE_KEYS.PACKAGE_VERSION, targetPkg);
      localStorage.setItem(STORAGE_KEYS.REVISION_COUNTER, targetRev.toString());
      localStorage.setItem(STORAGE_KEYS.PENDING_WELCOME, 'true');

      // Limpa todas as caches do navegador
      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((k) => caches.delete(k)));
      }

      // Desregista Service Workers antigos que possam estar a reter bundles antigos do Vercel
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((reg) => reg.unregister()));
      }
    } catch (err) {
      console.error('Falha ao preparar limpeza de armazenamento:', err);
    }
  };

  const checkVersion = useCallback(async () => {
    if (import.meta.env.DEV || isCheckingRef.current) return;
    isCheckingRef.current = true;

    try {
      // Faz fetch com timestamp e cabeçalhos estritos contra cache do Vercel/CDN
      const res = await fetch(`/version.json?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
        },
      });

      if (!res.ok) {
        isCheckingRef.current = false;
        return;
      }

      const serverData: VersionData = await res.json();
      const serverBuild = Number(serverData.version);
      const serverPkg = serverData.packageVersion || '0.2.5';

      const localBuildStr = localStorage.getItem(STORAGE_KEYS.INSTALLED_BUILD);
      const localPkgStr = localStorage.getItem(STORAGE_KEYS.PACKAGE_VERSION);
      const localRevStr = localStorage.getItem(STORAGE_KEYS.REVISION_COUNTER);

      // CASO 1: Primeira visita ao aplicativo
      if (!localBuildStr || !localPkgStr) {
        localStorage.setItem(STORAGE_KEYS.INSTALLED_BUILD, serverBuild.toString());
        localStorage.setItem(STORAGE_KEYS.PACKAGE_VERSION, serverPkg);
        localStorage.setItem(STORAGE_KEYS.REVISION_COUNTER, '0');
        setCurrentDisplayVersion(`${serverPkg}.0`);
        isCheckingRef.current = false;
        return;
      }

      const localBuild = Number(localBuildStr);
      let localRev = parseInt(localRevStr || '0', 10);

      // CASO 2: Utilizador abriu/recarregou e há um aviso pendente de boas-vindas
      if (localStorage.getItem(STORAGE_KEYS.PENDING_WELCOME) === 'true') {
        // Confirma se o build no servidor é compatível com o build instalado
        if (serverBuild >= localBuild) {
          setCurrentDisplayVersion(`${serverPkg}.${localRev}`);
          setShowWelcomeModal(true);
          setIsOutdated(false);
          isCheckingRef.current = false;
          return;
        }
        // Se ainda veio uma versão mais antiga da CDN, remove o aviso pendente e continua a verificação
        localStorage.removeItem(STORAGE_KEYS.PENDING_WELCOME);
      }

      // CASO 3: Nova versão detetada no servidor (Build mais recente ou versão do package diferente)
      if (serverBuild > localBuild || serverPkg !== localPkgStr) {
        // Se a versão base mudou (ex: 0.2.5 -> 0.2.6), a revisão recomeça em 0
        const nextRev = serverPkg === localPkgStr ? localRev + 1 : 0;

        setCurrentDisplayVersion(`${localPkgStr}.${localRev}`);
        setNewDisplayVersion(`${serverPkg}.${nextRev}`);
        setNewVersionData(serverData);
        setIsOutdated(true);
        setShowWelcomeModal(false);
      } else {
        // CASO 4: Totalmente atualizado
        setCurrentDisplayVersion(`${localPkgStr}.${localRev}`);
        setIsOutdated(false);
      }
    } catch (error) {
      console.warn('Verificação de versão em segundo plano:', error);
    } finally {
      isCheckingRef.current = false;
    }
  }, []);

  useEffect(() => {
    checkVersion();

    // Verificação passiva a cada 5 minutos
    const intervalId = setInterval(checkVersion, 5 * 60 * 1000);

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        checkVersion();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [checkVersion]);

  // Ação manual do utilizador: Limpa caches e força recarregamento limpo
  const handleUpdateClick = async () => {
    if (!newVersionData || isUpdating) return;
    setIsUpdating(true);

    const localPkgStr = localStorage.getItem(STORAGE_KEYS.PACKAGE_VERSION);
    const localRev = parseInt(localStorage.getItem(STORAGE_KEYS.REVISION_COUNTER) || '0', 10);
    const targetRev = newVersionData.packageVersion === localPkgStr ? localRev + 1 : 0;

    await prepareSafeStorageForUpdate(newVersionData.version, newVersionData.packageVersion, targetRev);

    // Adiciona query param único para obrigar o browser a furar o cache do HTML
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('v_sync', Date.now().toString());

    setTimeout(() => {
      window.location.replace(currentUrl.toString());
    }, 200);
  };

  const handleDismissWelcome = () => {
    localStorage.removeItem(STORAGE_KEYS.PENDING_WELCOME);
    setShowWelcomeModal(false);
  };

  const formattedDate = (versionNum?: number) => {
    if (!versionNum) return '';
    try {
      return new Intl.DateTimeFormat(undefined, { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      }).format(new Date(versionNum));
    } catch {
      return '';
    }
  };

  // 1. Modal de Boas-Vindas Pós-Atualização (Apenas após validação real)
  if (showWelcomeModal) {
    return (
      <div 
        className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-slate-950/60 animate-in fade-in duration-200"
        onClick={handleDismissWelcome}
      >
        <div 
          className="relative w-full sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 text-left shadow-2xl shadow-slate-900/20 overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full pointer-events-none" />

          <div className="flex items-center justify-between mb-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase">
                {t('beta_badge', { defaultValue: 'Atualizado' })}
              </span>
            </div>

            <button
              onClick={handleDismissWelcome}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
              title="Fechar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 relative z-10">
            {t('welcome_beta_title', { defaultValue: 'Aplicativo Atualizado!' })}
          </h3>
          
          <p className="text-sm text-slate-600 leading-relaxed mb-5 relative z-10">
            {t('welcome_beta_desc', { 
              defaultValue: 'O seu sistema foi atualizado com sucesso para a versão mais recente.' 
            })}
          </p>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6 space-y-2 relative z-10">
            <div className="flex justify-between items-center text-xs font-mono text-slate-600">
              <span>{t('current_version_label', { defaultValue: 'Versão em execução:' })}</span>
              <span className="font-bold text-slate-800 px-2.5 py-1 rounded-md bg-white border border-slate-200/60 shadow-xs">
                v{currentDisplayVersion}
              </span>
            </div>
          </div>

          <button
            onClick={handleDismissWelcome}
            className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-sm font-semibold py-3.5 px-5 rounded-2xl shadow-lg shadow-slate-900/15 flex items-center justify-between transition-all cursor-pointer relative z-10"
          >
            <span>{t('welcome_beta_button', { defaultValue: 'Continuar' })}</span>
            <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // 2. Modal Bloqueante de Nova Versão Detectada (Apenas avisa, não força reload sozinho)
  if (!isOutdated) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-slate-950/70 animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 text-left shadow-2xl shadow-slate-950/40 overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-amber-500/15 rounded-full pointer-events-none" />

        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-amber-800 uppercase">
              {t('version_update_badge', { defaultValue: 'Nova Versão' })}
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-amber-700 px-2.5 py-1 rounded-lg bg-amber-50/80 border border-amber-200/60">
            v{newDisplayVersion}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 relative z-10">
          {t('version_update_title', { defaultValue: 'Atualização Disponível' })}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed mb-5 relative z-10">
          {t('version_update_desc', { 
            defaultValue: 'Uma nova versão do aplicativo está pronta. Clique abaixo para aplicar as melhorias.' 
          })}
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 space-y-2.5 text-xs font-mono relative z-10">
          <div className="flex justify-between items-center text-slate-500">
            <span>{t('current_version_label', { defaultValue: 'Versão em execução:' })}</span>
            <span className="text-slate-700 font-semibold">v{currentDisplayVersion}</span>
          </div>
          <div className="flex justify-between items-center text-slate-700">
            <span className="font-semibold">{t('new_version_label', { defaultValue: 'Nova versão:' })}</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              v{newDisplayVersion}
            </span>
          </div>
          {newVersionData?.version && (
            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-200/60">
              <span>{t('version_update_released', { defaultValue: 'Lançado em' })}</span>
              <span className="text-slate-500 font-medium">{formattedDate(newVersionData.version)}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleUpdateClick}
          disabled={isUpdating}
          className="w-full bg-amber-600 hover:bg-amber-500 active:scale-[0.99] disabled:opacity-75 text-white text-sm font-semibold py-3.5 px-5 rounded-2xl shadow-lg shadow-amber-600/25 flex items-center justify-between transition-all cursor-pointer relative z-10"
        >
          <span>
            {isUpdating 
              ? (t('version_updating_loading', { defaultValue: 'A atualizar...' }))
              : (t('version_update_button', { defaultValue: 'Atualizar Agora' }))}
          </span>
          {isUpdating ? (
            <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}