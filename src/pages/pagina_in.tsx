
import { Header } from "../components/header"



export const Home = () =>{
    return(

        <body className="bg-gradient-to-r from-pink-300 to-red-400  ">
            
        <div > 
            <Header/>

           
      <h1 className="flex justify-center text-4xl mt-80 animate-bounce">Bem vindo a petal rose🌹</h1>
        <div className="text-justify p-6 font-serif text-2xl ">
                   
                <p>Nosso espaço foi criado com muito carinho para que você encontre as rosas mais belas 🌸, frescas 🌿 e cheias de significado ✨.</p>
                <p>Cada pétala carrega um toque especial de amor, cuidado e elegância 💐.</p>
                <p>Sinta-se em casa, explore nossas coleções e deixe-se envolver pelo perfume e encanto das rosas 🌹💕.</p>
                
        </div>

           <h1 className="flex justify-center text-2xl">mini exibicao</h1>  
        <div className="mt-22 flex justify-between">
                <img src="src/img/2_caixs.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
                <img src="src/img/1_boque.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
                <img src="src/img/cetim.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
        </div>
        <div className="flex justify-between">
            <img src="src/img/caixa_de_10.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
                <img src="src/img/caixa_de_20.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
                <img src="src/img/buque_20.JPEG" alt=""
                className="w-60 border-white border-4 m-6"/>
        </div>
        
        
        
        
        
        
        </div>
</body>

    )
}
export default Home