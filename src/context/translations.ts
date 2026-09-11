// Separamos os dados para não disparar re-renders desnecessários no HMR
export const translations = {
  en: {
    // Navigation & UI
    nav_home: "Explore",
    nav_blog: "Blog",
    nav_support: "Support",
    nav_privacy: "Privacy",
    btn_dashboard: "GET STARTED",
    btn_close: "Close Menu",
    theme_light: "Light",
    theme_dark: "Dark",
    theme_auto: "Auto",
    theme_desc_night: "Active: Night (6pm-6am)",
    theme_desc_day: "Active: Day (6am-6pm)",
    menu_nav: "Navigation",
    language: "language",
    footer_rights: "All Rights Reserved",
    theme_desc_auto_base: "Changes automatically based on time.",
    theme_desc_manual: "This mode will stay active until you switch to Auto.",
    theme_click_toggle: "Click to toggle",

    // Hero Section
    hero_title_1: "Build",
    hero_title_2: "Your",
    hero_title_3: "Website",
    hero_title_4: "Here.",
    hero_desc: "The ultimate platform for those seeking extreme performance.",
    hero_subtitle: "No code. No limits.",
    btn_gallery: "VIEW GALLERY",

    // Features
    feat_tag: "Features",
    feat_title: "Everything in one place.",
    feat_1_title: "Drag & Drop Editor",
    feat_1_desc: "Build visually without touching a line of code. Simple, intuitive, and powerful.",
    feat_2_title: "Native SEO",
    feat_2_desc: "Your page is born optimized for search engines, ensuring better visibility.",
    feat_3_title: "Edge Hosting",
    feat_3_desc: "Sites loaded instantly anywhere in the world with our premium CDN.",

    // Showcase
    showcase_title_1: "Excellence in",
    showcase_title_2: "every pixel.",
    showcase_desc: "Explore high-performance websites created by our community of designers and entrepreneurs.",
    project_explore: "Explore Website",
    proj_1_tag: "E-commerce Engine",
    proj_1_desc: "An e-commerce infrastructure focused on loading speed and conversion optimized for modern retail.",
    proj_2_tag: "Design Systems",
    proj_2_desc: "Scalable interface architecture, demonstrating the versatility of our native components and visual fidelity.",

    // CTA
    cta_tag: "Instant Access",
    cta_title_1: "Ready to",
    cta_title_2: "master",
    cta_title_3: "the web?",
    cta_desc: "Join thousands of creators and get your project online in less than 10 minutes.",
    cta_subtitle: "No hidden costs.",
    btn_create_site: "CREATE MY SITE NOW",
    cta_members: "+12k members",

    // --- New Gallery Translations ---
    gallery_limit_error: "Limit Exceeded: Optimization Required",
    gallery_add: "Import Media",
    gallery_support: "Images & videos (JPG, PNG, MP4)\n1 MB photo · 10 MB video",
    gallery_file_error: "Individual size error detected",

    gallery_empty: "Start with an upload",
    gallery_empty_sub: "Initialize sequence via upload",
    gallery_compress: "Reduce",
    gallery_preview_mode: "Asset Preview Mode",
    gallery_scanning: "Scanning Asset...",
    gallery_weight: "Weight",
    gallery_limit_reached: "Full",
    gallery_slots: "Files",
    gallery_tutorial_title: "Combine your best captures in a high-performance professional layout.",
    gallery_limit_label: "Capacity",
    gallery_items: "Items",
    gallery_storage: "Storage",
  gallery_action_blocked: "Action Blocked",
  gallery_action_required: "Action Required",
  gallery_btn_blocked: "Blocked",
  gallery_btn_sync: "Sync Now",
  gallery_error_total_limit: "Remove files (Max 15MB)",
  gallery_error_individual: "Errors in specific files",
  gallery_pending_local: "Pending local files",
  gallery_msg_error: "Some files have errors. Remove or compress items marked in red.",
  gallery_msg_ready: "All set — sync to save. (Compression optional)",
  gallery_compress_images: "Compress images",
  gallery_compress_videos: "Compress videos",
  gallery_default_category: "Portfolio",
  gallery_default_title: "My Gallery",
  gallery_default_desc: "Click to edit your gallery description",
  gallery_tutorial_subtitle: "Empty Gallery",
  gallery_type_photos: "Photos",
  gallery_max_1mb: "Max 1MB",
  gallery_type_videos: "Video",
  gallery_max_10mb: "Max 10MB",

  gallery_new_badge: "New",




    // editor

    editor_modal_save_title: "Publish Site?",
    editor_modal_save_desc: "Do you want to make these changes public for all visitors?",
    editor_modal_discard_title: "Discard everything?",
    editor_modal_discard_desc: "Are you sure? You will lose all edits made in this session.",
    editor_modal_pending_media_title: "Pending Media!",
    editor_modal_pending_changes_title: "Pending Changes",
    editor_modal_nav_media_desc: "You have photos or videos that are still only on your computer. If you leave now, they will be deleted!",
    editor_modal_nav_changes_desc: "You have unsaved text or layout changes. What would you like to do?",
    editor_modal_sync_warning: "Sync media in the gallery before publishing",
    editor_modal_btn_locked: "Locked: Sync Media",
    editor_modal_btn_save: "Save and Publish",
    editor_modal_btn_discard: "Discard Changes",
    editor_modal_btn_discard_all: "Discard and Lose Media",
    editor_modal_btn_continue: "Continue Editing",


    limits: "Limit: {max} characters",
    uploading: "Uploading to cloud...",
    mediaSaved: "Media saved!",
    saveError: "Error saving.",
    maxMedia: "Max Media Size:",
    photoLimit: "PHOTO: 1MB",
    videoLimit: "VIDEO: 5MB",
    whatsappLabel: "WhatsApp (Country Code + Number)",
    whatsappPlaceholder: "Enter number",
    changeMedia: "Change Photo",
    tryAnother: "Try another file",
    weight: "Size:",
    reduceSize: "Reduce Size",
    limitExceeded: "This file exceeds the synchronization limits.",
    compressNow: "Compress Now",
    syncNow: "Sync Now",
    syncing: "Uploading...",
    testLinkError: "Fix or sync media before testing the link.",
    defaultBadge: "PERFORMANCE",
    defaultTitle: "Your Title",
    defaultSub: "Descriptive subtitle.",
    
    defaultBtn: "Get in touch",
        hiddenToPublic: "Hidden from public",
    invalidPhoneDesc: "The button won't appear on the site until a valid WhatsApp number is provided. Solve it below in the control panel.",

    inventory_title: "Catalog",
    wpp_section_title: "Sales Channel",
    wpp_section_desc: "Set the official number to receive orders via WhatsApp.",
    whatsapp_placeholder: "84 000 0000",
    btn_new_product: "New Product",
    status_active: "Active",
    status_paused: "Paused",
    
    

  stat_total: "Total Products",
  label_wpp_section_title: "Sales Channel",
  label_wpp_section_desc: "Set the WhatsApp number where you will receive customer orders.",
  placeholder_whatsapp: "Sales number",
  btn_save_whatsapp: "Save Number",
  error_invalid_phone: "Invalid number for this country.",
  placeholder_search: "Search by name, category, or price…",
  label_product: "Product",
  label_category: "Category",
  label_price: "Price",
  label_status: "Status",

  label_created_at: "Created at",
  label_actions: "Actions",
  view_product: "View",



  product: "Product",
  price: "Price",
  status: "Status",
  actions: "Actions",
 
  no_products_found: "No products found",
  





  whatsapp_success: "WhatsApp updated successfully!",
  save_error: "Error saving",
  product_status_success: "Product status updated!",
  product_status_error: "Could not update product status.",
  save_button: "Save Changes",
  saving: "Saving...",
  

// Showcase Section
showcase_defaultCategory: "New Arrivals",
showcase_defaultTitle: "Our Collection",
showcase_defaultDescription: "Explore our curated selection of exclusive products with premium design and quality.",
showcase_maxPrice: "Max Price",
showcase_empty: "No products available",

// Common / UI
common_all: "All",
common_details: "Details",
common_loading: "Loading...",



showcase_clear_all: "Clear Filters",
    showcase_filter_active: "Active Filters",
    showcase_price_up_to: "Up to ${{price}}",
    showcase_category: "Category: {{category}}",
    filter_unlimited: "Unlimited",
    showcase_searchPlaceholder: "What are you looking for?",
    showcase_viewFull: "Browse All",
    common_close: "Close",
    common_filters: "Filters",


    product_details_visit_store: "Visit Store",
    product_details_final_value: "Final Value",
    product_details_confirm_whatsapp: "Confirm on WhatsApp",
    product_details_no_description: "No detailed description available for this product.",
    product_details_edit: "Edit",
    product_details_cancel: "Cancel",
    product_details_publish: "Publish",
    product_details_share_success: "Link copied!",
    common_category_general: "General",
    editor_limit_reached: "7 section limit reached",
  editor_limit_advice: "Remove blocks or create a new page to keep your site fast and organized.",

  
  editor_add_block: "Add Block",
  editor_back_to_layers: "Back to Layers",
  editor_structure_cols: "Structure (Columns)",
  editor_col_unit: "Col",
  editor_font_size: "Font Size",
  editor_font_small: "Small",
  editor_font_medium: "Medium",
  editor_font_large: "Large",
  editor_text_align: "Text Alignment",
  editor_theme_light: "LIGHT",
  editor_theme_dark: "DARK",
  editor_delete_block: "Delete Block",
  editor_layers_order: "Layers Order",
        


  templates_photography_label: "Fine Art Photography",
templates_photography_description: "See what you can do: transform a minimalist layout into your personal gallery with just a few clicks.",
templates_photography_hero_title: "Your Visual Narrative",
templates_photography_hero_sub: "A lean and sophisticated space for photographers who value every detail.",
templates_photography_gallery_empty_title: "Your New Collection",
templates_photography_gallery_empty_sub: "This gallery is ready for your vision. Start importing your photos.",
templates_photography_gallery_insp_title: "Inspiration and Aesthetics",
templates_photography_gallery_insp_sub: "Example of how the layout behaves with organic tones and soft light.",
templates_photography_contact_title: "Book a Session",

templates_saas_label: "Sales & Product",
templates_saas_description: "Results-oriented layout, highlighting products and subscription plans.",
templates_saas_hero_title: "Sell Smarter",
templates_saas_hero_sub: "The platform that unifies your stock, physical sales, and e-commerce in one place.",
templates_saas_pricing_title: "Our Plans",
templates_saas_features_title: "Enterprise Features",
templates_saas_contact_title: "Schedule a Demo",

templates_brand_label: "Personal Brand",
templates_brand_description: "Focused on establishing authority for mentors, speakers, and coaches.",
templates_brand_hero_title: "Turn Your Knowledge into Business",
templates_brand_hero_sub: "Positioning strategies for professionals aiming for the next level.",
templates_brand_stats_students: "STUDENTS",
templates_brand_stats_lives: "LIVES",
templates_brand_stats_countries: "COUNTRIES",
templates_brand_stats_roi: "ROI",
templates_brand_mentorship_title: "Mentorship Programs",
templates_brand_contact_title: "Talk to My Team",

templates_event_label: "Launch / Event",
templates_event_description: "Dynamic layout for product launches or major events.",
templates_event_hero_title: "The Future of Tech",
templates_event_hero_sub: "Join the biggest innovation event of the year. 24h of networking and insights.",
templates_event_speakers_title: "Confirmed Speakers",
templates_event_pricing_title: "Get Your Ticket (Early Bird)",
templates_event_contact_title: "Event Location",

templates_blank_label: "Empty Canvas",
templates_blank_description: "Start from scratch.",

common_best_seller: "Best Seller",
common_starter: "Starter",
common_limited_vagas: "Limited Spots",
currency_mt: "MT",
unit_per_month: "/month",


mobile_peek_tap_config: "Tap to configure",
mobile_drawer_close_hint: "Swipe down to close",
mobile_discard_changes: "Discard changes",

empty_state_title: "Your page is blank",
empty_state_description: "Turn this space into something amazing! Start by adding sections like galleries, heroes, or pricing tables.",
empty_state_action: "Tap the + button to get started",
editor_confirm_delete: "Are you sure you want to delete this block?",


sidebar_title: "Editing Panel",
sidebar_status_changed: "UNSAVED CHANGES",
sidebar_status_synced: "SITE SYNCED",
sidebar_button_publish: "PUBLISH NOW",
sidebar_button_saving: "PUBLISHING...",
sidebar_button_discard: "Discard Changes",

modal_library_title: "Block Library",
modal_library_add_action: "Add",
section_hero_comercial: "Commercial Hero",
section_galeria_grid: "Grid Gallery",
section_vitrine_produtos: "Product Showcase",


section_texto_imagem_showcase: "Text Mosaic",
section_texto_narrativo: "Text Block",
section_servicos_modern: "Modern Services",
section_contacto_mapa: "Contact & Map",
section_precos_moderno: "Pricing Table",
section_estatisticas_larga: "Statistics",
modal_library_subtitle: "Select a block to build",

view_table: "Table",
view_grid: "Grid",


  action_new_product: "New Product",
  action_new_product_sub: "Launch Catalog",
  action_create_page: "Create Page",
  action_create_page_sub: "Build Experience",
  
  // Sections & States
  section_catalog: "Product Catalog",
  manage_inventory: "Manage Inventory",
  section_paused: "Paused Items",
  page_home: "Landing Page",
  launch_sitemap: "Sitemap Dashboard",

  // Empty States
  empty_products_title: "Your stock is empty",
  empty_products_desc: "Add your first product to start selling.",
  btn_start_catalog: "Start Cataloging",
  empty_pages_title: "No pages created",
  empty_pages_desc: "Create pages to give your store an identity.",

  // Technical Footer
  footer_master_node: "Master Node",
  footer_uptime: "Uptime",
  uptime_active: "Active for",
  uptime_now: "Online Now",
  footer_store_key: "Store Key",
  no_contact: "No contact set",
  loading_engine: "Syncing Storely...",

  new_page: "NEW PAGE",
updated_status: "Updated",
deploy_now: "Create Now",
new_deployment: "New Deployment",
configuring_page: "Configuring Page",
destination_path: "Destination Path",
required: "Required",
blueprint_arch: "Blueprint Architecture",
cancel: "Cancel",
search_page: "Search Pages...",
status_label: "Status",
operational: "Operational",
link_conflict: "Link duplicated. Please rename",
primary_infrastructure: "Primary Infrastructure (Home)",
empty_store_title: "Your Store is empty",
empty_state_desc: "Start building your digital presence. Create your first page using our professional blueprints.",
empty_search_title: "No results found",
empty_search_desc: "We couldn't find any page with that name.",
first_deploy_btn: "DEPLOY FIRST PAGE",




empty_search_description: "We couldn't find any pages with that name. Try another term or clear the search.",
primary_tag: "Primary",
link_copied: "Link copied!",
copy_error: "Error copying link",
design_btn: "DESIGN",
delete_confirm: "Are you sure you want to delete",
delete_error: "Error removing page",



page_deployed: "Page deployed successfully!",
limit_reached_message: "Limit of 10 pages reached!",
limit_error: "Maximum limit of 10 pages reached",
slug_error: "This path is already in use",
active_assets: "Active Pages",



settings_title: "General",
settings_highlight: "Settings",
settings_subtitle: "Security and Brand Identity",
tab_store: "Store",
tab_account: "Account",
tab_security: "Security",
section_presence_title: "Digital Presence",
section_presence_subtitle: "Your brand's public settings",
label_brand_name: "Brand Name",
label_slug: "Store URL (Slug)",
label_description: "Public Description",
label_whatsapp: "Contact WhatsApp",
section_email_title: "Access Email",
label_current_email: "Current Address",
label_new_email: "New Email",
label_confirm_password: "Confirm with Current Password",
btn_update_email: "UPDATE EMAIL",
section_crypto_title: "Cryptography",
section_crypto_subtitle: "Protection and password change",
label_current_password: "Current Password",
label_new_password: "New Password",
label_repeat_password: "Repeat New Password",
btn_recovery_email: "RECOVER VIA EMAIL",
btn_change_password: "CHANGE PASSWORD",
loading_session: "Securing your session...",
edit_label: "EDIT",
save_success: "Change saved successfully!",
email_sent_success: "Link sent! Check your new inbox.",
password_update_success: "Your password has been updated successfully!",






branding: "Branding",
logotype: "Logotype",
upload_cleaning: "Cleaning previous...",
upload_ready: "Clean swap (Auto-delete)",
change_image: "Change Image",
sales_whatsapp: "Sales WhatsApp",
search_country: "Search country...",
not_defined: "Not defined",
save: "Save",
edit: "Edit",
short_description: "Short Description",
description_placeholder: "Click to add a description...",
description_textarea_placeholder: "Ex: The best shoe store in London...",
invalid_phone: "Invalid number for this country",
max_size: "Max 500KB",
file_too_large: "Image too large (Max 1MB).", 
compress_link: "Compress image here",


name_taken: "Name already taken!",
time_left: "left",
logout_btn: "Logout",
confirm_exit: "Exit now",
nav_dashboard: "Dashboard",
nav_pages: "My Pages",
nav_products: "Products",
nav_settings: "Settings",
update_success: "Store updated successfully!",
error_exiting: "Error exiting",


install_how_to: "How to install",
install_download_app: "Download app",
install_ios_alert: "On iPhone, open this in Safari and tap Share → Add to Home Screen.",
install_ios_helper: "Safari → Share → Home Screen",
install_use_supported_mobile_browser: "Use Chrome, Edge, or Samsung Internet",
install_use_supported_desktop_browser: "Use Chrome or Edge to install",
install_interact_to_enable: "Interact with the page to enable it",
install_open_help: "Tap to see how to install",
install_modal_title: "Install app",
install_browser_wait_prompt: "This browser supports installation, but the install prompt is not available yet. Reload the page and interact with it a bit before trying again.",
install_close: "Close",

  whatsappActive: "Active",
  whatsappNotConfigured: "Number not configured",
  goToSettingsToAddNumber: "Add the number in settings",
  whatsappNotConfiguredDesc: "No WhatsApp number configured. Go to store settings to activate the button.",





































  aboutBadge: "About",
aboutTitle: "My Approach: Passion and Precision",
aboutSubtitle: "A clear, modern vision focused on results.",
aboutDescription: "My journey in the digital world started with curiosity and the desire to build useful solutions. Today, I combine creativity, method, and attention to detail to deliver modern, clear, and efficient experiences.",
aboutSecondaryTitle: "Who I Am",
aboutSecondaryDescription: "I am a professional focused on building well-structured, responsive digital solutions designed to grow with quality.",

textSectionSimpleHelp: "Edit the texts. The limits already help keep the layout clean.",
imageSectionSimpleHelp: "Edit the texts and choose a photo. Then click confirm.",
fillBadge: "Write a short badge",
fillMainTitle: "Write the title",
fillSubtitle: "Write the subtitle",
fillDescription: "Write the description",
fillSecondaryTitle: "Write the secondary title",
fillSecondaryDescription: "Write the secondary text",
defaultImageAlt: "Section image",

uploadPhoto: "Upload photo",
confirmPhoto: "Confirm photo",
savingPhoto: "Saving...",
removePhoto: "Remove photo",















  processing: 'Processing...',
  adjustPhoto: 'Adjust photo',
  cropApplied: 'Crop applied successfully.',
  imageSavedSuccess: 'Image uploaded successfully.',
  imageUploadError: 'Failed to upload image.',
  imageRemoved: 'Image removed successfully.',
  imageRemoveError: 'Failed to remove image.',
  uploadSuccess: 'Upload completed successfully.',
  uploadError: 'Failed to upload file.',
  fileReadError: 'Error reading file. Please try again.',
  imageTypeError: 'Please select a valid image.',
  imageTooLargeMustCompress: 'Image is above the limit. Compress it before uploading.',
  compressPhotoLink: 'Compress image',
  choosePhoto: 'Choose photo',
  changePhoto: 'Change photo',
 
  movePhoto: 'Move photo',
  imageWeight: 'Size',
  imageSizeLimit: 'Maximum size: {{size}} MB',
  defaultImage: 'Default image',
  
  editor_modal_sync_required: 'Synchronization required',


  imageTooLargeCropBlocked: 'Cannot apply crop to an image above the limit.',
saveBlockedPendingSection: 'Action blocked: section {{section}} has pending or oversized uploads.',
savingPage: 'Saving page...',
publishedSuccess: 'Published successfully!',
publishError: 'Error while publishing.',











  cropError: "Error applying crop",
  applyCrop: "Apply crop",
  sectionsNeedSaving:"Sections pending to be saved",
  imageSelectedConfirmToSave:"Image selected. Confirm to save.",
  imageReadyConfirmHelp:"The image has been selected. Now click confirm image to save it.",

  clickToEdit: "Click to edit",
  tapToEdit: "Tap to edit",
  editingSection: "Editing",
  loadingEditor: "Loading editor...",
  waitingAddressesLoad: "Waiting for addresses to load...",
    imageSelectionCancelled: "Image selection cancelled",





    cacheLabel: "cache",
  cacheStatusLocal: "local",
  cacheStatusNetwork: "network",
  cacheStatusWaiting: "waiting",
  cacheStatusSyncing: "syncing",

  invalid_store_name: "Invalid store name",
    blockDefaultName: "BLOCK",



  marketplace_product_fallback: "Product",
marketplace_general: "General",
marketplace_store_fallback: "Store",
marketplace_store_default_description: "Discover products and updates from this store.",
marketplace_all_categories: "All categories",
marketplace_all_stores: "All stores",
marketplace_new_products: "New products",
marketplace_more_new_products: "More new products",
marketplace_available_stores: "Available stores",
marketplace_more_stores: "More stores to explore",
marketplace_start_selling_title: "Start selling on Storely",
marketplace_start_selling_subtitle: "Create your account and start publishing products in a fast, modern, professional marketplace.",
marketplace_start_selling_cta: "Create account",
marketplace_search_placeholder: "Search marketplace",
marketplace_suggestions: "Suggestions",
marketplace_recent_searches: "Recent searches",
marketplace_explore: "Explore",
marketplace_sell_now: "Sell now",
marketplace_clear_filters: "Clear filters",
marketplace_view_store: "View store",
marketplace_main_feed: "Main feed",
marketplace_hero_title_line_1: "Discover products,",
marketplace_hero_title_line_2: "stores, and smart suggestions",
marketplace_hero_explore: "Explore marketplace",
marketplace_hero_sell: "I want to sell",
marketplace_hero_smart_block: "Smart search and recommendations",
marketplace_showcase_title: "Community marketplace",
marketplace_showcase_subtitle: "Products, stores, and suggestions.",






marketplace_related_products: "Related products",
marketplace_related_stores: "Related stores",
marketplace_search_products: "Found products",
marketplace_search_stores: "Found stores",


marketplace_search_exact: "Exact result",
marketplace_search_approximate: "Approximate result",
marketplace_search_related: "Related results",
marketplace_search_fallback: "Marketplace suggestions",
marketplace_cache: "cache",
marketplace_cache_expired: "expired",
marketplace_syncing: "syncing",
marketplace_refresh_cache: "refresh cache",
marketplace_not_found_title: "Nothing very close was found",
marketplace_not_found_subtitle: "Try another name, category, or store. You can also choose one of the suggestions below.",
marketplace_try_these: "Try these",























storely_product_fallback: "Product",
storely_general: "General",
storely_store_fallback: "Store",
storely_store_default_description: "Discover products and updates from this store.",
storely_all_categories: "All categories",
storely_all_stores: "All stores",
storely_new_products: "New on Storely",
storely_more_new_products: "More new finds",
storely_available_stores: "Stores on Storely",
storely_more_stores: "More stores to explore",
storely_related_products: "Related products",
storely_related_stores: "Related stores",
storely_matching_stores: "Matching stores",
storely_similar_stores: "Similar stores",
storely_more_like_this: "More like this",
storely_exact_matches: "Exact matches",
storely_close_matches: "Close matches",
storely_suggestions_for_you: "Suggestions for you",
storely_start_selling_title: "Start selling on Storely",
storely_start_selling_subtitle: "Create your account and publish products in a fast, beautiful, smart way.",
storely_start_selling_cta: "Create account",
storely_search_placeholder: "Search Storely",
storely_suggestions: "Suggestions",
storely_recent_searches: "Recent searches",
storely_explore: "Explore",
storely_sell_now: "Create my store for free →",
storely_clear_filters: "Clear filters",
storely_view_store: "View store",
storely_main_feed: "Main feed",
storely_search_exact: "Exact result",
storely_search_approximate: "Approximate result",
storely_search_related: "Related results",
storely_search_fallback: "Storely suggestions",
storely_cache: "cache",
storely_cache_expired: "expired",
storely_syncing: "syncing",
storely_refresh_cache: "refresh",
storely_not_found_title: "Nothing very close was found",
storely_not_found_subtitle: "Try another name, category, or store. You can also choose one of the suggestions below.",











storely_search_no_exact_but_close: "No exact result, but there are close matches",
storely_search_no_exact_but_related: "No exact result, but there are related results",
storely_search_nothing_close: "Nothing very close, but there are suggestions for you",
storely_search_message_close: "I could not find an exact name, but here are the closest matches that may help you.",
storely_search_message_related: "I could not find an exact result, but I selected related things you may like.",



storely_search_empty_title: "No results found",
storely_search_empty_subtitle: "We couldn't find anything matching your search. Try a different word or explore other products below.",
storely_search_message_fallback: "We didn't find anything close, but here are some suggestions you might like.",
storely_other_products_we_have: "Other products we have",
storely_try_these: "Try searching for:",






marketplace_hero_badge: "Discover more in one place",
marketplace_hero_subtitle: "Explore a marketplace with multiple types of products and shops.",
marketplace_hero_point_products: "Different product types",
marketplace_hero_point_stores: "Multiple stores",
marketplace_hero_point_discover: "Easy to explore",
storely_cta_title: "Start selling your products today",
storely_cta_subtitle: "Create your store, showcase your products and reach more customers in one simple platform.",


















product_form_create_title: "Create product",
product_form_edit_title: "Edit product",
product_form_intro: "Fill in the essentials without getting lost. First images, then price, category, and description.",
product_form_cover: "COVER",
product_form_add_cover: "Add cover",
product_form_add_image: "Add image",
product_form_image_help: "Use up to 4 images. The first one is the cover. Each image must be 1MB or less.",
product_form_image_too_large: "Image is too large. Use 1MB or less.",
product_form_name_label: "Name",
product_form_name_placeholder: "What are you selling?",
product_form_price_label: "Price",
product_form_price_whole: "Value",
product_form_price_cents: "Cents",
product_form_price_help: "The value is separated from the cents to avoid confusion. Example: 4 and 00 becomes 4.00.",
product_form_category_label: "Category",
product_form_category_placeholder: "Example: Furniture",
product_form_unit_label: "Unit of measure",
product_form_unit_un: "Unit",
product_form_unit_par: "Pair",
product_form_unit_kit: "Kit",
product_form_unit_pacote: "Pack",
product_form_unit_caixa: "Box",
product_form_unit_kg: "Kilogram",
product_form_unit_g: "Gram",
product_form_unit_l: "Liter",
product_form_unit_ml: "Milliliter",
product_form_unit_m: "Meter",
product_form_unit_cm: "Centimeter",
product_form_unit_m2: "Square meter",
product_form_unit_m3: "Cubic meter",
product_form_unit_hora: "Hour",
product_form_unit_dia: "Day",
product_form_unit_semana: "Week",
product_form_unit_mes: "Month",
product_form_unit_servico: "Service",
product_form_unit_peca:"Piece",
product_form_description_label: "Description",
product_form_description_placeholder: "Explain the product in a simple, clear, and useful way.",
product_form_description_help: "Focus on what helps the customer decide: size, material, color, usage, or condition.",
product_form_pending_title: "Still incomplete",
product_form_ready_title: "Ready to save",
product_form_ready_subtitle: "The main data has been filled in correctly.",
product_form_pending_name: "Name",
product_form_pending_category: "Category",
product_form_pending_price: "Price",
product_form_pending_cover: "Cover",
product_form_pending_images: "Images",
product_form_create_action: "Publish",
product_form_save_action: "Save",
product_form_created_success: "Product created successfully.",
product_form_updated_success: "Product updated successfully.",
product_form_save_error: "Could not save the product.",
product_form_store_not_found: "Admin store not found.",
product_form_product_not_found: "Product not found.",
product_form_error_name_required: "Add a name for the product.",
product_form_error_name_short: "The name is still too short.",
product_form_error_category_required: "Choose or type a category.",
product_form_error_price_required: "Set a price for the product.",
product_form_error_price_invalid: "The price must be greater than zero.",
product_form_error_cover_required: "Add a cover image.",
product_form_error_images_invalid: "Some images have size issues.",
product_form_image_delete_error: "Could not delete the temporary image.",
storely_search: "Search",
storely_all: "All",
storely_clear: "Clear",

store_currency_section_title: "Store currency",
store_currency_section_desc: "On the first time, we automatically detect the most likely currency based on the device and save it if the store does not have one yet.",
store_currency_detected_label: "Detected",
store_currency_save_success: "Currency saved successfully.",
store_currency_save_error: "Error saving currency.",
store_products_empty: "No products found.",








product_form_image_removed_cloud: "Image removed from the cloud and the form.",
product_form_image_removed_local: "Image removed from the form.",
product_form_image_removed_local_only_after_cloud_fail: "Image removed only from the form. Cloud deletion failed.",
















product_form_image_replaced_cloud: "Previous image deleted from the cloud and replaced in the form.",
product_form_image_replaced_local: "Image replaced in the form.",
product_form_image_replaced_local_only_after_cloud_fail: "Image replaced in the form, but the previous one could not be deleted from the cloud.",
product_form_image_replace_error: "Could not replace the image.",


clearCache : "Clear cache",
cacheClearedSuccess : "Cache cleared successfully.",
cacheClearedError : "Error clearing cache.",
cache_refresh_success : "Cache refreshed successfully.",
cache_refresh_error : "Error refreshing cache.",





new_product: "New product",
  product_details_share_text: "Check out this product:",
  product_details_whatsapp_unavailable: "The store WhatsApp number is not available.",
  product_details_order_message_intro: "Hello, I want to order this product:",
  product_details_quantity: "Quantity",
  product_details_total: "Total",
 


  storely_found_products: "Products found",


storely_categories: "Categories",

storely_products: "products",
storely_stores: "stores",

storely_sell_cta_title: "Start selling with your own store",
storely_sell_cta_subtitle: "Create your store, showcase your products, and reach more people beautifully.",
storely_no_results_title: "No results found",
storely_no_results_subtitle: "Try another name, category, or store to discover more products.",







    product_details_order_message_buyer_hint: "I would like more details and current availability.",
    product_details_order_message_product: "Product",
    product_details_order_message_unit_price: "Unit price",
    product_details_order_message_quantity: "Quantity",
    product_details_order_message_total: "Total",
    product_details_order_message_store: "Store",
    product_details_order_message_closing: "Can you confirm whether it is still available?",
    product_details_cta_badge: "Quick purchase",
    product_details_cta_title: "Liked this product?",
    product_details_cta_subtitle: "Talk to the store now and confirm availability, price, and delivery in seconds.",
    product_details_price_label: "Price per unit",
    product_details_quantity_label: "Choose quantity",
    product_details_gallery_open: "Open image",
    product_details_image_counter: "{{current}} of {{total}}",
    product_details_about_product: "About this product",

    product_form_unit_rosas:"Unit of measure format",








   










    auth_brand: "Storely",
    auth_support: "Support",
    auth_callback_success: "Authentication completed successfully.",
    auth_callback_error: "Could not complete authentication.",
    auth_callback_title: "Finishing authentication",
    auth_callback_desc: "Please wait while we securely return you to Storely.",
    auth_enter_email_first: "Enter your email first.",
    auth_reset_email_sent: "Password reset email sent.",
    auth_reset_email_error: "Failed to send password reset email.",
    auth_store_required: "Please enter your store name.",
    auth_store_invalid: "Please enter a valid store name.",
    auth_slug_min_chars: "Use at least 3 characters.",
    auth_slug_invalid_chars: "Use only lowercase letters, numbers and hyphens.",
    auth_slug_reserved: "This store name is not available.",
    auth_slug_checking: "Checking store name...",
    auth_slug_taken: "This store name already exists.",
    auth_slug_available: "Store name is available.",
    auth_slug_wait: "Please wait while we check the store name.",
    auth_user_missing: "User account was created, but user data is missing.",
    auth_signup_success: "Account created successfully.",
    auth_login_success: "Welcome back.",
    auth_generic_error: "Something went wrong. Please try again.",
    auth_desktop_big_title_line1: "BUILD YOUR",
    auth_desktop_big_title_line2: "DIGITAL",
    auth_desktop_big_title_line3: "STORE",
    auth_desktop_subtitle_compact: "Simply, quickly, and for free. Start selling today with the best platform for entrepreneurs.",
    auth_desktop_point_1: "Instant Configuration",
    auth_desktop_point_2: "Intuitive Admin Panel",
    auth_desktop_point_3: "Expert Support",
    auth_mobile_title_line1: "Create your",
    auth_mobile_title_line2: "digital store",
    auth_mobile_subtitle_professional: "Start selling with a professional access experience designed for mobile and desktop.",
    auth_create_account: "Create account",
    auth_login: "Login",
    auth_start_here: "Start here",
    auth_welcome_back_small: "Welcome back",
    auth_heading_signup: "Create your account",
    auth_heading_login: "Sign in to Storely",
    auth_signup_description_professional: "Enter your email, password and store name to start your store professionally.",
    auth_login_description_professional: "Use your email and password to continue to your dashboard securely.",
    auth_error_title: "Something went wrong",
    auth_email_label: "Email",
    auth_email_placeholder: "name@email.com",
    auth_store_name_label: "Store name",
    auth_store_name_placeholder: "Ex: Luxury Boutique",
    auth_store_url_preview: "URL",
    auth_password_label: "Password",
    auth_forgot_password: "Forgot password?",
    auth_forgot_title: "Recover your access",
    auth_forgot_description: "Enter your email and we will send you a secure link to create a new password.",
    auth_send_reset_link: "Send reset link",
    auth_recovery_label: "Recovery",
    auth_or: "or",
    auth_switch_login_title: "Already have an account?",
    auth_switch_signup_title: "Need a new store account?",
    auth_go_to_login: "Go to login",
    auth_go_to_signup: "Create account first",
    auth_account_found_title: "Account found",
    auth_existing_email_go_login: "This email is already registered. Please continue through login.",
    auth_existing_store_go_login: "This store name is already in use. If it is yours, please continue through login.",
    auth_remembered_password: "Remembered your password?",
    auth_back_to_login: "Back to login",
    auth_reset_invalid_link: "Invalid or expired recovery link.",
    auth_reset_fill_both: "Fill in both password fields.",
    auth_reset_password_mismatch: "Passwords do not match.",
    auth_reset_password_short: "Password must be at least 6 characters.",
    auth_reset_success: "Password updated successfully.",
    auth_reset_save_error: "Could not update password.",
    auth_reset_label: "Recovery",
    auth_reset_title: "Reset password",
    auth_reset_description: "Create a new password for your Storely account.",
    auth_reset_new_password: "New password",
    auth_reset_confirm_password: "Confirm password",
    auth_reset_save_password: "Save new password",

    auth_callback_loading_message: "Validating your credentials...",
    auth_callback_loading_title: "Checking access",
    auth_callback_success_title: "Verified",
    auth_callback_error_title: "Access error",
    auth_callback_redirecting: "Redirecting...",
    auth_callback_back_login: "Back to login",
    auth_callback_link_error: "This link has expired or has already been used.",
    auth_callback_recovery_success: "Identity confirmed. Let's create your new password.",
    auth_callback_email_change_success: "Email verified successfully. Your account has been updated.",
    auth_callback_login_success: "Authentication completed successfully.",
    auth_callback_no_session: "We could not validate your session. Please try again.",
    auth_callback_generic_error: "Could not complete authentication.",

    auth_password_min_length: "Password must be at least 6 characters.",
    auth_password_hint_min: "Minimum 6 characters.",
    auth_show_password: "Show password",
    auth_hide_password: "Hide password",

    auth_signup_description_short: "Use your email, password and store name to get started.",
    auth_login_description_short: "Sign in securely to continue to your dashboard.",
    auth_side_title_1: "Smart store name check",
    auth_side_text_1: "Store name verification uses debounce and cache to reduce unnecessary reads and keep API usage efficient.",
    auth_side_title_2: "Secure recovery flow",
    auth_side_text_2: "Password recovery returns the user directly to Storely so a new password can be created safely.",


        auth_store_name_length_invalid: "Store name must be between 2 and 40 characters.",








        security_recovery_title: "Reset Password",
security_recovery_subtitle: "Create a new secure password for your account.",
security_recovery_mode_active: "Recovery Mode Active",
security_current_password: "Current Password",
security_new_password: "New Password",
security_confirm_password: "Repeat Password",
security_password_min_error: "Password must be at least 6 characters.",
security_password_min_hint: "Minimum 6 characters.",
security_passwords_not_match: "Passwords do not match.",
security_current_password_required: "Enter your current password.",
security_current_password_incorrect: "Current password is incorrect.",
security_email_missing: "No email found for this account.",
security_reset_success: "Password reset successfully!",
security_reset_email_sent: "Reset email sent successfully!",
security_reset_email_error: "Failed to send reset email.",
security_sending_email: "Sending...",
security_forgot_password: "Forgot my password",
security_save_new_password: "Save New Password",







store_header_page_fallback: "Page",
store_header_store_fallback: "Store",
store_header_menu: "Menu",
store_header_open_menu: "Open menu",
store_header_close_menu: "Close menu",
store_header_back_admin: "Back to Dashboard",
store_header_create_account: "Start selling",
store_header_account_area: "Your account",
store_header_navigation: "Pages",
store_header_new_here: "New here?",
store_header_explore_stores: "Other stores",
store_header_discover_more: "Discover more",

btn_create_product: "Launch Product",

dashboard_store_default_name : "My Store",
dashboard_syncing : "Syncing",

dashboard_welcome_new : "Let’s set up your store in a simple way.",
dashboard_welcome_incomplete : "Your store is started. Complete the missing steps below.",
dashboard_welcome_ready : "Your store is ready. You can manage everything quickly.",

dashboard_stat_products : "Products",
dashboard_stat_pages : "Pages",
dashboard_stat_setup : "Setup",

dashboard_progress_label : "Progress",
dashboard_progress_completed : "completed",

dashboard_setup_label : "Setup",
dashboard_setup_title : "Complete your store",
dashboard_setup_desc : "Follow these simple steps so customers can see and contact your store.",

dashboard_quick_label : "Quick actions",
dashboard_quick_title : "Manage faster",

dashboard_quick_products_title : "Products",
dashboard_quick_products_desc : "Add and manage your catalog.",

dashboard_quick_pages_title : "Pages",
dashboard_quick_pages_desc : "Create and edit your store pages.",

dashboard_quick_settings_title : "Settings",
dashboard_quick_settings_desc : "Set phone number, currency and more.",

dashboard_next_label : "Next step",

dashboard_step_phone_title : "Add phone number",
dashboard_step_phone_desc : "Set your WhatsApp or contact number.",
dashboard_step_phone_action : "Open settings",

dashboard_step_currency_title : "Set currency",
dashboard_step_currency_desc : "Choose the currency for your prices.",
dashboard_step_currency_action : "Set currency",

dashboard_step_product_title : "Create first product",
dashboard_step_product_desc : "Add a product to start your catalog.",
dashboard_step_product_action : "Add product",

dashboard_step_page_title : "Create home page",
dashboard_step_page_desc : "Make the main page for your store.",
dashboard_step_page_action : "Create page",

dashboard_error_title : "Something went wrong",
dashboard_error_desc : "We could not load your dashboard.",
dashboard_error_action : "Reload",
dashboard_products_label : "Products",
dashboard_products_title : "Your products",
dashboard_products_manage : "Manage products",
dashboard_products_empty : "No products yet",

dashboard_pages_label : "Pages",
dashboard_pages_title : "Your pages",
dashboard_pages_manage : "Manage pages",
dashboard_pages_empty : "No pages yet",


dashboard_currency_missing : "No currency",

dashboard_paused_title : "Paused products",
dashboard_page_label : "Page",



dashboard_quick_hint : "Use these anytime to keep building your store.",
dashboard_setup_focus_title : "Complete the next step",
dashboard_setup_focus_desc : "Finish the missing setup items so your store is fully ready.",

delete_product_confirm_title: "Delete product?",
delete_product_confirm_text: "This action cannot be undone. You are about to remove",
btn_cancel: "Cancel",
btn_delete: "Delete",
product_delete_success: "Product deleted successfully",
product_delete_error: "Could not delete the product",
product_status_update_error: "Could not update product status",
products_empty_title: "No products yet",
products_empty_description: "Start by adding your first product so your store can show items to visitors.",
products_empty_step_1_title: "Add product",
products_empty_step_1_text: "Create your first product with image, name and price.",
products_empty_step_2_title: "Organize details",
products_empty_step_2_text: "Use category and status to keep everything clear.",
products_empty_step_3_title: "Set currency",
products_empty_step_3_text: "Choose your store currency so prices stay consistent.",
no_products_found_description: "Try another search term or clear the search to see all products.",
pause_product: "Pause",
activate_product: "Activate",
inventory_description: "Manage your products, prices and visibility in one simple place.",
quick_actions: "Quick actions",
manage_pages: "Manage pages",
currency: "Currency",



Open_site: "Open site",



products_tutorial_title: "Quick guide",
products_tutorial_description: "Complete the basics so your store stays ready.",
products_tutorial_step_1_title: "Set currency",
products_tutorial_step_2_title: "Add products",
products_tutorial_step_3_title: "Review status",












active_products_title: "Active products",
paused_products_title: "Paused products",
no_active_products: "No active products",
product_activated_success: "Product activated successfully",
product_paused_success: "Product paused successfully",










currency_section_description_saved: "This is the main currency used to show prices in your store.",
currency_section_description_required: "Choose and save the main currency before using product prices.",
currency_current_label: "Current status",
currency_action_label: "Action",
currency_select_label: "Select currency",
currency_edit_hint: "You can change the store currency here if needed.",



currency_section_title: "Store currency",
currency_section_help_text: "Choose the currency used in your product prices.",
currency_suggested_prefix: "Suggested:",
currency_must_save_notice: "Choose and save the currency.",
btn_edit: "Edit",
save_currency: "Save",

currency_section_desc : "If the store does not have a saved currency yet, the system tries to detect and save it automatically only once.",
currency_label : "Currency",
currency_placeholder : "Search by currency code or currency name",
currency_save_success : "Currency saved successfully.",
currency_save_error : "Error saving currency.",
currency_detected_prefix : "Detected:",
currency_source_prefix : "Source:",


currency_required_badge : "Required",
currency_geo_used : "Location used",
currency_required_text : "We used your location to suggest an initial currency. Confirm and save it to display prices correctly.",
currency_saved_badge : "Set",
currency_saved_text : "This currency will be used to display your store prices.",
currency_current_prefix : "Current:",
currency_confirm_label : "Confirm currency",
currency_change_label : "Change currency",
currency_save_hint : "Setting the currency is important to display correct prices to customers.",







contact_title: "Contact us",
contact_subtitle: "Send us a message, view our location, or use the contact details below.",
contact_title_placeholder: "Contact us",
contact_subtitle_placeholder: "Send us a message, view our location, or use the contact details below.",
contact_label_phone: "WhatsApp",
contact_label_email: "Email",
contact_label_location: "Location",
contact_form_title: "Message",
contact_form_card_title: "Send your message",
contact_form_card_desc: "Use the form below to contact us by WhatsApp or email.",
contact_form_name: "Name",
contact_form_message: "Message",
contact_form_name_placeholder: "Your name",
contact_form_message_placeholder: "Write your message...",
contact_send_now: "Send now",
contact_open_maps: "Open map",
contact_route_now: "View route",
contact_close: "Close",
contact_modal_title: "How would you like to send it?",
contact_email_subject: "New contact message",
contact_message_hello: "Hello!",
contact_missing_value: "Not set",
contact_loading_contact: "Loading contact...",
contact_missing_settings_title: "Missing contact details",
contact_missing_settings_desc: "Set the account WhatsApp number and email in settings so visitors can contact you.",
contact_go_settings: "Go to settings",
contact_unavailable_title: "Contact not available yet",
contact_unavailable_desc: "This store has not set a WhatsApp number or email to receive messages yet.",
contact_location_field_placeholder: "Example: Avenida 24 de Julho, Maputo, Mozambique",
contact_location_missing_public: "Location not set yet",
contact_location_format_hint: "Use a clear address. Example: Avenida 24 de Julho, Maputo, Mozambique or CT University, Ludhiana, Punjab, India",
contact_title_limit: "title up to {{count}} characters",
contact_subtitle_limit: "description up to {{count}} characters",
contact_location_limit: "location up to {{count}} characters",
contact_form_name_limit: "name up to {{count}} characters",
contact_form_message_limit: "message up to {{count}} characters",
contact_admin_help_title: "Edit directly in this section",
contact_admin_help_desc: "Click the dashed fields to update the title, description, and location without leaving this area.",
contact_map_hidden_admin: "The map appears only outside the admin panel.",
contact_default_location: "Maputo",












contact_edit_section_title: "Edit directly in this section",
contact_edit_section_desc: "Change title, subtitle and location here. The map only appears on the public page.",
contact_location_area_label: "Location area",
contact_location_placeholder: "Example: ISCTEM Maputo, Zimpeto, CT University",
contact_location_help: "Type a place, university, area or city. We preserve the name and only help Google Maps understand it better.",
contact_location_max: "Max {{count}}",
contact_location_final: "final: {{value}}",
contact_location_smart_help: "smart location help",
contact_location_final_search: "Final search: {{value}}",
contact_location_dropdown_hint: "Suggestion from your saved locations list",
contact_location_final_help: "Showing the final Google Maps search without removing the original name.",
contact_add_location_here: "Add a location here.",












product_form_add_more_images: "Add more images",
product_form_compress_image_link: "Image is too large. Click here to compress it",
product_form_extra_image_label: "Extra image {{number}}",


clickToEditHint: "Select this section to edit exactly here.",
tapToEditHint: "Tap this section and use the card below to customize.",
mobileCustomizeCardHint: "Use the card below to customize this section.",


numberMissing: "Number missing",
addNumberHint: "Add the store number in Settings to activate the button.",
mediaSettings: "Media settings",


store_page_links_discover: "Discover pages",
store_page_links_items: "pages",
store_page_links_page: "Page",
store_page_links_home_badge: "home",
store_page_links_navigate_label: "Open page",

store_page_links_title: "Continue browsing",
store_page_links_subtitle: "Move to another page of this store.",
store_page_links_current_label: "Current page",







media_provider_not_detected: "Link not detected yet",
media_hint_paste: "Paste a link.",
media_error_duplicate: "This link is repeated. Use each link only once.",
media_error_invalid_url: "This link is not valid.",
media_error_wrong_type_media: "This is not a supported media link.",
media_error_unsupported_media: "This media link is not supported yet.",
media_error_wrong_type_social: "This is not a valid social link.",
media_paste_button: "Paste",
media_edit_button: "Edit",
media_done_button: "Done",
media_editor_title: "Manage your media and social links",
media_editor_compact_hint: "Add one link at a time. Valid cards stay compact until you edit them again.",
media_section_media: "Media",
media_section_social: "Social links",
media_group_guide_compact: "Paste a media link and finish it before adding another.",
social_group_guide_compact: "Paste a social link and finish it before adding another.",
media_finish_current_first: "Finish the current item first before adding another.",
media_empty_media: "No media yet",
media_empty_media_hint: "Add a media link to show video or music here.",
media_empty_social: "No social links yet",
media_empty_social_hint: "Add a social link to help visitors find your pages.",
media_add_media: "Add media",
media_add_social: "Add social link",
media_placeholder_media_link: "Paste media link",
media_placeholder_social_link: "Paste social link",
media_provider_youtube: "YouTube",
media_provider_spotify: "Spotify",
media_provider_apple_music: "Apple Music",
media_provider_facebook: "Facebook",
media_provider_instagram: "Instagram",
media_provider_tiktok: "TikTok",
media_provider_x: "X",
media_provider_linkedin: "LinkedIn",
media_provider_website: "Website",
media_open_link: "Open",
media_status_valid: "Valid",
media_status_invalid: "Invalid",
media_summary_valid_total: "valid links",
media_toast_item_valid: "Valid link added successfully.",



media_provider_video: "Video",
media_provider_image: "Image",
media_tap_to_open: "Tap to open",

media_provider_youtube_music: "YouTube Music",
media_clear_button: "Clear link",








store_music_step:"Change audio",
store_music_title: "Store music",
  store_music_subtitle: "Music link",
  store_music_url_label: "Music URL",
  store_music_url_placeholder: "Paste a link from YouTube, Spotify, or Apple Music",
  store_music_provider_unknown: "undefined",
  store_music_invalid_url: "invalid link",
  store_music_volume: "Volume",
  store_music_enabled: "Enable music for the public",
  store_music_clear: "Remove",
  store_music_empty: "No music set. Supports audio only",

  store_music_help: "Supports .mp3,.m4a,.aac,.ogg,.wav,.webm,.flac,audio, For public view; ",









  // EN
store_required_title: "Required information",
store_required_subtitle: "Add the number customers will use to contact your store.",
store_phone_required_label: "Required number",
store_phone_required_hint: "Used for WhatsApp orders and customer contact.",
store_customization_title: "Customization",
store_customization_subtitle: "Customize your logo, description and background music.",
phone_number: "Phone number",

store_music_step_1: "1. Choose audio",
store_music_step_2: "2. Choose where it plays",
store_music_upload_help: "Supported: MP3, M4A, AAC, OGG, WAV, WEBM, FLAC. Max 12MB.",
store_music_choose_file: "Choose file",
store_music_external_link: "Download music from YouTube",store_music_compress_link: "Compress audio",
store_music_select_part_help: "Move the bar to choose the exact 1 minute that will play in your store.",
store_music_clip_range: "Music part",
store_music_total: "Total",
store_music_clip_length: "Selected",
store_music_volume_hint: "Volume is limited to avoid disturbing visitors.",
store_music_disable_hint: "Music turns on after upload. You can disable it here.",
store_music_empty_help: "Choose an audio file, select the best 1 minute and test it before saving.",
store_music_status_on: "Active",
store_music_status_off: "Off",
store_music_save_clip: "Save music",
store_music_delete_pending: "Delete temporary",
store_music_invalid_file: "Unsupported audio format",
store_music_file_too_large: "Audio file is too large",
store_music_upload_error: "Audio upload failed",
store_music_play_preview: "Test play",
store_music_pause_preview: "Pause",
store_music_clip_help: "Choose a music part up to 1 minute.",


store_music_now_playing: "Playing",



store_phone_missing_title: "Add your number",
store_phone_missing_help: "Customers need this number to contact your store and place orders. Click Here",
store_music_play_error: "Could not play the audio. Try choosing another file.",





section_email_subtitle: "Update your account email safely.",

account_email_updated_title: "Access updated",
account_email_updated_desc: "Your new email was verified and is now active.",
account_email_pending_title: "Email change in progress",
account_resend_link: "Resend link",
account_wait_seconds: "Wait {seconds}s",
account_confirm_password: "Confirm with password",
account_new_email_placeholder: "new@email.com",
account_password_placeholder: "Your current password",
account_updating_email: "Updating...",
account_email_not_available: "Email not available",
account_error_new_email_required: "Enter the new email.",
account_error_password_required: "Enter your current password.",
account_error_wrong_password: "Current password is incorrect.",
account_error_no_pending_email: "No pending email change.",
account_success_email_link_sent: "Link sent! Check your new email.",
account_success_email_link_resent: "Link resent!",


error_unauthorized: "Session expired. Please log in again.",






upload_error : "Upload failed. Please try again.",

noImage: "No Image",
  noCover: "No Cover",
  products: "products",

  official_store: "Official Store",
    enter_btn: "Enter Store",
    click_anywhere: "Click anywhere to enter",
    activate_audio: "Enable Audio",
    enter_store_aria: "Enter the storefront experience",

    category: "Category",


    search_in_store: "In this Store",
    search_global_btn: "Search in other stores for",
    search_no_results: "No results found.",
    search_suggestions: "Suggestions",


  search_global_categories: "Global Categories",
  search_see_global: "Other Stores",
  search_no_categories: "No local categories found.",
  search_local_results: "Store Products",
  search_no_local_results: "No products found in this store.",
  search_global_button: "Search outside this store",








  cat_tech: "Technology & Gadgets",
  cat_fashion: "Clothing & Fashion",
  cat_grocery: "Supermarket & Snacks",
  cat_home: "Home, Decor & Comfort",
  cat_beauty: "Health & Cosmetics",
  cat_fitness: "Fitness & Outdoor",
  cat_books: "Books & Stationery",
  cat_accessories: "Accessories & Bags",
  cat_baby: "Baby",
  cat_kids: " Kids",
  cat_pets: "Pet Shop",
  cat_tools: "Tools & Hardware",
  cat_toys: "Toys & Games",
  cat_auto: "Automotive & Parts",


  common_general: "General",
  common_of: "of",
  catalog_collection: "Collection",
  catalog_default_title: "Full Catalog",
  catalog_default_subtitle: "Check out our available products",
  catalog_add_description: "Add a description...",
  catalog_layout_sample: "Layout Sample",
  catalog_actives: "active",
  catalog_no_products: "No products registered",
    catalog_page: "Product Catalog",







    
      slug_tecnologia: "technology",
      slug_moda: "fashion",
      slug_grocery: "groceries",
      slug_casa: "home",
      slug_beleza: "beauty",
      slug_desporto: "sports",
      slug_cultura: "books",
      slug_acessorios: "accessories",
      slug_bebes: "baby",
      slug_animais: "pets",
      slug_ferramentas: "tools",
      slug_brinquedos: "toys",
      slug_automovel: "automotive",
      slug_design: "design",
      cat_design_editor: "video-editing",
      cat_digital_3d: "3d-photos",
      storely_filters_search:"Search Storely",







  
  safe_contact: "Secure Contact",
  wa_greeting: "Hello! I'm interested in this product.",
  wa_product: "Product",
  wa_store: "Store",
  wa_quantity: "Quantity",
  wa_unit: "Unit",
  wa_price: "Price",
  wa_total: "Total",
  wa_summary: "Summary",
  wa_link: "Link",
  wa_confirm: "Could you confirm availability?",

  Vendedor_Verificado:"Verified Seller",
  add_note_placeholder: "Add a note to your order (e.g., color, size...)",
  related_products: "You might also like",


  dashboard_title: "Dashboard",
    ai_assistant: "Intelligent Assistant",
    ai_search_placeholder: "AI: I need help with...",
    ai_processing: "Processing your query...",
    btn_configure: "Configure",
    setup_configured: "Configured",
    setup_overview_title: "Store Configuration",
    setup_action_needed: "Action Required",
    setup_all_ready: "All Ready!",
    cta_ready_scale: "Ready to scale?",
    cta_add_products: "Add more products to your catalog.",
    dashboard_welcome_title: "Hello, {name}!",
    dashboard_welcome_desc_pending: "Let's prepare your store!",
    dashboard_welcome_desc_ready: "Store synced in real-time!",
    stat_total_products: "Total Products",
    stat_active_items: "Active Items",
    stat_total_pages: "Total Pages",
    stat_setup_progress: "Setup Progress",

    ai_answer_payments: "The currency determines how your customers view prices. To adjust this, your payment methods, or item prices, go directly to your catalog management by clicking the button below.",
    btn_edit_currency: "Manage Currency & Prices",
    ai_answer_products: "Managing your catalog is very simple! You can add photos, change prices, and manage stock in the Products area. Click below to go there now.",
    btn_manage_products: "Open Catalog",
    ai_answer_pages: "You can design your store your way in our No-Code Web Builder. Change themes, colors, and the overall layout without needing code. Let's go?",
    btn_edit_pages: "Open Web Builder",
    ai_answer_contact: "Your logo and primary WhatsApp number (where you will receive orders) are essential. You can update this information quickly in the store Settings.",
    btn_edit_contact: "Edit Store Profile",
    ai_answer_greeting: "Hello! I am your Intelligent Assistant. Tell me what you want to do (e.g., 'I want to change the currency' or 'Add an item') and I will create a direct shortcut for you.",
    ai_answer_default: "I understand, but I couldn't find an exact shortcut for that. Try using keywords like 'product', 'page', 'currency', or 'contact' so I can guide you precisely.",


 
  stat_updated_recently: "Recently Updated",
  stat_zero_records: "0 Records",
  stat_public_view: "Visible to the Public",
  stat_online_status: "Published Online",
  stat_drafts: "In Draft",
  stat_fully_configured: "100% Configured",
  stat_in_progress: "Pending Setup",
  
  pages_created: "Pages Created",
  pages_active_online: "active online",
  node_details_title: "User Details",
  node_master_email: "Master Email",
  node_store_id: "Store ID",
  node_activity: "Activity",
  node_recent: "Recent",
 
  btn_view_store: "View Store",
  btn_see_all: "See All",

  btn_ai_go_settings: "Go to Settings",
  btn_ai_fallback_settings: "Configure Audio",
  btn_ai_whatsapp_support: "Speak on WhatsApp",

  ai_answer_music: "Background musical tracks, media files, and active storefront sound can be customized inside your store settings.",
  ai_answer_security_profile: "Credential resets, primary e-mail changes, official logo graphics, store name, and bio descriptions are centralized inside settings.",
  ai_answer_languages: "The administration language toggle switcher (English/Portuguese) is pinned right at the bottom of your left sidebar.",
  ai_answer_unknown: "Hmm, I'm still learning and haven't indexed that exact path yet.",








  common_photo: "Photo",
  common_country: "Country",
  common_links: "Links",
  common_search: "Search country...",
  common_add: "Add",
  portfolio_projects: "Projects",
  portfolio_specialty: "Specialty",
  portfolio_experience: "Experience",
  portfolio_change_photo: "Change Photo",
  portfolio_save_cloud: "Save",
  portfolio_photo_limit: "Photo exceeds 1MB. Too slow!",
  portfolio_go_settings_wa: "Set the number in Settings.",
  error_upload: "Upload error.",
  portfolio_user_or_url: "Username or URL",
  portfolio_default_dev: "DEV",
  portfolio_default_role: "Software Engineer",
  portfolio_default_bg: "PORTFOLIO",
  current_lang: "en",


  gallery_toast_uploading: "Uploading to the cloud...",
gallery_toast_success: "Successfully saved to the cloud!",
gallery_toast_error: "Network error. Please try again.",
gallery_toast_removed: "Item removed locally.",
gallery_console_remove_error: "Error removing:",
gallery_toast_fix_limits: "Please fix weight limits before syncing.",



    label_beta: "Beta",
    filter_all: "All",
    
    // Full Categories
    cat_hero: "Heroes & Headers",
    cat_media: "Media & Images",
    cat_features: "Features & Pricing",
    cat_content: "Content & Texts",
    cat_contact: "Contact & Footer",
    cat_other: "Other Elements",
    
    // Short Categories (for filters)
    cat_short_hero: "Heroes",
    cat_short_media: "Media",
    cat_short_features: "Features",
    cat_short_content: "Content",
    cat_short_contact: "Contact",
    cat_short_other: "Others",
    
    // Section Names
 
    section_media_embeds: "Media Embeds",
    section_esports_profile: "eSports Profile",
    section_hero_minimalista: "Minimalist Hero",
    section_tabela_precos: "Pricing Table",
    section_depoimentos_clientes: "Customer Testimonials",
    section_faq_acordion: "Accordion FAQ",
    section_rodape_simples: "Simple Footer",




    editor_delete_success: "Section deleted!",
    error_cant_delete_catalog: "This section is fixed and cannot be deleted.",
    
    // Navigation and Layout
  
    editor_locked_block: "Locked Section",
    
    // Confirmation Modal (Soft UI)
    modal_delete_title: "Delete Section?",
    modal_delete_desc: "Are you sure? This action cannot be undone.",
    modal_cancel: "Cancel",
    modal_confirm_delete: "Delete",








    logo_missing: "Add Logo",
change: "Change",
logo_title: "Symbol / Logo",
logo_subtitle: "Square Format (1:1)",
upload_logo: "Choose File",
file_too_large_title: "File too large",
crop_error: "Error cropping the image.",
adjust_logo: "Adjust Logo",

zoom: "Zoom",
zoom_instruction: "Slide to Zoom",

no_search_results: "We couldn't find any products matching your search",

portal_edition: "GLOBAL EDITION • BLOG",
portal_badge: "News & Updates",
portal_title: "Explore the ecosystem, templates, and the future of web design.",
portal_desc: "An immersive Blog built for creators. Discover new features like background audio and our brand-new local AI assistant.",
portal_explore_btn: "Enter Blog",
portal_card1_tag: "New Update • Audio",
portal_card1_time: "Just Released",
portal_card1_title: "Immersive background music and dynamic soundscapes for your store",
portal_card2_tag: "Beta • Local AI",
portal_card2_engine: "Engine v5",
portal_card2_title: "New local AI assistant to help you streamline your business workflow",
portal_footer_hub: "Content Hub",
portal_footer_more: "+ Articles & Guides",

promo_title: "Promotions & Blog Portal",
    promo_desc: "View updates, posts, and campaigns published on Storely",
    cat_bakery: "Bakery & Sweets",



    Homem: "Men",
  Mulher: "Women",
  Criança: "Kids",

  Baby: "Baby",
  Clothing: "Clothing",
  Bakery: "Bakery",
  Groceries: "Groceries",
  Beauty: "Beauty",
  "Catálogo Geral": "General Catalog",

  "Roupa de Bebé": "Baby Clothing",
  "Acessórios de Bebé": "Baby Accessories",
  "Vestidos & Macacões": "Dresses & Jumpsuits",
  Saias: "Skirts",
  "Bodies & Íntima": "Bodysuits & Intimates",
  "Casacos & Frio": "Jackets & Outerwear",
  Calções: "Shorts",
  Calças: "Pants & Trousers",
  "Camisas & Tops": "Shirts & Tops",
  Calçado: "Footwear",
  
  "Bolos & Tortas": "Cakes & Pies",
  "Salgados & Snacks": "Snacks & Savory",
  Maquilhagem: "Makeup",

  "Tam:": "Size:",
  "Plus Size": "Plus Size",
  "Tam: Único": "One Size",

  Preto: "Black",
  Branco: "White",
  Azul: "Blue",
  Vermelho: "Red",
  Verde: "Green",
  Amarelo: "Yellow",
  Lima: "Lime",
  Laranja: "Orange",
  Rosa: "Pink",
  Roxo: "Purple",
  Castanho: "Brown",
  Cinza: "Grey",

  Chocolate: "Chocolate",
  Baunilha: "Vanilla",
  Morango: "Strawberry",
  "Massa Folhada": "Puff Pastry",

  Couro: "Leather",
  Jeans: "Denim",
  Chiffon: "Chiffon",
  Seda: "Silk",
  Linho: "Linen",
  Algodão: "Cotton",


  Tecnologia: "Technology",
  ArteDecoracao: "Art & Decor",
  
  // NOVAS SUBCATEGORIAS
  MiniBolosCupcakes: "Mini Cakes & Cupcakes",
  DocesSobremesas: "Sweets & Desserts",
  SmartphonesAcessorios: "Smartphones & Accessories",
  ComputadoresLaptops: "Computers & Laptops",
  AudioSom: "Audio & Sound",
  SmartwatchesGadgets: "Smartwatches & Gadgets",
  QuadrosTelas: "Paintings & Canvas",
  EsculturasArtesanato: "Sculptures & Crafts",
  DecoracaoInteriores: "Home Decor",

  // NOVOS SABORES / ATRIBUTOS / MATERIAIS
  Limão: "Lemon",
  Cenoura: "Carrot",
  RedVelvet: "Red Velvet",
  DoceDeLeite: "Dulce de Leche",
  Madeira: "Wood",
  Vidro: "Glass",
  Metal: "Metal",
  Dourado: "Gold",
  Wireless: "Wireless",

  // NOVOS TAMANHOS / PORÇÕES
  Mini: "Mini",
  Pequeno: "Small",
  Médio: "Medium",
  Grande: "Large",
  Fatia: "Slice",
  Inteiro: "Whole Cake",

  ChiffonChocolate: "Chocolate Chiffon Cake",
  ChiffonMisto: "Marble Chiffon Cake",
  ChiffonSimples: "Plain Chiffon Cake",

  // NOVOS ATRIBUTOS DE SABORES
  Misto: "Mixed / Marble",
  Simples: "Plain / Traditional",

  // RESTANTES CHAVES DA ATUALIZAÇÃO ANTERIOR

  BolosTortas: "Cakes & Pies",
  SalgadosSnacks: "Snacks & Savory",
  
  RoupaDeBebe: "Baby Clothing",
  AcessoriosDeBebe: "Baby Accessories",
  VestidosMacacoes: "Dresses & Jumpsuits",
  BodiesIntima: "Bodysuits & Intimates",
  CasacosFrio: "Jackets & Outerwear",
  Calcoes: "Shorts",
  Calcas: "Pants & Trousers",
  CamisasTops: "Shirts & Tops",
  Calcado: "Footwear",
 






  product_form_photo_removed: "Photo removed successfully.",
  product_form_photo_removed_cloud: "Photo permanently removed from the cloud.",
  product_form_photo_removed_cloud_failed: "Photo removed locally, but cloud deletion failed or expired.",
  product_form_upload_error: "Failed to upload this image.",
  product_form_sync_general_error: "A general error occurred while syncing images to the cloud.",
  product_form_sync_required: "Action not allowed: Sync photos before proceeding.",
  product_form_sync_before_saving: "Sync local photos before saving.",
  product_form_photos_synced_success: "Photos synced successfully!",



  sync_uploading: "Syncing...",
  sync_cloud_btn: "Cloud Sync",
  portfolio_pending_sync: "Pending Sync",
  portfolio_pending_sync_desc: "Upload (Cloud Sync) before publishing the page.",
  saveBlockedLargeSection: "Action Blocked: The block \"{{section}}\" has exceeded the maximum storage limit (15MB).",






auth_email_invalid_format: "The entered email format is invalid.",
  auth_cooldown_message: "Too many attempts. For security, please wait for the countdown.",
  auth_cooldown_support: "Are you locked out? Click here to speak with support via WhatsApp.",
  auth_cooldown_wait: "Too many attempts. Please wait for the lockout period to end.",

  auth_invalid_credentials: "Incorrect email or password.",
auth_change_data_try_again: "Please change the data before trying again.",








  product_form_images_title: "Image Gallery",

  product_form_blobs_prevent_save: "Action not allowed: There are local images that need to be uploaded to the cloud or replaced.",
  editor_modal_orphan_media: "Invalid / Reupload",
  product_form_orphan_blob: "Replace invalid or local images",
  product_form_orphan_blob_desc: "This local preview link has expired. Please remove or reupload the photo.",

 
  product_form_unit_conjunto: "Set",
 
  product_form_unit_fardo: "Bale",
  product_form_unit_cento: "Hundred",
 
  product_form_unit_ano: "Year",
  
  product_form_unit_mm: "Millimeter (mm)",
  product_form_unit_rolo: "Roll",
 
  product_form_unit_t: "Ton (t)",


  version_update_title: "Update Available",
  version_update_button: "Update Now",



  product_form_pricing_label: "Pricing",
  product_form_price_original: "Original Price",
 
  product_form_discount_label: "Discount (%)",
  product_form_final_price_label: "Final store price:",
ofertaEspecial: "Special Offer",

version_update_badge: "New Era Available",
  version_update_desc: "A new version with performance enhancements and fixes has been deployed to ensure maximum smoothness for your store.",
  version_update_released: "Released on",


    filter_subcategories: "Subcategories:",
    filter_all_sub: "All",
    filter_clear: "Clear",
    gender_kid: "Kids",
    search_results_title: "Search Results",
    
    whatsapp_discount_title: "🔥 *I want to secure my offer with",
whatsapp_discount_suffix: "% off!*",
whatsapp_price_from: "From: ~",
whatsapp_price_to: "For: *",
whatsapp_savings_prefix: "*(Guaranteed savings of ",
whatsapp_savings_suffix: ")* 🎉",
whatsapp_customer_note: "📝 *Customer note:*",

exit: "Exit",
share_text: "Check out this content!",
reset_zoom: "Reset Zoom",

tip_hero_title: "Tip:",
tip_hero_desc: "Copy the link above and post it on your WhatsApp Status!",
tips_whatsapp_title: "Share on WhatsApp",
tips_whatsapp_desc: "Share your store link on WhatsApp Status. Seeing everything in one link makes customers buy faster.",
tips_sales_title: "Prices & Details",
tips_sales_desc: "Always include prices and sizes. Customers often give up when they have to ask for the price.",
tips_visual_title: "Photos that Sell",
tips_visual_desc: "Take photos in a well-lit place. A clean and beautiful store builds a lot of trust.",






tip_hero_1: "Copy the link above and post it on your WhatsApp Status!",
tip_hero_2: "Add the link to your Instagram or TikTok bio.",
tip_hero_3: "Set the link as your auto-reply on WhatsApp Business.",
tip_hero_4: "Send your catalog directly to customers in chats.",

tips_section_title: "How to sell more every day",

tips_rec_whatsapp_title: "WhatsApp Power",
tips_rec_whatsapp_desc: "Share on Status and add to your WhatsApp bio. Customers buy much faster.",

tips_rec_social_title: "Link in Bio",
tips_rec_social_desc: "On Instagram/TikTok, tell them 'Shop via the link in bio!'. It makes buying super easy.",

tips_rec_groups_title: "Facebook Groups",
tips_rec_groups_desc: "Share your store in groups. A full store builds way more trust than random messages.",

tips_rec_clarity_title: "Prices are Key",
tips_rec_clarity_desc: "Never hide prices. Stores with clear prices sell 3x more because they avoid questions.",

tips_rec_visual_title: "Quality Photos",
tips_rec_visual_desc: "Use good lighting and clean backgrounds. A nice photo adds a lot of value to your product.",

tips_rec_promo_title: "Flash Sales",
tips_rec_promo_desc: "Run 24h offers. Urgency makes customers decide and buy on the spot.",



product_form_images_subtitle: "Images are saved and optimized in the cloud.",
product_form_images_deferred_desc: "Images are uploaded to the cloud only when saving the product.",
product_form_pending_warning: "Pending upload photos",

product_form_ready_to_save: "Ready",
product_form_saved: "Saved",

product_form_cover_required_tag: "Main",
product_form_extra_images_title: "Additional Photos",
product_form_cover_needed_hint: "Set cover image to unlock",
product_form_add_cover_first: "Add the cover first",







product_form_image_corrupt: "Damaged Photo",
product_form_image_corrupt_desc: "Corrupted file or unsupported format.",
product_form_replace: "Replace",


// Action Bar & Form States
btn_waiting: "Please wait...",
common_cancel: "Cancel",
product_form_cancelling_title: "Cancelling...",
product_form_cleaning_photos: "Cleaning uploaded photos...",


quick_phrase_men: "Target Audience: Men / Male",
quick_phrase_unisex: "Style: Unisex (For Everyone)",
quick_phrase_adult: "Size and Fit for Adults",
quick_phrase_onesize: "Size: One Size / Adjustable",













// Search-Engine Optimized Values
val_kids: "Kids (Baby / Children)",
val_women: "Women (Female)",
val_men: "Men (Male)",
val_unisex: "Unisex",
val_adult: "Adult",
val_p: "Size: S",
val_m: "Size: M",
val_g: "Size: L",
val_gg: "Size: XL",
val_onesize: "One Size",
val_plussize: "Plus Size",
val_casual: "Casual / Everyday",
val_social: "Formal / Work",
val_fitness: "Workout / Fitness",
val_party: "Party / Events",
val_combo: "Kit / Combo",
val_cotton: "100% Cotton",
val_leather: "Leather",
val_jeans: "Jeans / Denim",
val_black: "Black",
val_white: "White",
val_blue: "Blue",
val_red: "Red",
val_pink: "Pink",
val_gold: "Gold",

// Assistant UI
product_form_smart_helper_title: "Add Quick Tags",
selected_tags_label: "Active:",
tab_audience: "Audience",
tab_sizes: "Sizes",
tab_styles: "Style",
tab_materials: "Material",
tab_colors: "Colors",

// Quick Tag Chips
quick_tag_kids: "👶 Kids",
quick_tag_women: "👩 Women",
quick_tag_men: "👨 Men",
quick_tag_unisex: "✨ Unisex",
quick_tag_adult: "🧑 Adult",
quick_tag_p: "📏 S",
quick_tag_m: "📏 M",
quick_tag_g: "📏 L",
quick_tag_gg: "📏 XL",
quick_tag_onesize: "📏 One Size",
quick_tag_plussize: "➕ Plus Size",
quick_tag_casual: "👟 Casual",
quick_tag_social: "👔 Formal",
quick_tag_fitness: "⚡ Fitness",
quick_tag_party: "🎉 Party",
quick_tag_combo: "📦 Kit / Combo",
quick_tag_cotton: "🌿 Cotton",
quick_tag_leather: "🧥 Leather",
quick_tag_jeans: "👖 Jeans",
quick_tag_black: "⚫ Black",
quick_tag_white: "⚪ White",
quick_tag_blue: "🔵 Blue",
quick_tag_red: "🔴 Red",
quick_tag_pink: "🌸 Pink",
quick_tag_gold: "✨ Gold",




cat_arts_crafts: "design",


network_offline_title: "No internet connection",
network_offline_desc: "Check your Wi-Fi or cellular data connection.",
network_slow_title: "Slow connection detected",
network_slow_desc: "Network response is taking longer than expected.",
network_restored_title: "Connection restored",
network_restored_desc: "Data loaded and connection speed normalized.",
network_close_aria: "Close network alert",

swipe_down_to_close: "Swipe down",





  product_form_image_corrupt_hint: "Invisible to customers. Replace.",
  product_form_image_local_only: "Local",
  product_form_image_not_saved: "Not saved to cloud",
  product_form_orphan_global_alert: "Action Required",
  product_form_orphan_global_alert_desc: "Corrupted photos detected (invisible to customers). Delete or replace the red photos before saving.",
  product_form_orphan_blob_prevent_save: "Cannot save. Replace the corrupted photos (in red) first.",








  // Audience
  quick_tag_baby: "🍼 Baby",
  val_baby: "Baby / Newborn",
  quick_tag_teen: "🛹 Teen",
  val_teen: "Teenager",
 
  quick_tag_maternity: "🤰 Maternity",
  val_maternity: "Maternity",

  // Sizes
  quick_tag_xs: "📏 XS",
  val_xs: "Size: XS",
  quick_tag_s: "📏 S",
  val_s: "Size: S",
 
  quick_tag_l: "📏 L",
  val_l: "Size: L",
  quick_tag_xl: "📏 XL",
  val_xl: "Size: XL",
  quick_tag_xxl: "📏 XXL",
  val_xxl: "Size: XXL",
  quick_tag_3xl: "📏 3XL",
  val_3xl: "Size: 3XL",

 
  quick_tag_minimalist: "⚪ Minimalist",
  val_minimalist: "Minimalist",
  quick_tag_vintage: "📻 Vintage",
  val_vintage: "Vintage / Retro",
  quick_tag_elegant: "💎 Elegant",
  val_elegant: "Elegant / Chic",

  quick_tag_polyester: "🧵 Polyester",
  val_polyester: "Polyester",
  quick_tag_linen: "🌾 Linen",
  val_linen: "Linen",
  quick_tag_silk: "🦋 Silk",
  val_silk: "Silk",
  quick_tag_wool: "🐑 Wool",
  val_wool: "Wool / Knit",

  quick_tag_viscose: "🌬️ Viscose",
  val_viscose: "Viscose",
  quick_tag_elastane: "🤸 Elastane",
  val_elastane: "Elastane / Spandex",
  quick_tag_velvet: "🍷 Velvet",
  val_velvet: "Velvet",


  quick_tag_grey: "🔘 Grey",
  val_grey: "Grey / Silver",
  quick_tag_beige: "🟤 Beige",
  val_beige: "Beige / Nude",
  quick_tag_brown: "🟫 Brown",
  val_brown: "Brown",

  quick_tag_green: "🟢 Green",
  val_green: "Green",
  quick_tag_yellow: "🟡 Yellow",
  val_yellow: "Yellow",
  quick_tag_orange: "🟠 Orange",
  val_orange: "Orange",
  quick_tag_purple: "🟣 Purple",
  val_purple: "Purple / Lilac",

  quick_tag_multicolor: "🌈 Pattern",
  val_multicolor: "Multicolor / Pattern",












 
  quick_tag_gamers: "🎮 Gamers",
  val_gamers: "Gamers",
  quick_tag_professionals: "💼 Professionals",
  val_professionals: "Professional Use",
  quick_tag_dogs: "🐶 Dogs",
  val_dogs: "For Dogs",
  quick_tag_cats: "🐱 Cats",
  val_cats: "For Cats",
  quick_tag_birthday: "🎂 Birthday",
  val_birthday: "Birthday / Party",
  quick_tag_wedding: "💍 Wedding",
  val_wedding: "Wedding / Engagement",
  quick_tag_gift: "🎁 Gift",
  val_gift: "Perfect for Gifting",

 
  quick_tag_mini: "🧁 Mini / Bento",
  val_mini: "Mini / Bento Cake",
  quick_tag_slice: "🍰 Slice",
  val_slice: "Slice / Piece",
  quick_tag_500g: "⚖️ 500g",
  val_500g: "Approx. 500g",
  quick_tag_1kg: "⚖️ 1 Kg",
  val_1kg: "Approx. 1 Kg",
  quick_tag_2kg: "⚖️ 2 Kg",
  val_2kg: "Approx. 2 Kg",
  quick_tag_10p: "👥 10 Servings",
  val_10p: "Serves ~10 People",
  quick_tag_30ml: "💧 30ml",
  val_30ml: "30ml",
  quick_tag_50ml: "💧 50ml",
  val_50ml: "50ml",
  quick_tag_100ml: "💧 100ml",
  val_100ml: "100ml",
  quick_tag_500ml: "💧 500ml",
  val_500ml: "500ml",
  quick_tag_64gb: "💾 64GB",
  val_64gb: "64GB",
  quick_tag_128gb: "💾 128GB",
  val_128gb: "128GB",
  quick_tag_256gb: "💾 256GB",
  val_256gb: "256GB",
  quick_tag_512gb: "💾 512GB",
  val_512gb: "512GB",
  quick_tag_1tb: "💾 1TB",
  val_1tb: "1TB",
  quick_tag_a4: "📄 A4",
  val_a4: "A4 Size",
  quick_tag_a3: "📄 A3",
  val_a3: "A3 Size",

 
  quick_tag_homemade: "🏠 Homemade",
  val_homemade: "Homemade / Artisanal",
  quick_tag_gourmet: "✨ Gourmet",
  val_gourmet: "Gourmet",
  quick_tag_vegan: "🌱 Vegan",
  val_vegan: "Vegan / Plant-based",
  quick_tag_gluten_free: "🌾 Gluten Free",
  val_gluten_free: "Gluten Free",
  quick_tag_sugar_free: "🚫 Sugar Free",
  val_sugar_free: "Diet / Sugar Free",
  quick_tag_organic: "🌿 Organic",
  val_organic: "Organic / Natural",
  quick_tag_new: "🆕 New",
  val_new: "New / Sealed",
  quick_tag_used: "♻️ Used",
  val_used: "Used / Pre-owned",
  quick_tag_refurbished: "🔧 Refurbished",
  val_refurbished: "Refurbished",


  quick_tag_chocolate: "🍫 Chocolate",
  val_chocolate: "Chocolate / Cocoa",
  quick_tag_vanilla: "🍦 Vanilla",
  val_vanilla: "Vanilla",
  quick_tag_strawberry: "🍓 Strawberry",
  val_strawberry: "Strawberry",
  quick_tag_red_velvet: "🍰 Red Velvet",
  val_red_velvet: "Red Velvet",
  quick_tag_fruits: "🍒 Fruits",
  val_fruits: "Fruits / Tropical",
  quick_tag_caramel: "🍯 Caramel",
  val_caramel: "Caramel / Dulce de Leche",
  quick_tag_nuts: "🥜 Nuts/Peanuts",
  val_nuts: "Nuts / Peanuts / Crunchy",
  quick_tag_savory: "🧀 Savory",
  val_savory: "Savory / Cheese",
  quick_tag_plastic: "🛢️ Plastic",
  val_plastic: "ABS Plastic",
  quick_tag_metal: "🔩 Metal",
  val_metal: "Metal / Steel",
  quick_tag_aluminum: "⚙️ Aluminum",
  val_aluminum: "Aluminum",
  quick_tag_glass: "🪟 Glass",
  val_glass: "Glass / Crystal",
  quick_tag_wood: "🪵 Wood",
  val_wood: "Solid Wood",
  quick_tag_resin: "💧 Resin",
  val_resin: "Resin",
  quick_tag_silicone: "🧪 Silicone",
  val_silicone: "Silicone",
  quick_tag_gold_mat: "✨ Gold",
  val_gold_mat: "18k Gold",
  quick_tag_silver_mat: "💍 Silver",
  val_silver_mat: "925 Silver",
  quick_tag_stainless: "🛡️ Stainless Steel",
  val_stainless: "Stainless Steel",

  
  quick_tag_transparent: "🫥 Transparent",
  val_transparent: "Transparent / Clear",



  btn_share_store: "Share",
  copied_label: "Copied!",
  share_default_title: "Online Store",
  share_store_message: "🛍️ Hello! Check out the best products and latest arrivals at our official store {name}:",


  settings_badge: 'Control & System',
  
  tab_store_tag: 'Visual & Brand',
  tab_account_tag: 'Info & Email',
  tab_security_tag: 'Access & Password',
  
  pages_builder_badge: 'Page Manager',
  pages_title: 'Pages',
  pages_count: 'Pages',
  search_pages_placeholder: 'Search pages...',














  nav_guide: 'Get Customers',















  guide_title: 'How to Get Customers & Boost Sales',
  guide_subtitle: 'Choose which link to promote, copy ready-to-use messages, and configure your apps directly.',
  guide_tab_products: 'Product Catalog',
  guide_copied: 'Link successfully copied!',
  guide_copy_btn: 'Copy Link',
  guide_native_share_btn: "Share with Photo & Message",  guide_social_broadcast: 'Quick Social Broadcast',
  guide_share_whatsapp: 'WhatsApp',
  guide_share_telegram: 'Telegram',
  guide_share_facebook: 'Facebook',
  guide_share_text_intro: 'Hey! Check out the official catalog from',
  guide_share_text_body: 'We have exciting new arrivals with live pricing and photos. Browse now:',
  guide_mockup_preview_badge: 'Customer View Preview',
  guide_mockup_followers: 'followers',
  guide_mockup_following: 'following',
  guide_mockup_likes: 'likes',
  guide_mockup_posts: 'posts',
  guide_mockup_official_tag: 'Catalog & Orders',
  guide_mockup_verified: 'Verified Store',
  guide_mockup_online: 'Online',
  guide_mockup_business_account: 'Official Business Account',
  guide_mockup_wa_catalog_btn: 'View Full Catalog',
  guide_mockup_tap_to_open: 'Tap to open the app',
  guide_templates_title: 'High-Converting Ready Messages',
  guide_templates_sub: 'Copy pre-written messages that persuade customers to click and buy:',
  guide_copy_msg: 'Copy Message',
  guide_msg_copied: 'Message Copied!',
  guide_template_status_title: 'Status & Stories',
  
  guide_template_greeting_title: 'WhatsApp Greeting Message',
  
  guide_template_bio_title: 'Bio Description (Instagram & TikTok)',
  








  guide_template_greeting_text: "Hi! Great to have you here at *{{store}}*! ✨\n\n🛍️ *Explore our highlights and order here:*\n{{catalog_url}}\n\nℹ️ Learn more about us: {{store_url}}",

  guide_template_status_text: "🔥 *Fresh arrivals just dropped!*\n\n👇 *Check out the catalog before it's gone:*\n{{catalog_url}}\n\nℹ️ More store info: {{store_url}}",
  
  guide_template_bio_text: "✨ *{{store}}* | Selected with the greatest care.\n\n🛍️ *Browse the full catalog here:*\n{{catalog_url}}\n\nℹ️ Learn more about us: {{store_url}}",




  guide_platforms_title: "Where to place your link",
  guide_platforms_sub: "Choose an app and follow the step-by-step instructions:",
  guide_platform_open: "Set up now",
  guide_platforms_footer_hint: "Once saved, any customer can access your catalog with 1 click.",
  guide_platform_ig_name: 'Instagram',
  guide_platform_ig_step1: 'Open Instagram, go to your profile, and tap "Edit Profile".',
  guide_platform_ig_step2: 'Tap "Links" > "Add external link" and paste your official link.',
  guide_platform_ig_step3: 'Use the "Link" sticker in product Stories pointing to your catalog.',
  guide_platform_wa_name: 'WhatsApp Business',
  guide_platform_wa_step1: 'Open WhatsApp, go to "Settings" > "Business Tools" > "Business Profile".',
  guide_platform_wa_step2: 'Add your /products catalog link into the "Website" field.',
  guide_platform_wa_step3: 'Turn on the automated greeting message featuring your catalog link.',
  guide_platform_tt_name: 'TikTok',
  guide_platform_tt_step1: 'In profile, tap the top menu > "Settings & Privacy" > "Account" > "Switch to Business Account".',
  guide_platform_tt_step2: 'Tap "Edit Profile" and add your official link into the "Website" field.',
  guide_platform_tt_step3: 'Record short product showcase videos and say: "Product link in bio!".',
  guide_platform_gmb_name: 'Google Maps',
  guide_platform_gmb_step1: 'Open your Google Business listing on Maps.',
  guide_platform_gmb_step2: 'Add your Storely website URL into the "Website" field.',
  guide_platform_gmb_step3: 'Shoppers searching on Google Maps will see a direct website button.',
  

  guide_troubleshoot_title: "Practical daily tips",
  guide_troubleshoot_p1_title: "When buyers ask for prices",
  guide_troubleshoot_p1_desc: "Don't type items one by one. Send the catalog link so they can view photos and prices immediately.",
  guide_troubleshoot_p2_title: "To get more inquiries",
  guide_troubleshoot_p2_desc: "Place your catalog link in your Instagram bio and post in Stories: \"link in bio to check products\".",
  guide_troubleshoot_p3_title: "Never miss sales after hours",
  guide_troubleshoot_p3_desc: "Turn on WhatsApp automatic greetings so anyone reaching out receives your catalog instantly.",











  pdf_doc_badge: 'Commercial Presentation Letter',
  pdf_doc_subtitle: 'Professional A4 business dossier for clients, partners & proposals',
  pdf_doc_ref: 'Ref. Code',
  pdf_doc_date: 'Issue Date',
  pdf_doc_active_since: 'Active Since',
  pdf_doc_currency: 'Base Currency',
  pdf_doc_title: 'Commercial Profile & Official Catalog',
  pdf_about_title: 'About the Business & Mission',
  pdf_about_default_desc: 'We specialize in supplying carefully selected products with proven provenance, transparent pricing, and fast fulfillment from inquiry to delivery.',
  pdf_pillars_title: 'Core Commitments & Quality Standards',
  pdf_pillar1_title: 'Real-Time Inventory',
  pdf_pillar1_desc: 'Live digital storefront featuring authentic photos, explicit specs, and real-time pricing.',
  pdf_pillar2_title: 'Direct Customer Care',
  pdf_pillar2_desc: 'Personalized messaging support for technical inquiries, quotations, and instant order booking.',
  pdf_pillar3_title: 'Safe Logistics',
  pdf_pillar3_desc: 'Secure and monitored order dispatch with dedicated support throughout transit.',
  pdf_pillar4_title: 'Quality Guarantee',
  pdf_pillar4_desc: 'Rigorous inspection standards ensuring each product matches specifications and client expectations.',
  pdf_access_subtitle: 'Explore our verified product selection via the direct address below and submit your order to our team:',
  pdf_contacts_title: 'Verified Contact Channels',
  pdf_contact_whatsapp: 'Business WhatsApp',
  pdf_contact_email: 'Official Email',
  pdf_contact_website: 'Web Address',
  pdf_footer_rights: 'All rights reserved.',
  pdf_footer_generated: 'Generated via Storely platform',

  // --- Presentation Letter Modal ---
  modal_feature_desc: 'Generates a branded formal document featuring your company overview, live catalog link, and verified communication channels.',
  modal_doc_lang: 'Document Language:',
  modal_missing_alert: 'Missing fields for a complete document',
  modal_go_settings: 'Complete in Settings',
  modal_official_store: 'Official Store',
  modal_official_logo: 'Official Logo',
  modal_generate_btn: 'Generate A4 PDF Document',
  modal_preview_tag: 'Content Preview',








pdf_access_title: 'How to Browse & Place Orders',

pdf_contact_unavailable: 'Available on official storefront',
pdf_closing_note: 'This formal document is issued to clients, organizations, and partners verifying official sales channels and business identity.',







modal_generating: 'Preparing document...',






  guide_mockup_default_store: 'My Store',
  guide_mockup_wa_welcome_msg: 'Hello! Welcome. Check out our complete catalog with photos and prices:',
  guide_mockup_official_catalog_label: 'Official Catalog',
  guide_mockup_official_store_label: 'Official Store',

  guide_mockup_google_open_status: 'OPEN',
  guide_mockup_google_default_title: 'Your Official Store',
  guide_mockup_google_store_type: 'Store',
  guide_mockup_google_tab_website: 'Website',
  guide_mockup_google_tab_directions: 'Directions',
  guide_mockup_google_tab_call: 'Call',
  guide_mockup_google_tab_share: 'Share',
 
  guide_mockup_ig_edit_profile: 'Edit Profile',










  store_default_name: "Our Store",
  share_msg_products_intro: "✨ Hi! Check out the complete product catalog from",
  share_msg_store_intro: "🛍️ Visit the official store page of",
  
  guide_copied_msg: "Message and link copied!",
  guide_copy_msg_btn: "Copy Promotion Message",

  guide_letter_modal_title: "Intro Letter & QR Code",
  guide_letter_modal_places: "Counter • Store Window • WhatsApp Status • Groups & Events",


  guide_share_instagram: "Instagram",





  guide_share_catalog_cta: "🛍️ Explore our favorites directly in the catalog:",
  guide_share_store_cta: "🌐 Learn more about our story and store details:",
  guide_share_x: 'Twitter',

  guide_badge: "Promote",
  guide_preview_btn: "View Store",
  guide_tab_store: "Home Page",
 





  guide_nav_title: "Promotion Step-by-Step",
  guide_nav_hero: "1. Share",
  guide_nav_templates: "2. Messages",
  guide_nav_platforms: "3. Setup Networks",
  guide_nav_troubleshoot: "4. Tips",
  guide_badge_status: "WhatsApp Status & Stories",
  guide_badge_greeting: "WhatsApp Greeting",
  guide_badge_bio: "Instagram & TikTok Bio",


  guide_tab_share: "Share",
  guide_tab_texts: "Texts",
  guide_tab_places: "Networks",
  guide_tab_tips: "Tips",










  
guide_template_send_wa: "Send",








guide_letter_tag_qr: "With QR Code",
guide_letter_tag_print: "Ready to Print",
guide_letter_open_btn: "Generate",
















  store_official_title: "Official Store",
  verified_store: "Official",
  safe_browsing: "Verified",
  catalog_highlights: "Highlights",
  catalog_recent_highlights: "Highlights",
  catalog_filter_discounts: "On Sale",
  catalog_show_all: "Show All",
  catalog_no_products_title: "No Products Found",
  catalog_no_products_desc: "We couldn't find any items matching these filters.",
  catalog_no_discounts_title: "No Discounted Products",
  catalog_no_discounts_desc: "There are no products on sale at the moment.",
  share_store_recommendation_msg: "Check out the products from {{store}}! Found great deals in their official catalog:",
  common_home: "Home Page",
  common_share: "Recommend",
  
  categories: "categories",
  filters: "Filters",
  on_sale: "on sale",
reset: "Reset",


beta_badge: "Storely Beta",
  welcome_beta_title: "Welcome to Storely Beta",
  welcome_beta_desc: "Your environment has been updated and fully optimized with the latest version. Enjoy the new tools!",
  welcome_beta_button: "Start Exploring",
  current_version_label: "Running version:",
  new_version_label: "New version:",
  build_date_label: "Build date:",
  catalog_view_products: "Enjoy Now",


  more_from_this_store: "More from this store",
  buy_together_tip: "Order more items from this store with combined shipping",
  explore_other_stores: "Explore popular alternatives",
  similar_in_category: "Similar products from other stores",
  product_default_name: "Product",
  product_save_amount: "Save {amount}",

  fast_response: "Fast response",
  limit_reached: "Limit reached",
  version_updating_loading: "Syncing new version...",




















  auth_status_badge_verified: "Verified",
auth_status_badge_unavailable: "Unavailable",
auth_status_badge_verify_needed: "⚠️ required",
auth_btn_verify: "Verify",
auth_btn_checking: "Checking...",
auth_btn_available: "Verified",
auth_btn_retry: "Verify",
auth_verify_hint: "Click 'Verify' to secure your official store handle.",
auth_slug_must_verify: "Please click the 'Verify' button next to the store name before proceeding.",
auth_network_error: "Internet connection error. Check your network and try again.",

  guide_hero_status: 'Ready to share',
  guide_hero_subtitle: 'Share your full catalog and online store with a ready-to-send message for WhatsApp, Instagram, and other networks.',
  guide_universal_share_btn: 'Share on Socials',
  
  guide_copied_btn: 'Copied',

  share_msg_greeting: 'Hello! Discover the latest products from',
  share_msg_catalog_label: '🛍️ Product Catalog:',
  share_msg_store_label: '🌐 Home Page:',
  share_msg_closing: 'Visit the links to check prices and order online!',





  scroll_restored: 'Position restored',
loading_content: 'Loading content...',



  item_singular: "item",
  item_plural: "items",
  photos_all_ok: "Photos 100% OK",
  inventory_subtitle: "Add photos, change prices, and publish items to your online store in real time.",

  broken_products_singular: "product needs an image:",
  broken_products_plural: "products need images:",

  store_management_title: "Store Management",

  broken_photo_warning: "Corrupted or inaccessible photo",
  fix_now: "Fix",
  fix_photo: "Fix Photo",
  click_to_fix: "Click item to resolve",
  image_error: "Image Error",





























  group_header_audience: "Target Audience",
    group_header_sizes: "Sizes / Capacity",
    group_header_styles: "Style / Condition",
    group_header_materials: "Material / Flavor",
    group_header_colors: "Colors",
    product_details_details: "About the Product",
    tap_to_customize: "Customize below",
    audience_target_title: "Ideal for",
    status_select_one: "Select an option",
    selected_specs: "Selected Options",
    remove: "Remove",
    decrease_quantity: "Decrease quantity",
    increase_quantity: "Increase quantity",
    unit_abbr: "pcs",
    buy_by_amount: "Buy by budget",
    placeholder_budget_example: "Ex: 300",
budget_yield_remainder: "Gets {qty} {unit} ({change} left over)",    budget_yield_exact: "Exact for {qty} {unit}",
    confirmed_quantity_summary: "{qty} {unit} confirmed",
   
   





    order_request_title: "New Order",
product_item: "Item",
preference_note: "Preference / Note",

standard_option: "Standard",
    cart_diff_prefs_title: "Item already exists with other options",
  cart_pick_replace_target: "Which variation do you want to replace?",
  back: "Back",
  close: "Close",
  cart_replace_prev: "Update previous",
  choose: "Choose",
  cart_replace_action: "Change",
  cart_keep_both: "Keep both (2 choices)",
  cart_select_to_overwrite: "Tap the variation you want to replace with the current one:",
  current_in_cart: "In cart",
  variations_total_count: "{count} total configurations",
  view_cart_btn: "View Cart",







  



  cart_limit_title: "Limit of 3 Variations Reached",
  already_in_cart_title: "Product already in Cart",
  cart_full_warning_detailed: "You have reached the maximum limit of 3 options for this product in your cart. Choose how you want to update:",
  cart_prompt_question: "You already have another option of this product in your cart. Do you want to add another option or just swap?",
  action_replace_oldest_only: "Replace only the oldest one",
  action_replace_all_previous: "Replace all previous with this one",
  action_add_new_variant: "Add as an extra option",
  action_replace_previous: "Just replace with current choice",
  store_label_cart: "Store",
 
  cart_added: "Added!",
  cart_already_exists: "Already in Cart",
  cart_item_exists_badge: "In Cart ({qty})",
  btn_add_to_cart: "Add to Cart",
  mode_by_qty: "By Quantity",
  mode_by_budget: "Buy by Value",
  placeholder_budget_simple: "How much would you like to buy? (e.g. 500)",
  quick_values: "Suggestions:",






  search_title: "Search",
  search_placeholder: "What are you looking for today?...",
  clear: "Clear",
  btn_explore: "Explore",

  // Suggestions & Filters
  search_filter_all: "All ({count})",
  search_filter_this_store: "In this Store ({count})",
  search_filter_network: "Partner Stores ({count})",

  // Categories (Panel & Toggle)
  search_see_local: "View Store",
  search_empty_store_state: "This store has no products loaded yet.",
  search_empty_store_hint: "Explore all global categories to find what you need:",

  // Local Results & Semantic Suggestion
  search_category_suggestion_prompt: "Were you looking for products in this category?",
  search_explore_category_button: "View {category}",

  // Partner Network & External API
  badge_network: "Network",
  badge_partner_store: "Partner",
  search_network_title: "Search in other stores",
  search_network_desc: 'Search for "{term}" across the platform',
  search_network_limited_desc: "Few local options. Explore more products in the partner network?",
  search_network_footer_hint: "Search for more options in other network stores",
  search_network_empty_prompt: "We couldn't find this item in this store. Would you like to search in our partner network?",
  searching_network_loading: "Searching partner stores...",
  search_global_title: "Explore Other Stores",
  search_no_global_results: "No external results found.",



  cart_title: "Your Cart",
  cart_tab_active: "In Cart",
  cart_tab_sent: "Sent Orders",
  cart_clear_all: "Clear all",
  cart_clear_sent_history: "Clear history",

  // Empty State
  cart_empty_title: "Your cart is empty",
  cart_empty_desc: "Explore the catalog and add products to finish via WhatsApp.",
  cart_explore_products: "Explore Products",
  cart_sent_orders_empty: "No sent orders yet.",

  // Items, Units & Variations
  cart_item_unit: "ea",
  cart_item_count: "{count} {count, plural, one {item} other {items}}",
  cart_default_variation: "Standard",
  cart_multiple_variations_badge: "{count} variations selected",
  cart_variations_toggle: "View variations",
  cart_variations_hide: "Hide variations",
  cart_check_variation_notice: "Confirm variations before checkout:",
  cart_decrease_qty: "Decrease quantity",
  cart_increase_qty: "Increase quantity",
  cart_remove_item: "Remove product",

  // Order Actions & Footer
  cart_order_single_product: "Order this",
  cart_order_all_products: "Checkout All ({count})",
  cart_estimated_total: "Estimated Total",

  // Sent Orders
  cart_sent_at: "Sent at",
  cart_move_back_to_cart: "Move back to cart",
  cart_resend_whatsapp: "Resend on WhatsApp",

  // WhatsApp Formatted Message
  cart_order_header: "🛍️ *New Order*",
  cart_order_qty: "Qty",
  cart_order_variation: "Option",
  cart_order_observation: "Note",
  cart_order_image: "Photo",
  cart_order_total_items: "Total Items",
  cart_order_total_price: "TOTAL ORDER",
  cart_order_greeting: "Hello! I would like to confirm availability and payment/delivery details for this order.",

  // Confirmation Modal
  confirm_action_title: "Are you sure?",
  confirm_delete_item_desc: "Do you want to remove this product from your cart?",
  confirm_delete_variation_desc: "Do you want to remove this variation from your cart?",
  confirm_delete_group_desc: "Do you want to remove this product and all its variations?",
  confirm_clear_cart_desc: "This will remove all items from your cart. Do you want to continue?",
  confirm_clear_history_desc: "This will clear all sent orders history. Do you want to continue?",
  confirm_delete_button: "Remove",
  confirm_clear_button: "Clear",
  cancel_button: "Cancel",














  dock_cart_button: "Cart",
  dock_search_button: "Search",
  dock_expand_all: "Expand All",
  dock_cart_tab: "Cart",
  dock_search_tab: "Search",
  dock_minimize: "Minimize",
  dock_maximize: "Maximize",
  dock_close: "Close",

  cart_observation_prefix: "Note:",

  cart_sent_history_retention_notice: "Confirmed orders are retained for 30 days.",

  cart_default_store: "Store",
  cart_whatsapp_order_header: "NEW ORDER",
  cart_whatsapp_variation_label: "Variation",
  cart_whatsapp_qty_label: "Qty",
  cart_whatsapp_obs_label: "Note",
  cart_whatsapp_photo_label: "Photo",
  cart_whatsapp_total_items_label: "Total Items",
  cart_whatsapp_total_payable_label: "TOTAL DUE",
  cart_whatsapp_closing_greeting: "Hello! I would like to confirm availability and delivery for this order.",
  cart_share_order_title: "Order - {store}",




  common_back: "Back",
  common_order: "Checkout",
  checkout_bar: "Checkout bar",
  dock_more_products: "See More",
  cart_viewing_now:"Viewing now",

  },







































































  pt: {
    // Navegação & UI
    nav_home: "Explorar",
    nav_blog: "Blog",
    nav_support: "Suporte",
    nav_privacy: "Privacidade",
    btn_dashboard: "Começar Agora",
    btn_close: "Fechar Menu",
    theme_light: "Claro",
    theme_dark: "Escuro",
    theme_auto: "Auto",
    theme_desc_night: "Ativado: Noite (18h-06h)",
    theme_desc_day: "Ativado: Dia (06h-18h)",
    menu_nav: "Navegação",
    language: "Idioma",
    footer_rights: "Direitos reservados",
    theme_desc_auto_base: "Muda sozinho conforme o horário.",
    theme_desc_manual: "Este modo permanecerá ativo até que você altere para Automático.",
    theme_click_toggle: "Clique para alternar",

    // Hero Section
    hero_title_1: "Construa",
    hero_title_2: "Seu",
    hero_title_3: "Website",
    hero_title_4: "Aqui.",
    hero_desc: "A plataforma definitiva para quem busca performance extrema.",
    hero_subtitle: "Sem código. Sem limites.",
    btn_gallery: "VER GALERIA",

    // Features
    feat_tag: "Funcionalidades",
    feat_title: "Tudo em um só lugar.",
    feat_1_title: "Editor Drag & Drop",
    feat_1_desc: "Construa visualmente sem tocar em uma linha de código. Simples, intuitivo e poderoso.",
    feat_2_title: "SEO Nativo",
    feat_2_desc: "Sua página já nasce otimizada para os motores de busca, garantindo melhor visibilidade.",
    feat_3_title: "Hospedagem Edge",
    feat_3_desc: "Sites carregados instantaneamente em qualquer lugar do mundo com nossa CDN premium.",

    // Showcase
    showcase_title_1: "Excelência em",
    showcase_title_2: "cada pixel.",
    showcase_desc: "Explore websites de alta performance criados por nossa comunidade de designers e empreendedores.",
    project_explore: "Explorar Website",
    proj_1_tag: "Motor E-commerce",
    proj_1_desc: "Uma infraestrutura de comércio eletrônico focada em velocidade de carregamento e conversão otimizada para o varejo moderno.",
    proj_2_tag: "Sistemas de Design",
    proj_2_desc: "Arquitetura de interface escalável, demonstrando a versatilidade de nossos componentes nativos e fidelidade visual.",

    // CTA
    cta_tag: "Acesso Instantâneo",
    cta_title_1: "Pronto para",
    cta_title_2: "dominar",
    cta_title_3: "a web?",
    cta_desc: "Junte-se a milhares de criadores e coloque seu projeto no ar em menos de 10 minutos.",
    cta_subtitle: "Sem custos ocultos.",
    btn_create_site: "CRIAR MEU SITE AGORA",
    cta_members: "+12k membros",

    // --- Novas Traduções da Galeria ---
    gallery_limit_error: "Resolva os erros para salvar",
    gallery_add: "Importar Mídia",
    gallery_support: "Imagens e vídeos (JPG, PNG, MP4)\n1 MB foto · 10 MB vídeo",
    gallery_file_error: "Erro de tamanho individual detectado",

    gallery_empty: "Comece com um upload",
    gallery_empty_sub: "Inicie a sequência via upload",
    gallery_compress: "Reduzir",
    gallery_preview_mode: "Modo de Pré-visualização",
    gallery_scanning: "Analisando Ativo...",
    gallery_weight: "Peso",
    gallery_limit_reached: "Cheio",
    gallery_slots: "Mídia",
    gallery_tutorial_title: "Combine suas melhores capturas em um layout profissional de alta performance.",
    gallery_limit_label: "Capacidade",
    gallery_items: "Itens",
    
    gallery_storage: "Armazenamento",
  gallery_action_blocked: "Ação Bloqueada",
  gallery_action_required: "Ação Necessária",
  gallery_btn_blocked: "Bloqueado",
  gallery_btn_sync: "Sincronizar",
  gallery_error_total_limit: "Remova arquivos (Máx 15MB)",
  gallery_error_individual: "Erro em arquivos específicos",
  gallery_pending_local: "Arquivos locais pendentes",
  gallery_msg_error: "Alguns arquivos estão com erro. Remova ou comprima os itens marcados em vermelho.",
  gallery_msg_ready: "Tudo pronto — sincronize para salvar. (Compressão opcional)",
  gallery_compress_images: "Comprimir imagens",
  gallery_compress_videos: "Comprimir vídeos",
  gallery_default_category: "Portfólio",
  gallery_default_title: "Minha Galeria",
  gallery_default_desc: "Clique para editar a descrição da sua galeria",
  gallery_tutorial_subtitle: "Galeria Vazia",
  gallery_type_photos: "Fotos",
  gallery_max_1mb: "Máx 1MB",
  gallery_type_videos: "Vídeo",
  gallery_max_10mb: "Máx 10MB",
  
  gallery_new_badge: "Novo",


        // editor

    editor_modal_save_title: "Publicar Site?",
    editor_modal_save_desc: "Deseja tornar estas alterações públicas para todos os visitantes?",
    editor_modal_discard_title: "Descartar tudo?",
    editor_modal_discard_desc: "Tem certeza? Perderá todas as edições feitas nesta sessão.",
    editor_modal_pending_media_title: "Mídias Pendentes!",
    editor_modal_pending_changes_title: "Mudanças Pendentes",
    editor_modal_nav_media_desc: "Você tem fotos ou vídeos que ainda estão apenas no seu computador. Se sair agora, eles serão excluídos!",
    editor_modal_nav_changes_desc: "Você tem alterações de texto ou layout não salvas. O que deseja fazer?",
    editor_modal_sync_warning: "Sincronize as mídias na galeria antes de publicar",
    editor_modal_btn_locked: "Bloqueado: Sincronize Mídias",
    editor_modal_btn_save: "Salvar e Publicar",
    editor_modal_btn_discard: "Descartar Mudanças",
    editor_modal_btn_discard_all: "Descartar e Perder Mídias",
    editor_modal_btn_continue: "Continuar Editando",


    limits: "Limite: {max} caracteres",
    uploading: "Enviando para nuvem...",
    mediaSaved: "Mídia salva!",
    saveError: "Erro ao salvar.",
    maxMedia: "Mídia Máxima:",
    photoLimit: "FOTO: 1MB",
    videoLimit: "VÍDEO: 5MB",
    whatsappLabel: "WhatsApp (DDI + Número)",
    whatsappPlaceholder: "Número com DDD",
    
    changeMedia: "Trocar Foto",
    tryAnother: "Tentar outro arquivo",
    weight: "Peso:",
    reduceSize: "Reduzir Tamanho",
    limitExceeded: "Este arquivo ultrapassa os limites permitidos para sincronização.",
    compressNow: "Comprimir Agora",
    syncNow: "Sincronizar Agora",
    syncing: "Enviando...",
    testLinkError: "Corrija ou sincronize a mídia antes de testar o link.",
    defaultBadge: "PERFORMANCE",
    defaultTitle: "Seu Título",
    defaultSub: "Subtítulo descritivo.",
    
    defaultBtn: "Iniciar contacto",   
    hiddenToPublic: "Invisível para o público",
    invalidPhoneDesc: "O botão não aparecerá no site até que o número de WhatsApp seja válido. Solucione abaixo no painel de controle.",

    inventory_title: "Catálogo",
    wpp_section_title: "Canal de Vendas",
    wpp_section_desc: "Configure o número oficial para receber pedidos via WhatsApp.",
    whatsapp_placeholder: "84 000 0000",
    btn_new_product: "Novo Produto",
    status_active: "Ativo",
    status_paused: "Pausado",



  
  stat_total: "Total de Produtos",
  label_wpp_section_title: "Canal de Vendas",
  label_wpp_section_desc: "Configure o número de WhatsApp que receberá os pedidos dos clientes.",
  placeholder_whatsapp: "Número de vendas",
  btn_save_whatsapp: "Salvar Número",
  error_invalid_phone: "Número inválido para este país.",
  
  placeholder_search: "Pesquisar por nome, categoria ou preço...",
  label_product: "Produto",
  label_category: "Categoria",
  label_price: "Preço",
  label_status: "Status",

  label_created_at: "Criado em",
  label_actions: "Ações",
  btn_view_product: "Ver",
  view_product: "Ver",
  btn_edit: "Editar",



  product: "Produto",
price: "Preço",
status: "Estado",
actions: "Ações",



whatsapp_success: "WhatsApp atualizado com sucesso!",
save_error: "Erro ao salvar",
product_status_success: "Status do produto atualizado!",
product_status_error: "Não foi possível alterar o status do produto.",
save_button: "Salvar Alterações",
saving: "Salvando...",


no_products_found: "Nenhum produto encontrado",

showcase_defaultCategory: "Lançamentos",
    showcase_defaultTitle: "Nossa Coleção",
    showcase_defaultDescription: "Explore produtos selecionados com design exclusivo e qualidade premium para você.",
    showcase_searchPlaceholder: "Buscar na vitrine...",
    showcase_maxPrice: "Preço Máx.",
    showcase_empty: "Nenhum produto disponível",
    
    // Common / UI
    common_all: "Todos",
    common_details: "Detalhes",
    common_loading: "Carregando...",
    showcase_clear_all: "Limpar Filtros",
    showcase_filter_active: "Filtros Ativos",
    showcase_price_up_to: "Até R$ {{price}}",
    showcase_category: "Categoria: {{category}}",
    filter_unlimited: "Ilimitado",
    showcase_viewFull: "Ver Tudo",
    
      common_close: "Fechar",
      common_filters: "Filtros",



      product_details_visit_store: "Ver Loja",
  product_details_final_value: "Valor Final",
  product_details_confirm_whatsapp: "Confirmar no WhatsApp",
  product_details_no_description: "Produto sem descrição detalhada disponível no momento.",
  product_details_edit: "Editar",
  product_details_cancel: "Cancelar",
  product_details_publish: "Publicar",
  product_details_share_success: "Link copiado!",
  common_category_general: "Geral",
      
    editor_limit_reached: "Limite de 7 seções atingido",
  editor_limit_advice: "Remova blocos ou crie uma nova página para manter o site rápido e organizado.",

  editor_add_block: "Adicionar Bloco",
  editor_back_to_layers: "Voltar às Camadas",
  editor_structure_cols: "Estrutura (Colunas)",
  editor_col_unit: "Col",
  editor_font_size: "Tamanho do Texto",
  editor_font_small: "Pequeno",
  editor_font_medium: "Médio",
  editor_font_large: "Grande",
  editor_text_align: "Alinhamento de Texto",
  editor_theme_light: "CLARO",
  editor_theme_dark: "ESCURO",
  editor_delete_block: "Eliminar Bloco",
  editor_layers_order: "Ordem das Camadas",



  templates_photography_label: "Fine Art Photography",
templates_photography_description: "Olha o que você pode fazer: transforme um layout minimalista na sua galeria pessoal com apenas alguns cliques.",
templates_photography_hero_title: "A Sua Narrativa Visual",
templates_photography_hero_sub: "Um espaço enxuto e sofisticado para fotógrafos que valorizam cada detalhe.",
templates_photography_gallery_empty_title: "Sua Nova Coleção",
templates_photography_gallery_empty_sub: "Esta galeria está pronta para receber seu olhar. Comece a importar suas fotos.",
templates_photography_gallery_insp_title: "Inspiração e Estética",
templates_photography_gallery_insp_sub: "Exemplo de como o layout se comporta com tons orgânicos e luz suave.",
templates_photography_contact_title: "Agende um Ensaio",






templates_saas_label: "Vendas & Produto",
templates_saas_description: "Layout orientado a resultados, destacando produtos e planos de assinatura.",
templates_saas_hero_title: "Venda Mais com Inteligência",
templates_saas_hero_sub: "A plataforma que unifica seu estoque, vendas físicas e e-commerce em um só lugar.",
templates_saas_pricing_title: "Nossos Planos",
templates_saas_features_title: "Funcionalidades Enterprise",
templates_saas_contact_title: "Agende uma Demonstração",

templates_brand_label: "Marca Pessoal",
templates_brand_description: "Focado em estabelecer autoridade para mentores, palestrantes e coaches.",
templates_brand_hero_title: "Transforme seu Conhecimento em Negócio",
templates_brand_hero_sub: "Estratégias de posicionamento para profissionais que buscam o próximo nível.",
templates_brand_stats_students: "ALUNOS",
templates_brand_stats_lives: "LIVES",
templates_brand_stats_countries: "PAÍSES",
templates_brand_stats_roi: "ROI",
templates_brand_mentorship_title: "Programas de Mentoria",
templates_brand_contact_title: "Fale com minha Equipe",

templates_event_label: "Lançamento / Evento",
templates_event_description: "Layout dinâmico para lançamentos de produtos ou grandes eventos.",
templates_event_hero_title: "O Futuro da Tech em Maputo",
templates_event_hero_sub: "Participe do maior evento de inovação do ano. 24h de networking e insights.",
templates_event_speakers_title: "Speakers Confirmados",
templates_event_pricing_title: "Garanta seu Ticket (Lote 1)",
templates_event_contact_title: "Localização do Evento",

templates_blank_label: "Tela em Branco",
templates_blank_description: "Comece do zero.",

common_best_seller: "Mais Vendido",
common_starter: "Iniciante",
common_limited_vagas: "Vagas Limitadas",
currency_mt: "MT",
unit_per_month: "/mês",



mobile_peek_tap_config: "Tocar para configurar",
mobile_drawer_close_hint: "Deslize para fechar",
mobile_discard_changes: "Descartar as mudanças",
editor_confirm_delete: "Tem certeza que deseja excluir este bloco?",

empty_state_title: "Sua página está em branco",
empty_state_description: "Transforme este espaço em algo incrível! Comece adicionando seções como galerias, cabeçalhos ou tabelas de preços.",
empty_state_action: "Toque no botão + para começar",


sidebar_title: "Painel de Edição",
sidebar_status_changed: "MODIFICAÇÕES ATIVAS",
sidebar_status_synced: "SITE SINCRONIZADO",
sidebar_button_publish: "PUBLICAR AGORA",
sidebar_button_saving: "PUBLICANDO...",
sidebar_button_discard: "Descartar Mudanças",

modal_library_title: "Biblioteca de Blocos",
modal_library_add_action: "Adicionar",
section_hero_comercial: "Banner Comercial",
section_galeria_grid: "Galeria Grid",



section_texto_imagem_showcase: "Mosaico com Texto",
section_texto_narrativo: "Bloco de Texto",

section_vitrine_produtos: "Vitrine de Produtos",
section_servicos_modern: "Serviços Modernos",
section_contacto_mapa: "Contacto e Mapa",
section_precos_moderno: "Tabela de Preços",
section_estatisticas_larga: "Estatísticas",
modal_library_subtitle: "Selecione um bloco para construir",






  action_new_product: "Novo Produto",
  action_new_product_sub: "Lançar Catálogo",
  action_create_page: "Criar Página",
  action_create_page_sub: "Construir Experiência",
  
  // Seções e Estados
  section_catalog: "Catálogo de Produtos",
  manage_inventory: "Gerenciar Inventário",
  section_paused: "Itens Pausados",
  page_home: "Página Principal",
  launch_sitemap: "Painel de Páginas",

  // Empty States
  empty_products_title: "Seu estoque está vazio",
  no_search_results: "Nenhum produto encontrado para esta pesquisa",
  btn_start_catalog: "Começar Cadastro",
  empty_pages_title: "Nenhuma página criada",
  empty_pages_desc: "Crie páginas para dar identidade à sua loja.",

  // Footer Técnico
  footer_master_node: "Master Node",
  footer_uptime: "Uptime",
  uptime_active: "Ativa há",
  uptime_now: "Online Agora",
  footer_store_key: "Store Key",

  no_contact: "Contato não definido",
loading_engine: "Sincronizando Storely...",





new_page: "NOVA PÁGINA",
updated_status: "Actualizado",
deploy_now: "Criar Agora",
new_deployment: "Nova Implementação",
configuring_page: "Configurando Página",
destination_path: "Caminho de Destino",
required: "Obrigatório",
blueprint_arch: "Arquitectura do Blueprint",
cancel: "Cancelar",
search_page: "Pesquisar Páginas...",
status_label: "Estado",
operational: "Operacional",
link_conflict: "Link duplicado. Por favor mude o nome",
primary_infrastructure: "Infraestrutura Principal (Home)",
empty_store_title: "Sua Loja está vazia",
empty_state_desc: "Comece a construir sua presença digital. Crie sua primeira página usando nossos blueprints profissionais.",
empty_search_title: "Nenhum resultado encontrado",
empty_search_desc: "Não encontramos nenhuma página com esse nome.",
first_deploy_btn: "DEPLOY PRIMEIRA PÁGINA",

empty_search_description: "Não encontramos nenhuma página com esse nome. Tente outro termo ou limpe a busca.",


primary_tag: "Principal",
link_copied: "Link copiado!",
copy_error: "Erro ao copiar link",
design_btn: "DESIGN",
delete_confirm: "Tem certeza que deseja excluir",
delete_error: "Erro ao remover página",

page_deployed: "Página publicada com sucesso!",
limit_reached_message: "Limite de 10 páginas atingido!",
limit_error: "Você atingiu o limite máximo de 10 páginas",
slug_error: "Este caminho (URL) já está em uso",
active_assets: "Páginas Ativas",


store_name_label: "Nome da Loja",
store_slug_label: "Link da Loja (URL)",
store_desc_label: "Descrição Curta",
whatsapp_label: "WhatsApp de Suporte",
visual_title: "VISUAL DA LOJA",
uploading_text: "CARREGANDO...",
change_logo_btn: "MUDAR LOGO",




settings_title: "Definições",
settings_highlight: "Gerais",
settings_subtitle: "Segurança e Identidade da Marca",
tab_store: "Loja",
tab_account: "Conta",
tab_security: "Segurança",
section_presence_title: "Presença Digital",
section_presence_subtitle: "Configurações públicas da sua marca",
label_brand_name: "Nome da Marca",
label_slug: "URL da Loja (Slug)",
label_description: "Descrição Pública",
label_whatsapp: "WhatsApp de Contacto",
section_email_title: "E-mail de Acesso",
label_new_email: "Novo E-mail",
label_confirm_password: "Confirmar com Senha Atual",
section_crypto_title: "Criptografia",
section_crypto_subtitle: "Proteção e troca de senha",
label_current_password: "Senha Atual",
label_new_password: "Nova Senha",
label_repeat_password: "Repetir Nova Senha",
btn_recovery_email: "RECUPERAR VIA E-MAIL",
btn_change_password: "ALTERAR SENHA",
loading_session: "Protegendo sua sessão...",
edit_label: "ALTERAR",
save_success: "Alteração salva com sucesso!",
email_sent_success: "Link enviado! Verifique sua nova caixa de entrada.",
password_update_success: "Sua senha foi atualizada com sucesso!",




branding: "Branding",
logotype: "Logotipo",
upload_cleaning: "A limpar anterior...",
upload_ready: "Troca limpa (Auto-delete)",
change_image: "Trocar Imagem",
sales_whatsapp: "WhatsApp de Vendas",
search_country: "Pesquisar país...",
not_defined: "Não definido",
save: "Guardar",
edit: "Editar",
short_description: "Descrição Curta",
description_placeholder: "Clique para adicionar uma descrição...",
description_textarea_placeholder: "Ex: A melhor loja de sapatos de Lisboa...",
invalid_phone: "Número inválido para este país",
max_size: "Máximo 500KB",

file_too_large: "Imagem muito grande (Máx 1MB).", 
compress_link: "Comprimir imagem aqui",




name_taken: "Nome indisponível!",
time_left: "restante",
logout_btn: "Logout",
confirm_exit: "Sair agora",
nav_dashboard: "Dashboard",
nav_pages: "Minhas Páginas",
nav_products: "Produtos",
nav_settings: "Configurações",
update_success: "Loja atualizada com sucesso!",
error_exiting: "Erro ao sair",



install_how_to: "Como instalar",
install_download_app: "Baixar app",
install_ios_alert: "No iPhone, abra no Safari e toque em Partilhar → Adicionar ao ecrã principal.",
install_ios_helper: "Safari → Partilhar → Ecrã principal",
install_use_supported_mobile_browser: "Use Chrome, Edge ou Samsung Internet",
install_use_supported_desktop_browser: "Use Chrome ou Edge para instalar",
install_interact_to_enable: "Interaja com a página para ativar",
install_open_help: "Toque para ver como instalar",
install_modal_title: "Instalar aplicação",
install_browser_wait_prompt: "Este navegador suporta instalação, mas o aviso ainda não apareceu. Recarregue a página e interaja um pouco antes de tentar novamente.",
install_close: "Fechar",

  whatsappActive: "Ativo",
  whatsappNotConfigured: "Número não configurado",
  goToSettingsToAddNumber: "Adicione o número nas configurações",
  whatsappNotConfiguredDesc: "Sem número de WhatsApp configurado. Vá às configurações da loja para ativar o botão.",



















  aboutBadge: "Sobre",
aboutTitle: "Minha Abordagem: Paixão e Precisão",
aboutSubtitle: "Uma visão clara, moderna e focada em resultados.",
aboutDescription: "Minha jornada no mundo digital começou com curiosidade e vontade de construir soluções úteis. Hoje, uno criatividade, método e atenção aos detalhes para entregar experiências modernas, claras e eficientes.",
aboutSecondaryTitle: "Quem Eu Sou",
aboutSecondaryDescription: "Sou um profissional focado em criar soluções digitais bem estruturadas, responsivas e pensadas para crescer com qualidade.",

textSectionSimpleHelp: "Edite os textos. Os limites já ajudam a manter o layout bonito.",
imageSectionSimpleHelp: "Edite os textos e escolha uma foto. Depois clique em confirmar.",
fillBadge: "Escreva um selo curto",
fillMainTitle: "Escreva o título",
fillSubtitle: "Escreva o subtítulo",
fillDescription: "Escreva a descrição",
fillSecondaryTitle: "Escreva o título secundário",
fillSecondaryDescription: "Escreva o texto secundário",
defaultImageAlt: "Imagem da secção",

uploadPhoto: "Carregar foto",
confirmPhoto: "Confirmar foto",
savingPhoto: "A guardar...",
removePhoto: "Remover foto",














  processing: 'A processar...',
  adjustPhoto: 'Ajuste a foto',
  cropApplied: 'Recorte aplicado com sucesso.',
  imageSavedSuccess: 'Imagem enviada com sucesso.',
  imageUploadError: 'Falha ao enviar a imagem.',
  imageRemoved: 'Imagem removida com sucesso.',
  imageRemoveError: 'Falha ao remover a imagem.',
  uploadSuccess: 'Upload concluído com sucesso.',
  uploadError: 'Falha ao enviar o ficheiro.',
  fileReadError: 'Erro ao ler o arquivo. Tente novamente.',
  imageTypeError: 'Selecione uma imagem válida.',
  imageTooLargeMustCompress: 'A imagem está acima do limite. Comprima antes de enviar.',
  compressPhotoLink: 'Comprimir imagem',
  choosePhoto: 'Escolher foto',
  changePhoto: 'Trocar foto',
  
  movePhoto: 'Mova a foto',
  imageWeight: 'Peso',
  imageSizeLimit: 'Tamanho máximo: {{size}} MB',
  defaultImage: 'Imagem padrão',
  
  editor_modal_sync_required: 'Sincronização necessária',





  imageTooLargeCropBlocked: 'Não é possível aplicar o recorte numa imagem acima do limite.',
saveBlockedPendingSection: 'Ação bloqueada: a secção {{section}} possui uploads pendentes ou muito grandes.',
savingPage: 'Salvando página...',
publishedSuccess: 'Publicado com sucesso!',
publishError: 'Erro ao publicar.',







  cropError: "Erro ao aplicar o recorte",
  applyCrop: "Aplicar recorte",
  sectionsNeedSaving:"Secções pendentes de salvar",
  

  imageReadyConfirmHelp:"A imagem já foi escolhida. Agora clique em confirmar imagem para salvar.",
  imageSelectedConfirmToSave:"Imagem selecionada. Confirme para salvar.",
imageSelectionCancelled: "Seleção de imagem cancelada",


clickToEdit: "Clique para editar",
  tapToEdit: "Toque para editar",
  editingSection: "Editando",
  loadingEditor: "A carregar editor...",
  waitingAddressesLoad: "Aguardando carregamento dos endereços...",


  cacheLabel: "cache",
  cacheStatusLocal: "local",
  cacheStatusNetwork: "network",
  cacheStatusWaiting: "aguardando",
  cacheStatusSyncing: "sincronizando",
  invalid_store_name: "Nome da loja inválido",
  blockDefaultName: "BLOCO",









  marketplace_product_fallback: "Produto",
  marketplace_general: "Geral",
  marketplace_store_fallback: "Loja",
  marketplace_store_default_description: "Descobre produtos e novidades desta loja.",
  marketplace_all_categories: "Todas as categorias",
  marketplace_all_stores: "Todas as lojas",
  marketplace_new_products: "Novos produtos",
  marketplace_more_new_products: "Mais novos produtos",
  marketplace_available_stores: "Lojas disponíveis",
  marketplace_more_stores: "Mais lojas para explorar",
  marketplace_start_selling_title: "Começa a vender na Storely",
  marketplace_start_selling_subtitle: "Cria a tua conta e começa a publicar produtos num marketplace rápido, moderno e profissional.",
  marketplace_start_selling_cta: "Criar conta",
  marketplace_search_placeholder: "Pesquisar no marketplace",
  marketplace_suggestions: "Sugestões",
  marketplace_recent_searches: "Pesquisas recentes",
  marketplace_explore: "Explorar",
  marketplace_sell_now: "Vender agora",
  marketplace_clear_filters: "Limpar filtros",
  marketplace_view_store: "Ver loja",
  marketplace_main_feed: "Feed principal",
  marketplace_hero_title_line_1: "Descobre produtos,",
  marketplace_hero_title_line_2: "lojas e sugestões inteligentes",
  marketplace_hero_explore: "Explorar marketplace",
  marketplace_hero_sell: "Quero vender",
  marketplace_hero_smart_block: "Pesquisa e recomendações inteligentes",
  marketplace_showcase_title: "Marketplace da comunidade",
  marketplace_showcase_subtitle: "Produtos, lojas e sugestões.",






  
  marketplace_search_exact: "Resultado exato",
  marketplace_search_approximate: "Resultado aproximado",
  marketplace_search_related: "Resultados relacionados",
  marketplace_search_fallback: "Sugestões do marketplace",
  marketplace_cache: "cache",
  marketplace_cache_expired: "expirado",
  marketplace_syncing: "a sincronizar",
  marketplace_refresh_cache: "atualizar cache",
  marketplace_not_found_title: "Nada muito próximo foi encontrado",
  marketplace_not_found_subtitle: "Tenta outro nome, categoria ou loja. Também podes escolher uma das sugestões abaixo.",
  marketplace_try_these: "Experimenta isto",


 
marketplace_related_products: "Produtos relacionados",
marketplace_related_stores: "Lojas relacionadas",
marketplace_search_products: "Produtos encontrados",
marketplace_search_stores: "Lojas encontradas",






storely_product_fallback: "Produto",
storely_general: "Geral",
storely_store_fallback: "Loja",
storely_store_default_description: "Descobre produtos e novidades desta loja.",
storely_all_categories: "Todas as categorias",
storely_all_stores: "Todas as lojas",
storely_new_products: "Novidades na Storely",
storely_more_new_products: "Mais novidades",
storely_available_stores: "Lojas na Storely",
storely_more_stores: "Mais lojas para explorar",
storely_related_products: "Produtos relacionados",
storely_related_stores: "Lojas relacionadas",
storely_matching_stores: "Lojas encontradas",
storely_similar_stores: "Lojas parecidas",
storely_more_like_this: "Mais como isto",
storely_exact_matches: "Resultados exatos",
storely_close_matches: "Resultados parecidos",
storely_suggestions_for_you: "Sugestões para ti",
storely_start_selling_title: "Começa a vender na Storely",
storely_start_selling_subtitle: "Cria a tua conta e publica produtos de forma rápida, bonita e inteligente.",
storely_start_selling_cta: "Criar conta",
storely_search_placeholder: "Pesquisar na Storely",
storely_suggestions: "Sugestões",
storely_recent_searches: "Pesquisas recentes",
storely_explore: "Explorar",
storely_sell_now: "Criar minha loja grátis →",
storely_clear_filters: "Limpar filtros",
storely_view_store: "Ver loja",
storely_main_feed: "Feed principal",
storely_search_exact: "Resultado exato",
storely_search_approximate: "Resultado aproximado",
storely_search_related: "Resultados relacionados",
storely_search_fallback: "Sugestões da Storely",
storely_cache: "cache",
storely_cache_expired: "expirado",
storely_syncing: "a sincronizar",
storely_refresh_cache: "atualizar",
storely_not_found_title: "Nada muito próximo foi encontrado",
storely_not_found_subtitle: "Tenta outro nome, categoria ou loja. Também podes escolher uma das sugestões abaixo.",
storely_try_these: "Experimenta isto",









storely_search_no_exact_but_close: "Sem resultado exato, mas há resultados parecidos",
storely_search_no_exact_but_related: "Sem resultado exato, mas há resultados relacionados",
storely_search_nothing_close: "Nada muito próximo, mas há sugestões para ti",
storely_search_message_close: "Não encontrei um nome exatamente igual, mas aqui estão os resultados mais parecidos que podem te ajudar.",
storely_search_message_related: "Não encontrei um resultado exato, mas selecionei coisas relacionadas que possas gostar.",



storely_search_empty_title: "Nenhum resultado encontrado",
storely_search_empty_subtitle: "Não encontramos nada que corresponda à sua pesquisa. Tente outra palavra ou explore outros produtos abaixo.",
storely_search_message_fallback: "Não encontramos nada semelhante, mas aqui estão algumas sugestões que podem interessar.",
storely_other_products_we_have: "Outros produtos que temos",

marketplace_hero_badge: "Descubra mais num só lugar",
marketplace_hero_subtitle: "Explore um marketplace com vários tipos de produtos e lojas.",
marketplace_hero_point_products: "Vários tipos de produtos",
marketplace_hero_point_stores: "Múltiplas lojas",
marketplace_hero_point_discover: "Fácil de explorar",
storely_cta_title: "Comece a vender os seus produtos hoje",
storely_cta_subtitle: "Crie a sua loja, mostre os seus produtos e alcance mais clientes numa plataforma simples.",




































product_form_create_title: "Criar produto",
product_form_edit_title: "Editar produto",
product_form_intro: "Preencha o essencial sem se perder. Primeiro imagens, depois preço, categoria e descrição.",
product_form_cover: "CAPA",
product_form_add_cover: "Adicionar capa",
product_form_add_image: "Adicionar imagem",
product_form_image_help: "Use até 4 imagens. A primeira é a capa. Cada imagem deve ter no máximo 1MB.",
product_form_image_too_large: "Imagem muito grande. Use até 1MB.",
product_form_name_label: "Nome",
product_form_name_placeholder: "O que estás a vender?",
product_form_price_label: "Preço",
product_form_price_whole: "Valor",
product_form_price_cents: "Centavos",
product_form_price_help: "O valor fica separado dos centavos para evitar confusão. Exemplo: 4 e 00 vira 4.00.",
product_form_category_label: "Categoria",
product_form_category_placeholder: "Ex: Mobília",
product_form_unit_label: "Unidade de medida",
product_form_unit_un: "Unidade",
product_form_unit_par: "Par",
product_form_unit_kit: "Kit",
product_form_unit_pacote: "Pacote",
product_form_unit_caixa: "Caixa",
product_form_unit_kg: "Quilograma",
product_form_unit_g: "Grama",
product_form_unit_l: "Litro",
product_form_unit_ml: "Mililitro",
product_form_unit_m: "Metro",
product_form_unit_cm: "Centímetro",
product_form_unit_m2: "Metro quadrado",
product_form_unit_m3: "Metro cúbico",
product_form_unit_hora: "Hora",
product_form_unit_dia: "Dia",
product_form_unit_semana: "Semana",
product_form_unit_mes: "Mês",
product_form_unit_servico: "Serviço",
product_form_unit_peca:"Peça",

product_form_description_label: "Descrição",
product_form_description_placeholder: "Explique o produto de forma simples, clara e útil.",
product_form_description_help: "Foque no que ajuda o cliente a decidir: tamanho, material, cor, uso ou estado.",
product_form_pending_title: "Falta concluir",
product_form_ready_title: "Pronto para guardar",
product_form_ready_subtitle: "Os dados principais estão preenchidos corretamente.",
product_form_pending_name: "Nome",
product_form_pending_category: "Categoria",
product_form_pending_price: "Preço",
product_form_pending_cover: "Capa",
product_form_pending_images: "Imagens",
product_form_create_action: "Publicar",
product_form_save_action: "Guardar",
product_form_created_success: "Produto criado com sucesso.",
product_form_updated_success: "Produto atualizado com sucesso.",
product_form_save_error: "Não foi possível guardar o produto.",
product_form_store_not_found: "Loja do administrador não encontrada.",
product_form_product_not_found: "Produto não encontrado.",
product_form_error_name_required: "Adicione um nome para o produto.",
product_form_error_name_short: "O nome ainda está muito curto.",
product_form_error_category_required: "Escolha ou escreva uma categoria.",
product_form_error_price_required: "Defina o preço do produto.",
product_form_error_price_invalid: "O preço deve ser maior que zero.",
product_form_error_cover_required: "Adicione uma imagem de capa.",
product_form_error_images_invalid: "Há imagens com problema de tamanho.",
product_form_image_delete_error: "Não foi possível apagar a imagem temporária.",


storely_all: "Todos",
storely_clear: "Limpar",
storely_search: "Pesquisar",









store_currency_section_title: "Moeda da loja",
store_currency_section_desc: "Na primeira vez, detectamos automaticamente a moeda mais provável com base no dispositivo e salvamos se a loja ainda não tiver uma moeda definida.",
store_currency_detected_label: "Detectado",
store_currency_save_success: "Moeda salva com sucesso.",
store_currency_save_error: "Erro ao salvar a moeda.",
store_products_empty: "Nenhum produto encontrado.",



currency_section_title : "Moeda da loja",
currency_section_desc : "Se a loja ainda não tiver moeda guardada, o sistema tenta detectar e guardar automaticamente apenas uma vez.",
currency_label : "Moeda",
currency_placeholder : "Pesquisar por código ou nome da moeda",
currency_save_success : "Moeda guardada com sucesso.",
currency_save_error : "Erro ao guardar a moeda.",
save_currency : "Guardar",
currency_detected_prefix : "Detectada:",
currency_source_prefix : "Fonte:",

currency_required_badge : "Obrigatório",
currency_geo_used : "Localização usada",
currency_required_text : "Usamos a sua localização para sugerir uma moeda inicial. Confirme e guarde para mostrar os preços corretamente.",
currency_saved_badge : "Definida",
currency_saved_text : "Esta moeda será usada para mostrar os preços da sua loja.",
currency_current_prefix : "Atual:",
currency_suggested_prefix : "Sugestão:",
currency_confirm_label : "Confirmar moeda",
currency_change_label : "Alterar moeda",
currency_save_hint : "Definir a moeda é importante para mostrar preços corretos aos clientes.",


product_form_image_removed_cloud: "Imagem apagada da nuvem e do formulário.",
product_form_image_removed_local: "Imagem removida do formulário.",
product_form_image_removed_local_only_after_cloud_fail: "Imagem removida só do formulário. A remoção na nuvem falhou.",








product_form_image_replaced_cloud: "Imagem anterior apagada da nuvem e substituída no formulário.",
product_form_image_replaced_local: "Imagem substituída no formulário.",
product_form_image_replaced_local_only_after_cloud_fail: "Imagem substituída no formulário, mas não foi possível apagar a anterior da nuvem.",
product_form_image_replace_error: "Não foi possível substituir a imagem.",

clearCache : "Limpar cache",
cacheClearedSuccess : "Cache limpo com sucesso.",
cacheClearedError : "Erro ao limpar o cache.",
cache_refresh_success : "Cache atualizado com sucesso.",
cache_refresh_error : "Erro ao atualizar o cache.",




new_product: "Novo produto",
product_details_share_text: "Veja este produto:",
product_details_whatsapp_unavailable: "O número de WhatsApp da loja não está disponível.",
product_details_order_message_intro: "Olá, quero encomendar este produto:",
product_details_quantity: "Quantidade",
product_details_total: "Total",




storely_categories: "Categorias",

storely_products: "produtos",
storely_stores: "lojas",

storely_sell_cta_title: "Comece a vender com a sua própria loja",
storely_sell_cta_subtitle: "Crie a sua loja, mostre os seus produtos e alcance mais pessoas de forma bonita.",
storely_no_results_title: "Nenhum resultado encontrado",
storely_no_results_subtitle: "Tente outro nome, categoria ou loja para descobrir mais produtos.",

storely_found_products: "Productos Encontrados",








    
    product_details_order_message_buyer_hint: "Gostaria de mais detalhes e disponibilidade atual.",
    product_details_order_message_product: "Produto",
    product_details_order_message_unit_price: "Preço unitário",
    product_details_order_message_quantity: "Quantidade",
    product_details_order_message_total: "Total",
    product_details_order_message_store: "Loja",
    product_details_order_message_closing: "Pode confirmar se ainda está disponível?",
    product_details_cta_badge: "Compra rápida",
    product_details_cta_title: "Gostou deste produto?",
    product_details_cta_subtitle: "Fale com a loja agora e confirme disponibilidade, preço e entrega em segundos.",
    product_details_price_label: "Preço por unidade",
    product_details_quantity_label: "Escolha a quantidade",
    product_details_gallery_open: "Abrir imagem",
    product_details_image_counter: "{{current}} de {{total}}",
    product_details_about_product: "Sobre este produto",
    product_form_unit_:"Formato da unidade do produto",







    auth_brand: "Storely",
    auth_support: "Suporte",
    auth_callback_success: "Autenticação concluída com sucesso.",
    auth_callback_error: "Não foi possível concluir a autenticação.",
    auth_callback_title: "A concluir autenticação",
    auth_callback_desc: "Aguarde enquanto regressamos em segurança à Storely.",
    auth_enter_email_first: "Digite primeiro o seu email.",
    auth_reset_email_sent: "Email de redefinição de palavra-passe enviado.",
    auth_reset_email_error: "Falha ao enviar o email de redefinição.",
    auth_store_required: "Por favor, digite o nome da sua loja.",
    auth_store_invalid: "Por favor, digite um nome de loja válido.",
    auth_slug_min_chars: "Use pelo menos 3 caracteres.",
    auth_slug_invalid_chars: "Use apenas letras minúsculas, números e hífens.",
    auth_slug_reserved: "Este nome de loja não está disponível.",
    auth_slug_checking: "A verificar nome da loja...",
    auth_slug_taken: "Este nome de loja já existe.",
    auth_slug_available: "O nome da loja está disponível.",
    auth_slug_wait: "Aguarde enquanto verificamos o nome da loja.",
    auth_user_missing: "A conta foi criada, mas os dados do utilizador não foram encontrados.",
    auth_signup_success: "Conta criada com sucesso.",
    auth_login_success: "Bem-vindo de volta.",
    auth_generic_error: "Algo correu mal. Tente novamente.",
    auth_desktop_big_title_line1: "CRIE A SUA",
    auth_desktop_big_title_line2: "LOJA",
    auth_desktop_big_title_line3: "DIGITAL",
    auth_desktop_subtitle_compact: "De forma simples, rápida e gratuita. Comece a vender hoje com a melhor plataforma para empreendedores.",
    auth_desktop_point_1: "Configuração Instantânea",
    auth_desktop_point_2: "Painel Administrativo Intuitivo",
    auth_desktop_point_3: "Suporte Especializado",
    auth_mobile_title_line1: "Crie a sua",
    auth_mobile_title_line2: "loja digital",
    auth_mobile_subtitle_professional: "Comece a vender com uma experiência de acesso profissional pensada para celular e computador.",
    auth_create_account: "Criar conta",
    auth_login: "Entrar",
    auth_start_here: "Comece aqui",
    auth_welcome_back_small: "Bem-vindo de volta",
    auth_heading_signup: "Crie a sua conta",
    auth_heading_login: "Entre na Storely",
    auth_signup_description_professional: "Digite o seu email, palavra-passe e nome da loja para começar a sua loja de forma profissional.",
    auth_login_description_professional: "Use o seu email e palavra-passe para continuar em segurança para o seu painel.",
    auth_error_title: "Algo correu mal",
    auth_email_label: "Email",
    auth_email_placeholder: "nome@email.com",
    auth_store_name_label: "Nome da loja",
    auth_store_name_placeholder: "Ex: Minha Boutique Premium",
    auth_store_url_preview: "URL",
    auth_password_label: "Palavra-passe",
    auth_forgot_password: "Esqueceu a palavra-passe?",
    auth_forgot_title: "Recupere o seu acesso",
    auth_forgot_description: "Digite o seu email e enviaremos um link seguro para criar uma nova palavra-passe.",
    auth_send_reset_link: "Enviar link de redefinição",
    auth_recovery_label: "Recuperação",
    auth_or: "ou",
    auth_switch_login_title: "Já tem conta?",
    auth_switch_signup_title: "Precisa de uma nova conta de loja?",
    auth_go_to_login: "Ir para entrar",
    auth_go_to_signup: "Criar conta primeiro",
    auth_account_found_title: "Conta encontrada",
    auth_existing_email_go_login: "Este email já está registado. Por favor, continue através do login.",
    auth_existing_store_go_login: "Este nome de loja já está em uso. Se for sua, por favor, continue através do login.",
    auth_remembered_password: "Lembrou-se da palavra-passe?",
    auth_back_to_login: "Voltar ao login",
    auth_reset_invalid_link: "Link de recuperação inválido ou expirado.",
    auth_reset_fill_both: "Preencha os dois campos da palavra-passe.",
    auth_reset_password_mismatch: "As palavras-passe não coincidem.",
    auth_reset_password_short: "A palavra-passe deve ter pelo menos 6 caracteres.",
    auth_reset_success: "Palavra-passe atualizada com sucesso.",
    auth_reset_save_error: "Não foi possível atualizar a palavra-passe.",
    auth_reset_label: "Recuperação",
    auth_reset_title: "Redefinir palavra-passe",
    auth_reset_description: "Crie uma nova palavra-passe para a sua conta Storely.",
    auth_reset_new_password: "Nova palavra-passe",
    auth_reset_confirm_password: "Confirmar palavra-passe",
    auth_reset_save_password: "Guardar nova palavra-passe",

    auth_callback_loading_message: "Validando as suas credenciais...",
    auth_callback_loading_title: "A verificar acesso",
    auth_callback_success_title: "Verificado",
    auth_callback_error_title: "Erro de acesso",
    auth_callback_redirecting: "A redirecionar...",
    auth_callback_back_login: "Voltar ao login",
    auth_callback_link_error: "Este link expirou ou já foi utilizado.",
    auth_callback_recovery_success: "Identidade confirmada. Vamos criar a sua nova palavra-passe.",
    auth_callback_email_change_success: "Email verificado com sucesso. A sua conta foi atualizada.",
    auth_callback_login_success: "Autenticação concluída com sucesso.",
    auth_callback_no_session: "Não foi possível validar a sua sessão. Tente novamente.",
    auth_callback_generic_error: "Não foi possível concluir a autenticação.",


    auth_password_min_length: "A palavra-passe deve ter pelo menos 6 caracteres.",
    auth_password_hint_min: "Mínimo de 6 caracteres.",
    auth_show_password: "Mostrar palavra-passe",
    auth_hide_password: "Ocultar palavra-passe",


    auth_signup_description_short: "Use o seu email, palavra-passe e nome da loja para começar.",
    auth_login_description_short: "Entre em segurança para continuar para o seu painel.",
    auth_side_title_1: "Verificação inteligente do nome da loja",
    auth_side_text_1: "A verificação do nome da loja usa debounce e cache para reduzir leituras desnecessárias e manter o uso da API eficiente.",
    auth_side_title_2: "Recuperação segura",
    auth_side_text_2: "A recuperação de palavra-passe leva o utilizador diretamente de volta à Storely para criar uma nova palavra-passe com segurança.",

        auth_store_name_length_invalid: "O nome da loja deve ter entre 2 e 40 caracteres.",





        security_recovery_title: "Redefinir Palavra-passe",
security_recovery_subtitle: "Crie uma nova palavra-passe segura para a sua conta.",
security_recovery_mode_active: "Modo de Recuperação Ativo",
security_current_password: "Palavra-passe Atual",
security_new_password: "Nova Palavra-passe",
security_confirm_password: "Repetir Palavra-passe",
security_password_min_error: "A palavra-passe deve ter pelo menos 6 caracteres.",
security_password_min_hint: "Mínimo de 6 caracteres.",
security_passwords_not_match: "As palavras-passe não coincidem.",
security_current_password_required: "Digite a sua palavra-passe atual.",
security_current_password_incorrect: "A palavra-passe atual está incorreta.",
security_email_missing: "Nenhum email encontrado para esta conta.",
security_reset_success: "Palavra-passe redefinida com sucesso!",
security_reset_email_sent: "Email de redefinição enviado com sucesso!",
security_reset_email_error: "Falha ao enviar o email de redefinição.",
security_sending_email: "A enviar...",
security_forgot_password: "Esqueci a minha palavra-passe",
security_save_new_password: "Guardar Nova Palavra-passe",











store_header_page_fallback: "Página",
store_header_store_fallback: "Loja",
store_header_menu: "Menu",
store_header_open_menu: "Abrir menu",
store_header_close_menu: "Fechar menu",
store_header_back_admin: "Voltar ao Dashboard",
store_header_create_account: "Começa a vender",
store_header_account_area: "Sua conta",
store_header_navigation: "Páginas",
store_header_new_here: "Novo por aqui?",
store_header_explore_stores: "Mais lojas",
store_header_discover_more: "Descobrir mais",
btn_create_product: "Lançar Produto",



dashboard_store_default_name : "Minha Loja",
dashboard_syncing : "A atualizar",

dashboard_welcome_new : "Vamos configurar a sua loja de forma simples.",
dashboard_welcome_incomplete : "A sua loja já começou. Complete os passos em falta abaixo.",
dashboard_welcome_ready : "A sua loja está pronta. Já pode gerir tudo rapidamente.",

dashboard_stat_products : "Produtos",
dashboard_stat_pages : "Páginas",
dashboard_stat_setup : "Configuração",

dashboard_progress_label : "Progresso",
dashboard_progress_completed : "concluído",

dashboard_setup_label : "Configuração",
dashboard_setup_title : "Complete a sua loja",
dashboard_setup_desc : "Siga estes passos simples para que os clientes possam ver e contactar a sua loja.",

dashboard_quick_label : "Ações rápidas",
dashboard_quick_title : "Gerir mais rápido",

dashboard_quick_products_title : "Produtos",
dashboard_quick_products_desc : "Adicione e gerencie o seu catálogo.",

dashboard_quick_pages_title : "Páginas",
dashboard_quick_pages_desc : "Crie e edite as páginas da sua loja.",

dashboard_quick_settings_title : "Configurações",
dashboard_quick_settings_desc : "Defina número, moeda e mais.",

dashboard_next_label : "Próximo passo",

dashboard_step_phone_title : "Adicionar número",
dashboard_step_phone_desc : "Defina o seu WhatsApp ou número de contacto.",
dashboard_step_phone_action : "Abrir configurações",

dashboard_step_currency_title : "Definir moeda",
dashboard_step_currency_desc : "Escolha a moeda dos seus preços.",
dashboard_step_currency_action : "Definir moeda",

dashboard_step_product_title : "Criar primeiro produto",
dashboard_step_product_desc : "Adicione um produto para começar o catálogo.",
dashboard_step_product_action : "Adicionar produto",

dashboard_step_page_title : "Criar página inicial",
dashboard_step_page_desc : "Crie a página principal da sua loja.",
dashboard_step_page_action : "Criar página",

dashboard_error_title : "Algo correu mal",
dashboard_error_desc : "Não foi possível carregar o dashboard.",
dashboard_error_action : "Recarregar",

dashboard_products_label : "Produtos",
dashboard_products_title : "Seus produtos",
dashboard_products_manage : "Gerir produtos",
dashboard_products_empty : "Ainda não há produtos",

dashboard_pages_label : "Páginas",
dashboard_pages_title : "Suas páginas",
dashboard_pages_manage : "Gerir páginas",
dashboard_pages_empty : "Ainda não há páginas",

dashboard_currency_missing : "Sem moeda",

dashboard_paused_title : "Produtos pausados",
dashboard_page_label : "Página",

dashboard_quick_hint : "Use estas ações a qualquer momento para continuar a construir a sua loja.",
dashboard_setup_focus_title : "Complete o próximo passo",
dashboard_setup_focus_desc : "Finalize os itens em falta para que a sua loja fique totalmente pronta.",

inventory_description: "Gerencie os seus produtos de forma simples e organizada.",


currency: "Moeda",


btn_cancel: "Cancelar",
btn_delete: "Eliminar",



pause_product: "Pausar",
activate_product: "Ativar",



delete_product_confirm_title: "Eliminar produto?",
delete_product_confirm_text: "Esta ação não pode ser desfeita. Está prestes a remover",
product_delete_success: "Produto eliminado com sucesso",
product_delete_error: "Não foi possível eliminar o produto",
product_status_update_error: "Não foi possível atualizar o estado do produto",

products_empty_title: "Ainda não existem produtos",
products_empty_description: "Comece por adicionar o seu primeiro produto para o mostrar na sua loja.",

no_products_found_description: "Tente outro termo de pesquisa ou limpe a pesquisa.",

products_tutorial_title: "Guia rápido",
products_tutorial_description: "Complete o básico para manter a sua loja pronta.",
products_tutorial_step_1_title: "Definir moeda",
products_tutorial_step_2_title: "Adicionar produtos",
products_tutorial_step_3_title: "Rever estado",



active_products_title: "Produtos ativos",
paused_products_title: "Produtos em pausa",
no_active_products: "Não existem produtos ativos",
product_activated_success: "Produto ativado com sucesso",
product_paused_success: "Produto pausado com sucesso",



currency_section_description_saved: "Esta é a moeda principal usada para mostrar os preços na sua loja.",
currency_section_description_required: "Escolha e guarde a moeda principal antes de usar preços nos produtos.",
currency_current_label: "Estado atual",
currency_action_label: "Ação",
currency_select_label: "Selecionar moeda",
currency_edit_hint: "Pode alterar aqui a moeda da loja, se for necessário.",








currency_section_help_text: "Escolha a moeda usada nos preços dos seus produtos.",
currency_must_save_notice: "Escolha e guarde a moeda.",















contact_title: "Fale connosco",
contact_subtitle: "Envie uma mensagem, veja a nossa localização ou use os contactos abaixo.",
contact_title_placeholder: "Fale connosco",
contact_subtitle_placeholder: "Envie uma mensagem, veja a nossa localização ou use os contactos abaixo.",
contact_label_phone: "WhatsApp",
contact_label_email: "E-mail",
contact_label_location: "Localização",
contact_form_title: "Mensagem",
contact_form_card_title: "Envie a sua mensagem",
contact_form_card_desc: "Use o formulário abaixo para falar connosco por WhatsApp ou e-mail.",
contact_form_name: "Nome",
contact_form_message: "Mensagem",
contact_form_name_placeholder: "O seu nome",
contact_form_message_placeholder: "Escreva a sua mensagem...",
contact_send_now: "Enviar agora",
contact_open_maps: "Abrir mapa",
contact_route_now: "Ver rota",
contact_close: "Fechar",
contact_modal_title: "Como deseja enviar?",
contact_email_subject: "Nova mensagem de contacto",
contact_message_hello: "Olá!",
contact_missing_value: "Não definido",
contact_loading_contact: "A carregar contacto...",
contact_missing_settings_title: "Dados de contacto em falta",
contact_missing_settings_desc: "Defina o WhatsApp e o e-mail da conta nas configurações para os visitantes poderem entrar em contacto.",
contact_go_settings: "Ir para configurações",
contact_unavailable_title: "Contacto ainda não disponível",
contact_unavailable_desc: "Esta loja ainda não definiu WhatsApp ou e-mail para receber mensagens.",
contact_location_field_placeholder: "Ex.: Avenida 24 de Julho, Maputo, Mozambique",
contact_location_missing_public: "Localização ainda não definida",
contact_location_format_hint: "Use um endereço claro. Ex.: Avenida 24 de Julho, Maputo, Mozambique ou CT University, Ludhiana, Punjab, India",
contact_title_limit: "título até {{count}} caracteres",
contact_subtitle_limit: "descrição até {{count}} caracteres",
contact_location_limit: "localização até {{count}} caracteres",
contact_form_name_limit: "nome até {{count}} caracteres",
contact_form_message_limit: "mensagem até {{count}} caracteres",
contact_admin_help_title: "Edite diretamente nesta secção",
contact_admin_help_desc: "Clique nos campos com borda tracejada para atualizar título, descrição e localização sem sair desta área.",
contact_map_hidden_admin: "O mapa aparece apenas fora do painel de administração.",
contact_default_location: "Maputo",











contact_edit_section_title: "Edite diretamente nesta secção",
contact_edit_section_desc: "Altere o título, subtítulo e localização aqui. O mapa só aparece na página pública.",
contact_location_area_label: "Área da localização",
contact_location_placeholder: "Exemplo: ISCTEM Maputo, Zimpeto, CT University",
contact_location_help: "Escreva um lugar, universidade, área ou cidade. Mantemos o nome e só ajudamos o Google Maps a entender melhor.",
contact_location_max: "Máx. {{count}}",
contact_location_final: "final: {{value}}",
contact_location_smart_help: "ajuda inteligente de localização",
contact_location_final_search: "Pesquisa final: {{value}}",
contact_location_dropdown_hint: "Sugestão da sua lista de localizações",
contact_location_final_help: "A mostrar a pesquisa final do Google Maps sem remover o nome original.",
contact_add_location_here: "Adicione uma localização aqui.",








product_form_add_more_images: "Adicionar mais imagens",
product_form_compress_image_link: "Imagem muito grande. Clique aqui para comprimir",
product_form_extra_image_label: "Imagem extra {{number}}",



clickToEditHint: "Selecione esta secção para editar exatamente aqui.",
tapToEditHint: "Toque nesta secção e use o card abaixo para personalizar.",
mobileCustomizeCardHint: "Use o card abaixo para personalizar esta secção.",
numberMissing: "Número em falta",
addNumberHint: "Adicione o número da loja nas Definições para ativar o botão.",
mediaSettings: "Definições da mídia",





store_page_links_discover: "Descobrir páginas",
store_page_links_items: "páginas",
store_page_links_page: "Página",
store_page_links_home_badge: "início",
store_page_links_navigate_label: "Abrir página",


store_page_links_title: "Continuar a navegar",
store_page_links_subtitle: "Ir para outra página desta loja.",
store_page_links_current_label: "Página atual",















media_provider_not_detected: "Link ainda não detectado",
media_hint_paste: "Cole um link.",
media_error_duplicate: "Este link está repetido. Use cada link apenas uma vez.",
media_error_invalid_url: "Este link não é válido.",
media_error_wrong_type_media: "Este não é um link de mídia suportado.",
media_error_unsupported_media: "Este link de mídia ainda não é suportado.",
media_error_wrong_type_social: "Este não é um link social válido.",
media_paste_button: "Colar",
media_edit_button: "Editar",
media_done_button: "Feito",
media_editor_title: "Gerir os seus links de mídia e redes sociais",
media_editor_compact_hint: "Adicione um link de cada vez. Cards válidos ficam compactos até editar novamente.",
media_section_media: "Mídia",
media_section_social: "Redes sociais",
media_group_guide_compact: "Cole um link de mídia e termine-o antes de adicionar outro.",
social_group_guide_compact: "Cole um link social e termine-o antes de adicionar outro.",
media_finish_current_first: "Complete primeiro o item atual antes de adicionar outro.",
media_empty_media: "Ainda não há mídia",
media_empty_media_hint: "Adicione um link de mídia para mostrar vídeo ou música aqui.",
media_empty_social: "Ainda não há links sociais",
media_empty_social_hint: "Adicione um link social para ajudar os visitantes a encontrar as suas páginas.",
media_add_media: "Adicionar mídia",
media_add_social: "Adicionar link social",
media_placeholder_media_link: "Cole o link de mídia",
media_placeholder_social_link: "Cole o link social",
media_provider_youtube: "YouTube",
media_provider_spotify: "Spotify",
media_provider_apple_music: "Apple Music",
media_provider_facebook: "Facebook",
media_provider_instagram: "Instagram",
media_provider_tiktok: "TikTok",
media_provider_x: "X",
media_provider_linkedin: "LinkedIn",
media_provider_website: "Website",
media_open_link: "Abrir",
media_status_valid: "Válido",
media_status_invalid: "Inválido",
media_summary_valid_total: "links válidos",
media_toast_item_valid: "Link válido adicionado com sucesso.",



media_provider_video: "Vídeo",
media_provider_image: "Imagem",
media_tap_to_open: "Toque para abrir",

media_provider_youtube_music: "YouTube Music",
media_clear_button: "Limpar link",















store_music_title: "Música da loja",
  store_music_subtitle: "Link de música",
  store_music_url_label: "URL de música",
  store_music_url_placeholder: "Cole link do YouTube, Spotify ou Apple Music",
  store_music_provider_unknown: "indefinido",
  store_music_invalid_url: "link inválido",
  store_music_volume: "Volume",
  store_music_enabled: "Ativar música no público",
  store_music_clear: "Remover",

  store_music_help: "Suporta .mp3,.m4a,.aac,.ogg,.wav,.webm,.flac,audio, Na Loja.",


  // PT
store_required_title: "Informação obrigatória",
store_required_subtitle: "Adicione o número que os clientes vão usar para contactar a loja.",
store_phone_required_label: "Número obrigatório",
store_phone_required_hint: "Usado para pedidos no WhatsApp e contacto com clientes.",
store_customization_title: "Personalização",
store_customization_subtitle: "Personalize o logotipo, descrição e música de fundo.",
phone_number: "Número",
store_music_step: "Trocar áudio",
store_music_step_2: "2. Escolher onde vai tocar",

store_music_upload_help: "Suporta: MP3, M4A, AAC, OGG, WAV, WEBM, FLAC. Máx. 12MB.",
store_music_choose_file: "Escolher áudio",
store_music_external_link: "Baixar música do YouTube",store_music_compress_link: "Comprimir áudio",
store_music_select_part_help: "Mova a barra para escolher exatamente o 1 minuto que vai tocar na loja.",
store_music_clip_range: "Parte da música",
store_music_total: "Total",
store_music_clip_length: "Selecionado",
store_music_volume_hint: "O volume é limitado para não incomodar visitantes.",
store_music_disable_hint: "A música ativa depois do upload. Pode desligar aqui.",
store_music_empty: "Nenhuma música selecionada. Suporta áudio apenas",
store_music_empty_help: "Escolha um áudio, selecione o melhor 1 minuto e teste antes de salvar.",
store_music_status_on: "Ativo",
store_music_status_off: "Desligado",
store_music_save_clip: "Salvar música",
store_music_delete_pending: "Apagar temporário",
store_music_invalid_file: "Formato de áudio não suportado",
store_music_file_too_large: "O ficheiro de áudio é muito grande",
store_music_upload_error: "Erro ao enviar áudio",
store_music_pause_preview: "Pausar",
store_music_clip_help: "Escolha uma parte da música até 1 minuto.",

store_music_play_preview: "Tocar",
store_music_now_playing: "Tocando",



  Open_site: "Abrir site",









  // PT
store_phone_missing_title: "Adicione o número",
store_phone_missing_help: "Os clientes precisam deste número para contactar a loja e fazer pedidos. Clique Aqui",
store_music_play_error: "Não foi possível tocar o áudio. Tente escolher outro ficheiro.",





section_email_subtitle: "Atualize o e-mail da sua conta com segurança.",
label_current_email: "E-mail atual",
btn_update_email: "Atualizar e-mail",
account_email_updated_title: "Acesso atualizado",
account_email_updated_desc: "O seu novo e-mail foi validado e já está ativo.",
account_email_pending_title: "Troca em andamento",
account_resend_link: "Reenviar link",
account_wait_seconds: "Aguarde {seconds}s",
account_confirm_password: "Confirmar com senha",
account_new_email_placeholder: "novo@email.com",
account_password_placeholder: "Sua senha atual",
account_updating_email: "Atualizando...",
account_email_not_available: "E-mail indisponível",
account_error_new_email_required: "Digite o novo e-mail.",
account_error_password_required: "Digite a sua senha atual.",
account_error_wrong_password: "Senha atual incorreta.",
account_error_no_pending_email: "Nenhuma troca pendente.",
account_success_email_link_sent: "Link enviado! Verifique o novo e-mail.",
account_success_email_link_resent: "Link reenviado!",

error_unauthorized: "Sessão inválida. Faça login novamente.",

upload_error : "Falha no upload. Tente novamente.",

noImage: "Sem Imagem",
  noCover: "Sem Capa",
  products: "produtos",

  official_store: "Loja Oficial",
    enter_btn: "Entrar na Loja",
    click_anywhere: "Clique em qualquer lugar para acessar",
    activate_audio: "Ativar Som",
    enter_store_aria: "Entrar na experiência da loja",

    category: "Categoria",
    search_title: "Pesquisar",
    search_global_btn: "Procurar noutras lojas por",
    search_no_results: "Nenhum resultado encontrado.",
    search_suggestions: "Sugestões",
 




  search_global_categories: "Categorias Globais",
  search_see_global: "Outras Lojas",
  search_no_categories: "Nenhuma categoria carregada localmente.",
  search_local_results: "Artigos da Loja",
  search_no_local_results: "Nenhum artigo encontrado nesta loja.",
  search_global_button: "Pesquisar fora desta loja",






  cat_tech: "Tecnologia & Gadgets",
  cat_fashion: "Moda & Vestuário",
  cat_grocery: "Supermercado & Snacks",
  cat_home: "Casa, Decor & Conforto",
  cat_beauty: "Saúde & Cosmética",
  cat_fitness: "Fitness & Outdoor",
  cat_books: "Livros & Papelaria",
  cat_accessories: "Acessórios & Jóias",
  cat_baby: "Bebés",
  cat_kids: " Crianças",
  cat_pets: "Produtos para Animais",
  cat_tools: "Ferramentas & Bricolage",
  cat_toys: "Brinquedos & Jogos",
  cat_auto: "Acessórios Automóvel",

  common_general: "Geral",
  common_of: "de",
  catalog_collection: "Coleção",
  catalog_default_title: "Catálogo Completo",
  catalog_default_subtitle: "Confira os nossos produtos disponíveis",
  catalog_add_description: "Adicione uma descrição...",
  catalog_layout_sample: "Amostra de Layout",
  catalog_actives: "ativos",
  catalog_no_products: "Nenhum produto cadastrado",
    catalog_page: "Catálogo de Produtos",







  slug_tecnologia: "tecnologia",
  slug_moda: "moda",
  slug_grocery: "mercado",
  slug_casa: "casa",
  slug_beleza: "beleza",
  slug_desporto: "desporto",
  slug_cultura: "livros",
  slug_acessorios: "acessorios",
  slug_bebes: "bebes",
  slug_animais: "animais",
  slug_ferramentas: "ferramentas",
  slug_brinquedos: "brinquedos",
  slug_automovel: "automovel",
  cat_arts_crafts: "design",
  cat_design_editor: "edicao-video", 
  cat_digital_3d: "fotos-3d",  
  
  storely_filters_search:"busca da Storely",


  
  safe_contact: "Contacto Seguro",
  wa_greeting: "Olá! Tenho interesse neste produto.",
  wa_product: "Produto",
  wa_store: "Loja",
  wa_quantity: "Quantidade",
  wa_unit: "Unidade",
  wa_price: "Preço",
  wa_total: "Total",
  wa_summary: "Resumo",
  wa_link: "Link",
  wa_confirm: "Pode confirmar a disponibilidade?",
  Vendedor_Verificado: "Vendedor Verificado",
  add_note_placeholder: "Adicionar nota à encomenda (ex: cor, tamanho...)",
  related_products: "Também pode gostar",


  dashboard_title: "Dashboard",
    ai_assistant: "Assistente Inteligente",
    ai_search_placeholder: "IA: Preciso de ajuda com...",
    ai_processing: "A processar a tua dúvida...",
    btn_configure: "Configurar",
    setup_configured: "Configurado",
    setup_overview_title: "Configuração da Loja",
    setup_action_needed: "Ação Necessária",
    setup_all_ready: "Tudo Pronto!",
    cta_ready_scale: "Pronto para escalar?",
    cta_add_products: "Adiciona mais produtos ao teu catálogo.",
    dashboard_welcome_title: "Olá, {name}!",
    dashboard_welcome_desc_pending: "Vamos preparar a tua loja!",
    dashboard_welcome_desc_ready: "Loja sincronizada em tempo real!",
    stat_total_products: "Total Produtos",
    stat_active_items: "Artigos Ativos",
    stat_total_pages: "Total Páginas",
    stat_setup_progress: "Setup Concluído",

    ai_answer_payments: "A moeda determina como os teus clientes visualizam os preços. Para ajustares isso ou os métodos de pagamento, acede diretamente à gestão do teu catálogo clicando no botão abaixo.",
    btn_edit_currency: "Gerir Moeda e Preços",
    ai_answer_products: "A gestão do teu catálogo é muito simples! Podes adicionar fotografias, alterar preços e gerir estoques na área de Produtos. Clica abaixo para ir para lá agora.",
    btn_manage_products: "Abrir o Catálogo",
    ai_answer_pages: "Podes desenhar a tua loja ao teu gosto no nosso Construtor Web (No-Code). Altera temas, cores e o layout sem precisar de código. Vamos lá?",
    btn_edit_pages: "Abrir Construtor Web",
    ai_answer_contact: "O teu logótipo e o teu WhatsApp (por onde vais receber as encomendas) são essenciais. Podes atualizar estas informações rapidamente nas Definições da loja.",
    btn_edit_contact: "Editar Perfil da Loja",
    ai_answer_greeting: "Olá! Sou o teu Assistente Inteligente. Diz-me o que pretendes fazer (ex: 'Quero mudar a moeda' ou 'Adicionar um artigo') e eu crio um atalho direto para ti.",
    ai_answer_default: "Compreendo, mas não encontrei um atalho exato. Tenta utilizar palavras como 'produto', 'página', 'moeda' ou 'contacto' para eu te conseguir guiar com precisão.",


  
    stat_updated_recently: "Atualizado Recentemente",
    stat_zero_records: "0 Registos",
    stat_public_view: "Visíveis ao Público",
    stat_online_status: "Publicadas Online",
    stat_drafts: "Em Rascunho",
    stat_fully_configured: "100% Configurado",
    stat_in_progress: "Configuração Pendente",
    
    pages_created: "Páginas Criadas",
    pages_active_online: "ativas online",
    node_details_title: "Detalhes do Usuário",
    node_master_email: "Email Mestre",
    node_store_id: "Store ID",
    node_activity: "Atividade",
    node_recent: "Recente",
   
    btn_view_store: "Ver Loja",
    btn_see_all: "Ver Todas",
 
    btn_ai_go_settings: "Ir para Definições",
    btn_ai_fallback_settings: "Configurar Áudio",
    btn_ai_whatsapp_support: "Falar no WhatsApp",
   
    ai_answer_music: "Para envolver os teus clientes com faixas sonoras ou uma playlist para o site, ativa a opção.",
    ai_answer_security_profile: "A tua password, e-mail de acesso, logótipo da marca, nome e descrição oficial mudam-se na área de perfil.",
    ai_answer_languages: "O seletor principal de línguas (Português/Inglês) encontra-se fixado no fim da barra lateral.",
    ai_answer_unknown: "Hum, ainda estou a aprender e não localizei esse caminho exato.",


    common_photo: "Foto",
  common_country: "País",
  common_links: "Links",
  common_search: "Pesquisar país...",
  common_add: "Adicionar",
  portfolio_projects: "Projetos",
  portfolio_specialty: "Especialidade",
  portfolio_experience: "Experiência",
  portfolio_change_photo: "Alterar Foto",
  portfolio_save_cloud: "Salvar",
  portfolio_photo_limit: "Foto excede 1MB. Fica lento!",
  portfolio_go_settings_wa: "Configure o nº nas Definições.",
  error_upload: "Erro no upload.",
  portfolio_user_or_url: "Usuário ou URL",
  portfolio_default_dev: "DEV",
  portfolio_default_role: "Engenheiro de Software",
  portfolio_default_bg: "PORTFOLIO",

  current_lang: "pt",

  gallery_toast_uploading: "Subindo para a nuvem...",
gallery_toast_success: "Tudo salvo na nuvem!",
gallery_toast_error: "Erro na rede. Tente novamente.",
gallery_toast_removed: "Item removido localmente.",
gallery_console_remove_error: "Erro ao remover:",
gallery_toast_fix_limits: "Corrija os limites de peso antes de sincronizar.",



    label_beta: "Beta",
    filter_all: "Todos",
    
    // Categorias Completas
    cat_hero: "Heróis & Cabeçalhos",
    cat_media: "Mídia & Imagens",
    cat_features: "Recursos & Preços",
    cat_content: "Conteúdo & Textos",
    cat_contact: "Contato & Rodapé",
    cat_other: "Outros Elementos",
    
    // Categorias Curtas (para os filtros)
    cat_short_hero: "Heróis",
    cat_short_media: "Mídia",
    cat_short_features: "Recursos",
    cat_short_content: "Conteúdo",
    cat_short_contact: "Contato",
    cat_short_other: "Outros",
    
    // Nomes das Secções
   
    section_media_embeds: "Mídia Embutida",
    section_esports_profile: "Perfil eSports",
    section_hero_minimalista: "Hero Minimalista",
    section_tabela_precos: "Tabela de Preços",
    section_depoimentos_clientes: "Depoimentos de Clientes",
    section_faq_acordion: "FAQ Sanfona",
    section_rodape_simples: "Rodapé Simples",

    
    editor_delete_success: "Secção apagada!",
    error_cant_delete_catalog: "Esta secção é fixa e não pode ser apagada.",
    
    // Navegação e Layout
  
    
    // Configurações de Estilo
   
    // Ações de Apagar
    editor_locked_block: "Secção Bloqueada",
    
    // Modal de Confirmação (Soft UI)
    modal_delete_title: "Apagar Secção?",
    modal_delete_desc: "Tens a certeza? Esta ação não pode ser desfeita.",
    modal_cancel: "Cancelar",
    modal_confirm_delete: "Apagar",
    logo_missing: "Adicionar Logo",

change: "Mudar",
logo_title: "Símbolo / Logotipo",
logo_subtitle: "Formato Quadrado (1:1)",
upload_logo: "Escolher Ficheiro",
file_too_large_title: "Ficheiro muito grande",
crop_error: "Erro ao recortar a imagem.",
adjust_logo: "Ajustar Logo",

zoom: "Zoom",
zoom_instruction: "Desliza para fazer Zoom",
empty_products_desc: "Adicione seu primeiro produto para começar a vender.",
portal_edition: "EDIÇÃO GLOBAL • BLOG",
portal_badge: "Novidades & Updates",
portal_title: "Explora o ecossistema, templates e o futuro do design web.",
portal_desc: "Um Blog imersivo desenhado para criadores. Descobre as novas funcionalidades, como áudio imersivo e a nova IA local de assistência.",
portal_explore_btn: "Entrar no Blog",
portal_card1_tag: "Novo Update • Áudio",
portal_card1_time: "Lançado Agora",
portal_card1_title: "Música de fundo imersiva e bandas sonoras dinâmicas nas lojas",
portal_card2_tag: "Beta • IA Local",
portal_card2_engine: "Engine v5",
portal_card2_title: "Nova Inteligência Artificial local para te ajudar a gerir o negócio",
portal_footer_hub: "Hub de Conteúdo",
portal_footer_more: "+ Artigos & Guias",

promo_title: "Portal de Promoções & Blog",
  promo_desc: "Consulte as novidades, posts e campanhas divulgadas na Storely.",
  cat_bakery: "Padaria & Doces",



  Homem: "Homem",
  Mulher: "Mulher",
  Criança: "Criança",

  Baby: "Bebé & Criança",
  Clothing: "Vestuário",
  Bakery: "Pastelaria",
  Groceries: "Mercearia",
  Beauty: "Beleza",
  "Catálogo Geral": "Catálogo Geral",

  "Roupa de Bebé": "Roupa de Bebé",
  "Acessórios de Bebé": "Acessórios de Bebé",
  "Vestidos & Macacões": "Vestidos & Macacões",
  Saias: "Saias",
  "Bodies & Íntima": "Bodies & Íntima",
  "Casacos & Frio": "Casacos & Frio",
  Calções: "Calções",
  Calças: "Calças",
  "Camisas & Tops": "Camisas & Tops",
  Calçado: "Calçado",
  
  "Bolos & Tortas": "Bolos & Tortas",
  "Salgados & Snacks": "Salgados & Snacks",
  Maquilhagem: "Maquilhagem",

  "Tam:": "Tam:",
  "Plus Size": "Plus Size",
  "Tam: Único": "Tam: Único",

  Preto: "Preto",
  Branco: "Branco",
  Azul: "Azul",
  Vermelho: "Vermelho",
  Verde: "Verde",
  Amarelo: "Amarelo",
  Lima: "Lima",
  Laranja: "Laranja",
  Rosa: "Rosa",
  Roxo: "Roxo",
  Castanho: "Castanho",
  Cinza: "Cinza",

  Chocolate: "Chocolate",
  Baunilha: "Baunilha",
  Morango: "Morango",
  "Massa Folhada": "Massa Folhada",

  Couro: "Couro",
  Jeans: "Jeans",
  Chiffon: "Chiffon",
  Seda: "Seda",
  Linho: "Linho",
  Algodão: "Algodão",



  Tecnologia: "Tecnologia",
  ArteDecoracao: "Arte & Décor",
  
  // NOVAS SUBCATEGORIAS
  MiniBolosCupcakes: "Mini Bolos & Cupcakes",
  DocesSobremesas: "Doces & Sobremesas",
  SmartphonesAcessorios: "Smartphones & Acessórios",
  ComputadoresLaptops: "Computadores & Laptops",
  AudioSom: "Áudio & Som",
  SmartwatchesGadgets: "Smartwatches & Gadgets",
  QuadrosTelas: "Quadros & Telas",
  EsculturasArtesanato: "Esculturas & Artesanato",
  DecoracaoInteriores: "Decoração de Interiores",

  // NOVOS SABORES / ATRIBUTOS / MATERIAIS
  Limão: "Limão",
  Cenoura: "Cenoura",
  RedVelvet: "Red Velvet",
  DoceDeLeite: "Doce de Leite",
  Madeira: "Madeira",
  Vidro: "Vidro",
  Metal: "Metal",
  Dourado: "Dourado",
  Wireless: "Wireless",

  // NOVOS TAMANHOS / PORÇÕES
  Mini: "Mini",
  Pequeno: "Pequeno",
  Médio: "Médio",
  Grande: "Grande",
  Fatia: "Fatia",
  Inteiro: "Inteiro",

  ChiffonChocolate: "Chiffon de Chocolate",
  ChiffonMisto: "Chiffon Misto",
  ChiffonSimples: "Chiffon Simples",

  // NOVOS ATRIBUTOS DE SABORES
  Misto: "Misto",
  Simples: "Simples",

  // RESTANTES CHAVES DA ATUALIZAÇÃO ANTERIOR
  
  BolosTortas: "Bolos & Tortas",
  SalgadosSnacks: "Salgados & Snacks",
 
  RoupaDeBebe: "Roupa de Bebé",
  AcessoriosDeBebe: "Acessórios de Bebé",
  VestidosMacacoes: "Vestidos & Macacões",
  BodiesIntima: "Bodies & Íntima",
  CasacosFrio: "Casacos & Frio",
  Calcoes: "Calções",
  Calcas: "Calças",
  CamisasTops: "Camisas & Tops",
  Calcado: "Calçado",





  product_form_photo_removed: "Foto removida com sucesso.",
  product_form_photo_removed_cloud: "Foto removida permanentemente da nuvem.",
  product_form_photo_removed_cloud_failed: "Foto removida localmente, mas a exclusão na nuvem falhou ou expirou.",
  product_form_upload_error: "Falha ao enviar esta imagem.",
  product_form_sync_general_error: "Ocorreu um erro geral ao sincronizar as imagens com a nuvem.",
  product_form_sync_required: "Ação não permitida: Sincronize as fotos antes de prosseguir.",
  product_form_sync_before_saving: "Sincronize as fotos locais antes de salvar.",
  product_form_photos_synced_success: "Fotos sincronizadas com sucesso!",



  sync_uploading: "A Sincronizar...",
  sync_cloud_btn: "Sync Nuvem",
  portfolio_pending_sync: "Sincronização Pendente",
  portfolio_pending_sync_desc: "Faça o upload (Sync Nuvem) antes de publicar a página.",
  saveBlockedLargeSection: "Ação Bloqueada: O bloco \"{{section}}\" ultrapassou o limite máximo de armazenamento (15MB).",









  auth_cooldown_message: "Tentativas excessivas. Por segurança, aguarde a contagem decrescente.",
  auth_cooldown_support: "Está bloqueado? Clique aqui para falar com o suporte via WhatsApp.",
  auth_cooldown_wait: "Muitas tentativas. Aguarde o tempo de bloqueio terminar.",
  auth_email_invalid_format: "O formato do email introduzido não é válido.",
  auth_invalid_credentials: "Email ou palavra-passe incorretos.",
auth_change_data_try_again: "Por favor, altere os dados antes de tentar novamente.",




  product_form_images_title: "Galeria de Imagens",
 
  product_form_blobs_prevent_save: "Ação não permitida: Existem imagens locais que precisam ser enviadas para a nuvem ou substituídas.",
  editor_modal_orphan_media: "Inválida / Reenvie",
  product_form_orphan_blob: "Substitua as imagens inválidas/locais",
  product_form_orphan_blob_desc: "Este link local já expirou. Por favor, apague ou reenvie uma nova foto.",



  product_form_unit_fardo: "Fardo",
  product_form_unit_cento: "Cento",
 
  product_form_unit_ano: "Ano",
  product_form_unit_mm: "Milímetro (mm)",
  product_form_unit_rolo: "Rolo",
 
  product_form_unit_t: "Tonelada (t)",

  product_form_unit_conjunto: "Conjunto",

  version_update_title: "Atualização Disponível",
  version_update_button: "Atualizar Agora",



  product_form_pricing_label: "Precificação",
  product_form_price_original: "Preço Original",
  product_form_discount_label: "Desconto (%)",
  product_form_final_price_label: "Preço final na loja:",

  ofertaEspecial: "Oferta Especial",

  version_update_badge: "Nova Era Disponível",
  version_update_desc: "Uma nova versão com melhorias de desempenho e correções foi instalada para garantir a máxima fluidez na sua loja.",
  version_update_released: "Lançado em",


    filter_subcategories: "Subcategorias:",
    filter_all_sub: "Todas",
    filter_clear: "Limpar",
    gender_kid: "Criança",
    search_results_title: "Resultados da Pesquisa",

    whatsapp_discount_title: "🔥 *Quero garantir a minha oferta com",
whatsapp_discount_suffix: "% de desconto!*",
whatsapp_price_from: "De: ~",
whatsapp_price_to: "Por: *",
whatsapp_savings_prefix: "*(Poupança garantida de ",
whatsapp_savings_suffix: ")* 🎉",
whatsapp_customer_note: "📝 *Observação do cliente:*",

exit: "Sair",
share_text: "Dá uma vista de olhos neste conteúdo!",
reset_zoom: "Remover Zoom",


tip_hero_title: "Dica:",
tip_hero_desc: "Copie o link acima e coloque no Status do WhatsApp!",
tips_section_title: "Como vender mais todos os dias",
tips_whatsapp_title: "Divulgue no WhatsApp",
tips_whatsapp_desc: "Partilhe o seu link no Status do WhatsApp. Ver tudo num só link faz os clientes comprarem mais rápido.",
tips_sales_title: "Preço e Detalhes",
tips_sales_desc: "Coloque preços e tamanhos. Clientes desistem de comprar quando têm de perguntar o preço.",
tips_visual_title: "Fotos que Vendem",
tips_visual_desc: "Tire fotografias num lugar iluminado. Uma loja limpa e bonita transmite muita confiança.",






tip_hero_1: "Copie o link acima e coloque no Status do WhatsApp!",
tip_hero_2: "Adicione o link na biografia do seu Instagram ou TikTok.",
tip_hero_3: "Coloque o link na resposta automática do WhatsApp Business.",
tip_hero_4: "Envie o seu catálogo diretamente aos clientes nas conversas.",


tips_rec_whatsapp_title: "Poder do WhatsApp",
tips_rec_whatsapp_desc: "Partilhe no Status e coloque o link na bio do WhatsApp. Clientes compram mais rápido assim.",

tips_rec_social_title: "Link na Biografia",
tips_rec_social_desc: "No Instagram/TikTok, diga 'Compre no link da bio!'. Facilita muito a vida de quem quer comprar.",

tips_rec_groups_title: "Grupos do Facebook",
tips_rec_groups_desc: "Divulgue a loja em grupos. Uma loja completa passa muito mais confiança do que mensagens soltas.",

tips_rec_clarity_title: "Preço é Fundamental",
tips_rec_clarity_desc: "Nunca esconda o preço. Lojas com preços claros vendem 3x mais porque evitam perguntas.",

tips_rec_visual_title: "Fotos com Qualidade",
tips_rec_visual_desc: "Use boa luz e fundos limpos. Uma foto bonita passa confiança e valoriza muito o seu produto.",

tips_rec_promo_title: "Ofertas Relâmpago",
tips_rec_promo_desc: "Crie ofertas de 24h. A urgência faz os clientes decidirem e comprarem na hora.",








product_form_images_subtitle: "As imagens são salvas e optimizadas na nuvem.",
product_form_images_deferred_desc: "As imagens são salvas na nuvem apenas ao finalizar o produto.",
product_form_pending_warning: "Fotos pendentes de envio",

product_form_ready_to_save: "Pronta",
product_form_saved: "Na Nuvem",

product_form_cover_required_tag: "Principal",
product_form_extra_images_title: "Fotos Adicionais",
product_form_cover_needed_hint: "Defina a capa para desbloquear",
product_form_add_cover_first: "Adicione a capa primeiro",




product_form_image_corrupt: "Foto Danificada",
product_form_image_corrupt_desc: "Ficheiro corrompido ou formato inválido.",
product_form_replace: "Trocar",


// Barra de Ações e Estados do Formulário
btn_waiting: "Aguarde...",
common_cancel: "Cancelar",
product_form_cancelling_title: "A Cancelar...",
product_form_cleaning_photos: "A limpar fotos enviadas...",


quick_phrase_men: "Público: Masculino / Homem",

quick_phrase_adult: "Tamanho e Modelo para Adulto",
quick_phrase_onesize: "Tamanho: Único / Ajustável",
















// Valores Otimizados para o Motor de Busca
val_kids: "Infantil (Criança / Bebé)",
val_women: "Feminino (Mulher)",
val_men: "Masculino (Homem)",
val_unisex: "Unissexo",
val_adult: "Adulto",
val_p: "Tam: P",
val_m: "Tam: M",
val_g: "Tam: G",
val_gg: "Tam: GG",
val_onesize: "Tamanho Único",
val_plussize: "Plus Size",
val_casual: "Casual / Dia a dia",
val_social: "Social / Trabalho",
val_fitness: "Treino / Fitness",
val_party: "Festa / Eventos",
val_combo: "Kit / Combo",
val_cotton: "100% Algodão",
val_leather: "Couro / Pele",
val_jeans: "Jeans / Denim",
val_black: "Preto",
val_white: "Branco",
val_blue: "Azul",
val_red: "Vermelho",
val_pink: "Rosa",
val_gold: "Dourado",

// Interface do Assistente
product_form_smart_helper_title: "Adicionar Tags Rápidas",
selected_tags_label: "Ativas:",
tab_audience: "Público",
tab_sizes: "Tamanhos",
tab_styles: "Estilo",
tab_materials: "Material",
tab_colors: "Cores",

// Chips de Ação Rápida
quick_tag_kids: "👶 Criança",
quick_tag_women: "👩 Mulher",
quick_tag_men: "👨 Homem",
quick_tag_unisex: "✨ Unissexo",
quick_tag_adult: "🧑 Adulto",
quick_tag_p: "📏 P",
quick_tag_m: "📏 M",
quick_tag_g: "📏 G",
quick_tag_gg: "📏 GG",
quick_tag_onesize: "📏 Único",
quick_tag_plussize: "➕ Plus Size",
quick_tag_casual: "👟 Casual",
quick_tag_social: "👔 Social",
quick_tag_fitness: "⚡ Fitness",
quick_tag_party: "🎉 Festa",
quick_tag_combo: "📦 Kit / Combo",
quick_tag_cotton: "🌿 Algodão",
quick_tag_leather: "🧥 Couro",
quick_tag_jeans: "👖 Jeans",
quick_tag_black: "⚫ Preto",
quick_tag_white: "⚪ Branco",
quick_tag_blue: "🔵 Azul",
quick_tag_red: "🔴 Vermelho",
quick_tag_pink: "🌸 Rosa",
quick_tag_gold: "✨ Dourado",


network_offline_title: "Sem conexão com a internet",
network_offline_desc: "Verifique sua rede Wi-Fi ou dados móveis.",
network_slow_title: "Sua internet está lenta",
network_slow_desc: "O processamento ou resposta da rede está demorando mais que o esperado.",
network_restored_title: "Conexão restabelecida",
network_restored_desc: "Dados carregados e velocidade normalizada.",
network_close_aria: "Fechar aviso de rede",
swipe_down_to_close: "Deslize para baixo",







  product_form_image_corrupt_hint: "Invisível p/ clientes. Substitua.",
  product_form_image_local_only: "Local",
  product_form_image_not_saved: "Não salvo na nuvem",
  product_form_orphan_global_alert: "Ação Necessária",
  product_form_orphan_global_alert_desc: "Fotos danificadas detetadas (invisíveis para clientes). Apague ou substitua as fotos a vermelho antes de salvar.",
  product_form_orphan_blob_prevent_save: "Não é possível guardar. Substitua as fotos danificadas (a vermelho) primeiro.",









  quick_tag_baby: "🍼 Bebé",
  val_baby: "Bebé / Recém-nascido",
  
  quick_tag_teen: "🛹 Jovem",
  val_teen: "Jovem / Adolescente",

  quick_tag_maternity: "🤰 Grávida",
  val_maternity: "Maternidade / Grávida",

  // Tamanhos
  quick_tag_xs: "📏 PP / XS",
  val_xs: "Tam: PP (XS)",
  quick_tag_s: "📏 P / S",
  val_s: "Tam: P (S)",

  quick_tag_l: "📏 G / L",
  val_l: "Tam: G (L)",
  quick_tag_xl: "📏 GG / XL",
  val_xl: "Tam: GG (XL)",
  quick_tag_xxl: "📏 XG / XXL",
  val_xxl: "Tam: XG (XXL)",
  quick_tag_3xl: "📏 XXG / 3XL",
  val_3xl: "Tam: XXG (3XL)",


  
  quick_tag_minimalist: "⚪ Minimalista",
  val_minimalist: "Minimalista",
  quick_tag_vintage: "📻 Vintage",
  val_vintage: "Vintage / Retrô",
  quick_tag_elegant: "💎 Elegante",
  val_elegant: "Elegante / Chic",
 

  quick_tag_polyester: "🧵 Poliéster",
  val_polyester: "Poliéster",
  quick_tag_linen: "🌾 Linho",
  val_linen: "Linho",
  quick_tag_silk: "🦋 Seda",
  val_silk: "Seda",
  quick_tag_wool: "🐑 Lã",
  val_wool: "Lã / Tricô",
  
  quick_tag_viscose: "🌬️ Viscose",
  val_viscose: "Viscose",
  quick_tag_elastane: "🤸 Elastano",
  val_elastane: "Elastano / Lycra",
  quick_tag_velvet: "🍷 Veludo",
  val_velvet: "Veludo",


  quick_tag_grey: "🔘 Cinza",
  val_grey: "Cinza / Prata",
  quick_tag_beige: "🟤 Bege",
  val_beige: "Bege / Nude",
  quick_tag_brown: "🟫 Marrom",
  val_brown: "Marrom / Castanho",

  quick_tag_green: "🟢 Verde",
  val_green: "Verde",
  quick_tag_yellow: "🟡 Amarelo",
  val_yellow: "Amarelo",
  quick_tag_orange: "🟠 Laranja",
  val_orange: "Laranja",
  quick_tag_purple: "🟣 Roxo",
  val_purple: "Roxo / Lilás",
  quick_tag_multicolor: "🌈 Estampado",
  val_multicolor: "Multicolorido / Estampado",

















 
  quick_tag_gamers: "🎮 Gamers",
  val_gamers: "Gamers",
  quick_tag_professionals: "💼 Profissionais",
  val_professionals: "Uso Profissional",
  quick_tag_dogs: "🐶 Cães",
  val_dogs: "Para Cães",
  quick_tag_cats: "🐱 Gatos",
  val_cats: "Para Gatos",
  quick_tag_birthday: "🎂 Aniversário",
  val_birthday: "Aniversário / Festa",
  quick_tag_wedding: "💍 Casamento",
  val_wedding: "Casamento / Noivado",
  quick_tag_gift: "🎁 Presente",
  val_gift: "Ideal para Presente",


  quick_tag_mini: "🧁 Mini / Bento",
  val_mini: "Mini / Bento Cake",
  quick_tag_slice: "🍰 Fatia",
  val_slice: "Fatia / Pedaço",
  quick_tag_500g: "⚖️ 500g",
  val_500g: "Aprox. 500g",
  quick_tag_1kg: "⚖️ 1 Kg",
  val_1kg: "Aprox. 1 Kg",
  quick_tag_2kg: "⚖️ 2 Kg",
  val_2kg: "Aprox. 2 Kg",
  quick_tag_10p: "👥 10 Pessoas",
  val_10p: "Serve ~10 Pessoas",
  quick_tag_30ml: "💧 30ml",
  val_30ml: "30ml",
  quick_tag_50ml: "💧 50ml",
  val_50ml: "50ml",
  quick_tag_100ml: "💧 100ml",
  val_100ml: "100ml",
  quick_tag_500ml: "💧 500ml",
  val_500ml: "500ml",
  quick_tag_64gb: "💾 64GB",
  val_64gb: "64GB",
  quick_tag_128gb: "💾 128GB",
  val_128gb: "128GB",
  quick_tag_256gb: "💾 256GB",
  val_256gb: "256GB",
  quick_tag_512gb: "💾 512GB",
  val_512gb: "512GB",
  quick_tag_1tb: "💾 1TB",
  val_1tb: "1TB",
  quick_tag_a4: "📄 A4",
  val_a4: "Formato A4",
  quick_tag_a3: "📄 A3",
  val_a3: "Formato A3",

  
  quick_tag_homemade: "🏠 Caseiro",
  val_homemade: "Caseiro / Artesanal",
  quick_tag_gourmet: "✨ Gourmet",
  val_gourmet: "Gourmet",
  quick_tag_vegan: "🌱 Vegano",
  val_vegan: "Vegano / Plant-based",
  quick_tag_gluten_free: "🌾 Sem Glúten",
  val_gluten_free: "Sem Glúten",
  quick_tag_sugar_free: "🚫 Zero Açúcar",
  val_sugar_free: "Diet / Zero Açúcar",
  quick_tag_organic: "🌿 Orgânico",
  val_organic: "Orgânico / Natural",
  quick_tag_new: "🆕 Novo",
  val_new: "Novo / Lacrado",
  quick_tag_used: "♻️ Usado",
  val_used: "Usado / Semi-novo",
  quick_tag_refurbished: "🔧 Recondicionado",
  val_refurbished: "Recondicionado",


  quick_tag_chocolate: "🍫 Chocolate",
  val_chocolate: "Chocolate / Cacau",
  quick_tag_vanilla: "🍦 Baunilha",
  val_vanilla: "Baunilha",
  quick_tag_strawberry: "🍓 Morango",
  val_strawberry: "Morango",
  quick_tag_red_velvet: "🍰 Red Velvet",
  val_red_velvet: "Red Velvet",
  quick_tag_fruits: "🍒 Frutas",
  val_fruits: "Frutas / Tropical",
  quick_tag_caramel: "🍯 Doce de Leite",
  val_caramel: "Doce de Leite / Caramelo",
  quick_tag_nuts: "🥜 Nozes/Amendoim",
  val_nuts: "Nozes / Amendoim / Crocante",
  quick_tag_savory: "🧀 Salgado",
  val_savory: "Salgado / Queijo",
  quick_tag_plastic: "🛢️ Plástico",
  val_plastic: "Plástico ABS",
  quick_tag_metal: "🔩 Metal",
  val_metal: "Metal / Aço",
  quick_tag_aluminum: "⚙️ Alumínio",
  val_aluminum: "Alumínio",
  quick_tag_glass: "🪟 Vidro",
  val_glass: "Vidro / Cristal",
  quick_tag_wood: "🪵 Madeira",
  val_wood: "Madeira Maciça",
  quick_tag_resin: "💧 Resina",
  val_resin: "Resina",
  quick_tag_silicone: "🧪 Silicone",
  val_silicone: "Silicone",
  quick_tag_gold_mat: "✨ Ouro",
  val_gold_mat: "Ouro 18k",
  quick_tag_silver_mat: "💍 Prata",
  val_silver_mat: "Prata 925",
  quick_tag_stainless: "🛡️ Aço Inox",
  val_stainless: "Aço Inoxidável",

 
  quick_tag_transparent: "🫥 Transparente",
  val_transparent: "Transparente / Claro",

  view_table: "Tabela",
  view_grid: "Grade",



 
  btn_share_store: "Partilhar",
  copied_label: "Copiado!",
  share_default_title: "Loja Online",
  share_store_message: "🛍️ Olá! Venha conferir os melhores produtos e novidades na nossa loja oficial {name}:",


  
  settings_badge: 'Controlo & Sistema',

  tab_store_tag: 'Visual & Marca',
  tab_account_tag: 'Dados & Email',
  tab_security_tag: 'Acesso & Senha',




  pages_builder_badge: 'Gestor de Páginas',
  pages_title: 'Páginas',
  pages_count: 'Páginas',
  search_pages_placeholder: 'Pesquisar páginas...',
 

  







  
  nav_guide: 'Atrair Clientes',
















  guide_title: 'Como Atrair Clientes e Vender',
  guide_subtitle: 'Escolha o link que quer partilhar, copie as mensagens prontas e aceda diretamente aos seus aplicativos.',
  guide_tab_products: 'Catálogo de Produtos',
  guide_copied: 'Link copiado com sucesso!',
  guide_copy_btn: 'Copiar Link',

  guide_social_broadcast: 'Disparar Agora nos Aplicativos',
  guide_share_whatsapp: 'WhatsApp',
  guide_share_telegram: 'Telegram',
  guide_share_facebook: 'Facebook',
  guide_share_x: 'Twitter',
  guide_share_text_intro: 'Olá! Veja o nosso catálogo oficial da',
  guide_share_text_body: 'Temos novidades incríveis com fotos e preços atualizados. Acesse agora:',
  guide_mockup_preview_badge: 'Como o seu cliente vai ver',
  guide_mockup_followers: 'seguidores',
  guide_mockup_following: 'a seguir',
  guide_mockup_likes: 'curtidas',
  guide_mockup_posts: 'posts',
  guide_mockup_official_tag: 'Catálogo & Pedidos Oficiais',
  guide_mockup_verified: 'Loja Verificada',
  guide_mockup_online: 'Online',
  guide_mockup_business_account: 'Conta Comercial Oficial',
  guide_mockup_wa_catalog_btn: 'Ver Catálogo Completo',
  guide_mockup_tap_to_open: 'Tocar para abrir no aplicativo',
  guide_templates_title: 'Mensagens Prontas para Enviar',
  guide_templates_sub: 'Copie textos já testados que convencem clientes a clicar e comprar:',
  guide_copy_msg: 'Copiar Texto',
  guide_msg_copied: 'Texto Copiado!',
  guide_template_status_title: 'Status & Stories',
 
  guide_template_greeting_title: 'Saudação no WhatsApp',
  
  guide_template_bio_title: 'Texto para Bio (Instagram & TikTok)',
 
  guide_platforms_title: 'Onde configurar o seu link',

  guide_platform_ig_name: 'Instagram',
  guide_platform_ig_step1: 'Abra o Instagram, vá ao seu perfil e clique em "Editar Perfil".',
  guide_platform_ig_step2: 'Toque em "Links" > "Adicionar link externo" e cole o seu link.',
  guide_platform_ig_step3: 'Nos Stories, use a figurinha de "Link" direcionando para os seus produtos.',
  guide_platform_wa_name: 'WhatsApp Business',
  guide_platform_wa_step1: 'Abra o WhatsApp, vá em "Configurações" > "Ferramentas Comerciais" > "Perfil Comercial".',
  guide_platform_wa_step2: 'No campo "Site / Website", cole o link do seu catálogo /products.',
  guide_platform_wa_step3: 'Ative a "Mensagem de Saudação" automática com o link para quem lhe chamar.',
  guide_platform_tt_name: 'TikTok',
  guide_platform_tt_step1: 'No seu perfil, toque no menu do topo > "Configurações e Privacidade" > "Conta" > "Trocar para Conta Corporativa".',
  guide_platform_tt_step2: 'Clique em "Editar Perfil" e adicione o seu link no campo "Site".',
  guide_platform_tt_step3: 'Grave vídeos rápidos mostrando os produtos e diga: "Link do catálogo no perfil!".',
  guide_platform_gmb_name: 'Google Maps',
  guide_platform_gmb_step1: 'Aceda à ficha da sua empresa no Google Meu Negócio ou Maps.',
  guide_platform_gmb_step2: 'No campo "Website", adicione a ligação da sua loja.',
  guide_platform_gmb_step3: 'Quem pesquisar pela sua loja no Google terá um botão direto para fazer pedidos.',
  
  guide_troubleshoot_title: "O que fazer no dia a dia",
  guide_troubleshoot_p1_title: "Quando o cliente pedir preços",
  guide_troubleshoot_p1_desc: "Não perca tempo a escrever item por item. Envie o link do catálogo para ele escolher com fotos e valores.",
  guide_troubleshoot_p2_title: "Para receber mais mensagens",
  guide_troubleshoot_p2_desc: "Coloque o link no seu perfil do Instagram e poste nos Stories dizendo: \"link na bio para ver os produtos\".",
  guide_troubleshoot_p3_title: "Para não perder vendas à noite",
  guide_troubleshoot_p3_desc: "Use a mensagem automática de saudação do WhatsApp. Assim, quem mandar mensagem já recebe a vitrine na hora.",

  pdf_doc_badge: 'Carta de Apresentação Comercial',
  pdf_doc_subtitle: 'Dossiê profissional A4 para clientes, parceiros e propostas',
  pdf_doc_ref: 'Ref. Registo',
  pdf_doc_date: 'Data de Emissão',
  pdf_doc_active_since: 'Atividade Desde',
  pdf_doc_currency: 'Moeda Base',
  pdf_doc_title: 'Apresentação Comercial & Catálogo Oficial',
  pdf_about_title: 'Sobre a Empresa & Atuação',
  pdf_about_default_desc: 'Dedicamo-nos ao fornecimento de artigos criteriosamente selecionados, assegurando conformidade de produto, transparência de valores e agilidade em todo o ciclo de encomenda.',
  pdf_pillars_title: 'Compromissos & Padrões Operacionais',
  pdf_pillar1_title: 'Catálogo em Tempo Real',
  pdf_pillar1_desc: 'Inventário digital sincronizado com valores, disponibilidade imediata e fotografias reais.',
  pdf_pillar2_title: 'Atendimento Direto',
  pdf_pillar2_desc: 'Suporte personalizado via chat para esclarecimento técnico, orçamentos e reservas instantâneas.',
  pdf_pillar3_title: 'Segurança & Rastreabilidade',
  pdf_pillar3_desc: 'Processamento rigoroso de encomendas com acompanhamento dedicado até ao destino final.',
  pdf_pillar4_title: 'Garantia de Qualidade',
  pdf_pillar4_desc: 'Inspeção minuciosa dos artigos para assegurar conformidade total com as especificações.',
  

  pdf_footer_rights: 'Todos os direitos reservados.',
  pdf_footer_generated: 'Gerado via infraestrutura Storely',

  // --- Modal da Carta de Apresentação ---
  modal_feature_desc: 'Gera um documento em folha timbrada com a apresentação da sua marca, catálogo de produtos em tempo real e contactos verificados.',
  modal_doc_lang: 'Idioma da Folha:',
  modal_missing_alert: 'Dados em falta para um documento completo',
  modal_go_settings: 'Completar nas Definições',
  modal_official_store: 'Loja Oficial',
  modal_official_logo: 'Logotipo Oficial',
  modal_generate_btn: 'Gerar Documento PDF A4',
  modal_preview_tag: 'Pré-visualização do Conteúdo',






pdf_access_title: 'Como Aceder e Fazer Encomendas',
pdf_access_subtitle: 'Consulte o nosso portfólio completo através da ligação oficial abaixo e envie sua seleção diretamente para o nosso atendimento:',
pdf_contacts_title: 'Canais Oficiais de Atendimento',
pdf_contact_whatsapp: 'WhatsApp Comercial',
pdf_contact_email: 'E-mail Institucional',
pdf_contact_website: 'Página Web Oficial',
pdf_contact_unavailable: 'Disponível no catálogo oficial',
pdf_closing_note: 'Este documento é emitido formalmente para clientes, empresas e parceiros como comprovativo oficial de canais de venda da marca.',
modal_generating: 'A preparar documento...',





  guide_mockup_default_store: 'Minha Loja',
  guide_mockup_wa_welcome_msg: 'Olá! Seja bem-vindo(a). Confira o nosso catálogo completo com fotos e preços:',
  guide_mockup_official_catalog_label: 'Catálogo Oficial',
  guide_mockup_official_store_label: 'Loja Oficial',

  guide_mockup_google_open_status: 'ABERTO',
  guide_mockup_google_default_title: 'Sua Loja Oficial',
  guide_mockup_google_store_type: 'Loja',
  guide_mockup_google_tab_website: 'Website',
  guide_mockup_google_tab_directions: 'Rotas',
  guide_mockup_google_tab_call: 'Ligar',
  guide_mockup_google_tab_share: 'Partilhar',
  
  guide_mockup_ig_edit_profile: 'Editar Perfil',









  store_default_name: "Nossa Loja",
  share_msg_products_intro: "✨ Olá! Veja o catálogo com todos os produtos de",
  share_msg_store_intro: "🛍️ Visite a página oficial de",
  
  guide_copied_msg: "Mensagem e link copiados!",
  guide_copy_msg_btn: "Copiar Mensagem de Divulgação",
 
  guide_letter_modal_title: "Carta de Apresentação & QR Code",
  guide_letter_modal_places: "Balcão • Montra • Status do WhatsApp • Grupos & Eventos",
  guide_share_instagram: "Instagram",


  guide_badge: "Divulgação",
  guide_preview_btn: "Ver Loja",
  guide_tab_store: "Página Inicial",
  
  guide_native_share_btn: "Partilhar com Foto & Mensagem",


  guide_nav_title: "Passo a Passo da Divulgação",
  guide_nav_hero: "1. Partilhar",
  guide_nav_templates: "2. Mensagens",
  guide_nav_platforms: "3. Configurar Redes",
  guide_nav_troubleshoot: "4. Dicas",
  guide_badge_status: "WhatsApp Status & Stories",
  guide_badge_greeting: "Saudação no WhatsApp",
  guide_badge_bio: "Bio do Instagram & TikTok",
  guide_tab_share: "Partilhar",
  guide_tab_texts: "Textos",
  guide_tab_places: "Redes",
  guide_tab_tips: "Dicas",






  guide_template_greeting_text: "Olá! É um prazer ter você por aqui na *{{store}}*! ✨\n\n🛍️ *Confira os destaques e faça seu pedido:*\n{{catalog_url}}\n\nℹ️ Para conhecer melhor nosso espaço: {{store_url}}",

  guide_template_status_text: "🔥 *Tem novidade no ar!*\n\n👇 *Dê uma olhada no catálogo antes que acabe:*\n{{catalog_url}}\n\nℹ️ Mais informações da loja: {{store_url}}",
  
  guide_template_bio_text: "✨ *{{store}}* | Tudo escolhido com o maior cuidado.\n\n🛍️ *Acesse o catálogo completo aqui:*\n{{catalog_url}}\n\nℹ️ Saiba mais sobre nós: {{store_url}}",


guide_template_send_wa: "Enviar",



guide_letter_tag_qr: "Com QR Code",
guide_letter_tag_print: "Pronto a Imprimir",
guide_letter_open_btn: "Gerar",














  store_official_title: "Loja Oficial",
  verified_store: "Oficial",
  safe_browsing: "Verificado",
  catalog_highlights: "Destaques",
  catalog_recent_highlights: "Destaques",
  catalog_filter_discounts: "Promoções",
  catalog_show_all: "Ver Todos",
  catalog_no_products_title: "Nenhum Produto Encontrado",
  catalog_no_products_desc: "Não encontramos itens para estes filtros.",
  catalog_no_discounts_title: "Nenhum Produto em Promoção",
  catalog_no_discounts_desc: "Não há produtos com desconto ativo no momento.",
  share_store_recommendation_msg: "Dá uma olhada nos produtos da {{store}}! Encontrei ótimas opções no catálogo oficial:",
  common_home: "Página Inicial",
  common_share: "Recomendar",

  categories: "categorias",
  filters: "Filtros",
  on_sale: "em promoção",

  reset: "Redefinir",







  beta_badge: "Storely Beta",
  welcome_beta_title: "Bem-vindo ao Beta da Storely",
  welcome_beta_desc: "O teu ambiente foi atualizado e totalmente otimizado com a versão mais recente. Aproveita as novas ferramentas!",
  welcome_beta_button: "Começar a Explorar",
  current_version_label: "Versão em execução:",
  new_version_label: "Nova versão:",
  build_date_label: "Compilação:",
  


  catalog_view_products: "Apreciar Já",
  more_from_this_store: "Aproveite o mesmo pedido",
  buy_together_tip: "Peça outros itens desta loja no mesmo frete",
  explore_other_stores: "Outras opções populares",
  similar_in_category: "Modelos semelhantes em outras lojas",
  product_default_name: "Produto",
  product_save_amount: "Poupa {amount}",
  fast_response: "Resposta rápida",
  limit_reached: "Limite atingido",
  version_updating_loading: "A sincronizar nova versão...",
















  auth_status_badge_verified: "Verificado",
auth_status_badge_unavailable: "Indisponível",
auth_status_badge_verify_needed: "⚠️ necessária",
auth_btn_verify: "Verificar",
auth_btn_checking: "A verificar...",
auth_btn_available: "Verificado",
auth_btn_retry: "Verificar",
auth_verify_hint: "Clique em 'Verificar' para reservar o seu link oficial.",
auth_slug_must_verify: "Por favor, clique no botão 'Verificar' ao lado do nome da loja antes de continuar.",
auth_network_error: "Falha de ligação à internet. Verifique a rede e tente novamente.",





  guide_hero_status: 'Pronto para divulgar',
  guide_hero_subtitle: 'Partilhe o catálogo completo e a sua loja com uma mensagem formatada para WhatsApp, Instagram e outras redes.',
  guide_universal_share_btn: 'Partilhar nas Redes',
  guide_copied_btn: 'Copiado',
  
  share_msg_greeting: 'Olá! Conheça as novidades e produtos oficiais da',
  share_msg_catalog_label: '🛍️ Catálogo de Produtos:',
  share_msg_store_label: '🌐 Página Inicial:',
  share_msg_closing: 'Acesse para conferir e fazer seu pedido online!',


  scroll_restored: 'Posição restaurada',
loading_content: 'Carregando conteúdo...',
guide_share_catalog_cta: "🛍️ Escolha os seus favoritos diretamente no catálogo:",
guide_share_store_cta: "🌐 Conheça a nossa história e detalhes da loja:",


guide_platforms_sub: "Escolha a rede e siga o passo a passo:",
guide_platform_open: "Configurar agora",
guide_platforms_footer_hint: "Depois de salvar, qualquer cliente poderá acessar o catálogo com 1 clique.",








  item_singular: "artigo",
  item_plural: "artigos",
  photos_all_ok: "Fotos 100% OK",
  inventory_subtitle: "Adicione fotos, altere preços e ative itens na sua loja online em tempo real.",
  
  broken_products_singular: "produto precisa de imagem:",
  broken_products_plural: "produtos precisam de imagem:",
  
  store_management_title: "Gestão da Loja",

  broken_photo_warning: "Foto corrompida ou inacessível",
  fix_now: "Corrigir",
  fix_photo: "Corrigir Foto",
  click_to_fix: "Clique no item para corrigir",
  image_error: "Erro Imagem",




































  group_header_audience: "Público / Alvo",
    group_header_sizes: "Tamanhos / Capacidade",
    group_header_styles: "Estilo / Condição",
    group_header_materials: "Material / Sabor",
    group_header_colors: "Cores",
    product_details_details: "Sobre o Produto",
    tap_to_customize: "Personalize abaixo",
    audience_target_title: "Ideal para",
    status_select_one: "Escolha uma opção",
    selected_specs: "Opções Escolhidas",
    remove: "Remover",
    decrease_quantity: "Diminuir quantidade",
    increase_quantity: "Aumentar quantidade",
    unit_abbr: "un.",
    buy_by_amount: "Comprar no valor de",
    placeholder_budget_example: "Ex: 300",
    budget_yield_remainder: "Dá {qty} {unit} (sobram {change})",
    budget_yield_exact: "Exato para {qty} {unit}",
    confirmed_quantity_summary: "{qty} {unit} confirmada(s)",
 
    
   

    order_request_title: "Novo Pedido",
product_item: "Item",
preference_note: "Preferência / Nota",


standard_option: "Padrão",
  
  cart_diff_prefs_title: "Já tem este produto no carrinho",
  cart_pick_replace_target: "Qual variação deseja substituir?",
  back: "Voltar",
  close: "Fechar",
  cart_replace_prev: "Atualizar o anterior",
  choose: "Escolher",
  cart_replace_action: "Mudar",
  cart_keep_both: "Guardar ambos (2 escolhas)",
  cart_select_to_overwrite: "Toque na variação que será substituída pela atual:",
  current_in_cart: "No carrinho",
  variations_total_count: "{count} configurações totais",
  view_cart_btn: "Ver no Carrinho",






  cart_limit_title: "Limite de 3 Variações Atingido",
  already_in_cart_title: "Produto já no Carrinho",
  cart_full_warning_detailed: "Já tens o limite máximo de 3 opções deste produto no carrinho. Escolhe como queres atualizar:",
  cart_prompt_question: "Já tens outra opção deste item no carrinho. Queres adicionar mais uma opção ou apenas trocar a escolha?",
  action_replace_oldest_only: "Trocar apenas a mais antiga",
  action_replace_all_previous: "Substituir todas as outras por esta",
  action_add_new_variant: "Adicionar como mais uma opção",
  action_replace_previous: "Apenas trocar pela escolha atual",
  store_label_cart: "Loja",

  cart_added: "Adicionado!",
  cart_already_exists: "Já no Carrinho",
  cart_item_exists_badge: "Já no Carrinho ({qty})",
  btn_add_to_cart: "Ao Carrinho",
  mode_by_qty: "Por Quantidade",
  mode_by_budget: "Comprar por Valor",
  placeholder_budget_simple: "Quer comprar de quanto? (ex: 500)",
  quick_values: "Sugestões:",



  search_placeholder: "O que procuras hoje?...",
  clear: "Limpar",
  btn_explore: "Explorar",

  search_filter_all: "Todos ({count})",
  search_filter_this_store: "Nesta Loja ({count})",
  search_filter_network: "Lojas Parceiras ({count})",

  // Categorias (Painel e Alternador)
  search_in_store: "Categorias da Loja",
  search_see_local: "Ver da Loja",
  search_empty_store_state: "Esta loja ainda não possui artigos carregados.",
  search_empty_store_hint: "Explore todas as categorias globais para encontrar o que procura:",

  // Resultados Locais e Sugestão Semântica
  search_category_suggestion_prompt: "Procurava por artigos desta categoria?",
  search_explore_category_button: "Ver {category}",

  // Rede de Lojas Parceiras e API Externa
  badge_network: "Rede",
  badge_partner_store: "Parceiro",
  search_network_title: "Buscar em outras lojas",
  search_network_desc: 'Pesquisar por "{term}" em toda a plataforma',
  search_network_limited_desc: "Poucas opções locais. Explorar mais artigos na rede parceira?",
  search_network_footer_hint: "Procurar mais opções em outras lojas da rede",
  search_network_empty_prompt: "Não encontramos este artigo nesta loja. Gostaria de procurar na nossa rede parceira?",
  searching_network_loading: "Buscando em lojas parceiras...",
  search_global_title: "Explorar em Outras Lojas",
  search_no_global_results: "Nenhum resultado externo encontrado.",









  cart_title: "Seu Carrinho",
  cart_tab_active: "No Carrinho",
  cart_tab_sent: "Enviados",
  cart_clear_all: "Limpar tudo",
  cart_clear_sent_history: "Limpar histórico",

  // Estado Vazio
  cart_empty_title: "O seu carrinho está vazio",
  cart_empty_desc: "Explore o catálogo e adicione produtos para finalizar pelo WhatsApp.",
  cart_explore_products: "Explorar Produtos",
  cart_sent_orders_empty: "Nenhum pedido enviado ainda.",

  // Itens, Unidades e Variações
  cart_item_unit: "un",
  cart_item_count: "{count} {count, plural, one {item} other {itens}}",
  cart_default_variation: "Padrão",
  cart_multiple_variations_badge: "{count} variações selecionadas",
  cart_variations_toggle: "Ver variações",
  cart_variations_hide: "Ocultar variações",
  cart_check_variation_notice: "Confirme as variações antes de enviar:",
  cart_decrease_qty: "Diminuir quantidade",
  cart_increase_qty: "Aumentar quantidade",
  cart_remove_item: "Remover produto",

  // Ações de Compra e Rodapé
  cart_order_single_product: "Comprar este",
  cart_order_all_products: "Finalizar Tudo ({count})",
  cart_estimated_total: "Total Estimado",

  // Pedidos Enviados
  cart_sent_at: "Enviado em",
  cart_move_back_to_cart: "Mover de volta ao carrinho",
  cart_resend_whatsapp: "Reenviar no WhatsApp",

  // Mensagem Formatada do WhatsApp
  cart_order_header: "🛍️ *Novo Pedido*",
  cart_order_qty: "Qtd",
  cart_order_variation: "Variação",
  cart_order_observation: "Obs",
  cart_order_image: "Foto",
  cart_order_total_items: "Itens Totais",
  cart_order_total_price: "TOTAL DO PEDIDO",
  cart_order_greeting: "Olá! Gostaria de confirmar a disponibilidade e os detalhes de pagamento/entrega deste pedido.",

  // Modal de Confirmação
  confirm_action_title: "Tens a certeza?",
  confirm_delete_item_desc: "Desejas remover este produto do teu carrinho?",
  confirm_delete_variation_desc: "Desejas remover esta variação do teu carrinho?",
  confirm_delete_group_desc: "Desejas remover este produto e todas as suas variações?",
  confirm_clear_cart_desc: "Isto irá remover todos os artigos do teu carrinho. Desejas continuar?",
  confirm_clear_history_desc: "Isto irá apagar todo o histórico de pedidos enviados. Desejas continuar?",
  confirm_delete_button: "Remover",
  confirm_clear_button: "Limpar",
  cancel_button: "Cancelar",










  dock_cart_button: "Carrinho",
  dock_search_button: "Pesquisar",
  dock_expand_all: "Expandir Tudo",
  dock_cart_tab: "Carrinho",
  dock_search_tab: "Buscar",
  dock_minimize: "Minimizar",
  dock_maximize: "Maximizar",
  dock_close: "Fechar",

  cart_observation_prefix: "Obs:",
  cart_sent_history_retention_notice: "Os pedidos confirmados são guardados durante 30 dias.",
  
  cart_default_store: "Loja",
  cart_whatsapp_order_header: "NOVO PEDIDO",
  cart_whatsapp_variation_label: "Variação",
  cart_whatsapp_qty_label: "Qtd",
  cart_whatsapp_obs_label: "Obs",
  cart_whatsapp_photo_label: "Foto",
  cart_whatsapp_total_items_label: "Total de Itens",
  cart_whatsapp_total_payable_label: "TOTAL A PAGAR",
  cart_whatsapp_closing_greeting: "Olá! Gostaria de confirmar a disponibilidade e o envio deste pedido.",
  cart_share_order_title: "Pedido - {store}",








  common_back: "Voltar",
  common_order: "Finalizar",
  checkout_bar: "Barra de finalização",

  dock_more_products: "Ver Mais", 
  
  cart_viewing_now:"A ver agora",
  
}












} as const;

export type Language = 'en' | 'pt';
export type TranslationKeys = keyof typeof translations['en'];