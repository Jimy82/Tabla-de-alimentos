const foods = [
  { tipo: 'Lacteos', nombre: 'Cuajada', hidratos: 200, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Cuajada', imagen: 'imagenes/245px-Cuajada_cropped_-_juantigues.jpg' },
  { tipo: 'Lacteos', nombre: 'Flan', hidratos: 50, glucemico: 10, url: 'https://es.wikipedia.org/wiki/Flan', imagen: 'imagenes/Crème_caramel_2.jpg' },
  { tipo: 'Lacteos', nombre: 'Helado de crema', hidratos: 50, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Helado_de_crema', imagen: 'imagenes/priscilla-du-preez-oATsyWX2hpo-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Helado de hielo', hidratos: 50, glucemico: 64, url: 'https://es.wikipedia.org/wiki/Helado', imagen: 'imagenes/220px-RaspberrySherbet.jpg' },
  { tipo: 'Lacteos', nombre: 'Helado sin azúcar', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/K%C3%A9fir', imagen: 'imagenes/images.jpeg' },
  { tipo: 'Lacteos', nombre: 'Kefir', hidratos: 200, glucemico: 35, url: 'https://es.wikipedia.org/wiki/K%C3%A9fir', imagen: 'imagenes/377px-Kefir_in_a_glass.jpeg' },
  { tipo: 'Lacteos', nombre: 'Leche desnatada', hidratos: 200, glucemico: 32, url: 'https://es.wikipedia.org/wiki/Leche_descremada', imagen: 'imagenes/nikolai-chernichenko-S1HuosAnX-Y-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Leche semidesnatada', hidratos: 200, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Flan', imagen: 'imagenes/eiliv-aceron-_8bnn1GqX70-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Leche entera', hidratos: 200, glucemico: 27, url: 'https://es.wikipedia.org/wiki/Leche', imagen: 'imagenes/Milk_glass.jpg' },
  { tipo: 'Lacteos', nombre: 'Leche condensada', hidratos: 20, glucemico: 61, url: 'https://es.wikipedia.org/wiki/Leche_condensada', imagen: 'imagenes/boston-public-library-n8bts8tWfe4-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Leche en polvo', hidratos: 25, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Leche_en_polvo', imagen: 'imagenes/howtogym-S9NchuPb79I-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Nata liquida', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Crema_de_leche', imagen: 'imagenes/Smietana.JPG' },
  { tipo: 'Lacteos', nombre: 'Natillas', hidratos: 50, glucemico: 10, url: 'https://es.wikipedia.org/wiki/Natillas', imagen: 'imagenes/karina-zhukovskaya-fzd-LSKm7Ss-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Petit suisse', hidratos: 70, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Petit-suisse', imagen: 'imagenes/320px-Petit-suisse_assiette.jpg' },
  { tipo: 'Lacteos', nombre: 'Queso fresco', hidratos: 250, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Queso_fresco', imagen: 'imagenes/Çerkes_peyniri_from_Turkey.jpg' },
  { tipo: 'Lacteos', nombre: 'Yogur natural', hidratos: 200, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Yogur', imagen: 'imagenes/sara-cervera-4caIPcmVDII-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Yogur desnatado sabores', hidratos: 125, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Yogur_colado', imagen: 'imagenes/abhishek-rai-GkqlQn7MZ88-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Yogur liquido', hidratos: 70, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Kumis', imagen: 'imagenes/dani-rendina-SH6vc3VOOwE-unsplash.jpg' },
  { tipo: 'Lacteos', nombre: 'Yogur Actimel', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Actimel', imagen: 'imagenes/320px-Actimel.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz cocido', hidratos: 38, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Arroz', imagen: 'imagenes/faris-mohammed-f9my1cgdwu4-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz integral cocido', hidratos: 40, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Arroz_integral', imagen: 'imagenes/Brown_rice.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz hinchado', hidratos: 12, glucemico: 85, url: 'https://es.wikipedia.org/wiki/Arroz_inflado', imagen: 'imagenes/Puffed_Rice.JPG' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Avena cocida', hidratos: 34, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Avena', imagen: 'imagenes/Avena-sativa.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Avena copos', hidratos: 15, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Copos_de_avena', imagen: 'imagenes/lukasz-rawa-HB_MVtHVMLc-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Boniato', hidratos: 50, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Ipomoea_batatas', imagen: 'imagenes/nguyen-dang-hoang-nhu-aQn3k4tZ12A-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cebada cocida', hidratos: 42, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Hordeum_vulgare', imagen: 'imagenes/gaelle-marcel-jk_37n_UdvM-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cereales desayuno', hidratos: 15, glucemico: 77, url: 'https://es.wikipedia.org/wiki/Cereal_para_desayuno', imagen: 'imagenes/calum-lewis-KMx5YilipX0-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cereales All-bram', hidratos: 20, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Cereal_para_desayuno', imagen: 'imagenes/nyana-stoica-EV6C1LjH1Lk-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cuscus cocido', hidratos: 65, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Cusc%C3%BAs', imagen: 'imagenes/Moroccan_cuscus,_from_Casablanca,_September_2018.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Fideo de arroz', hidratos: 50, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Fideo_de_arroz', imagen: 'imagenes/Rice_vermicelli.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Fideos de soja', hidratos: 40, glucemico: 10, url: 'https://es.wikipedia.org/wiki/Fideo_celof%C3%A1n', imagen: 'imagenes/280px-Dongfen.jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Digestiva', hidratos: 16, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Galleta_digestiva', imagen: 'imagenes/Digestive_biscuits.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Maria', hidratos: 15, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Galleta_mar%C3%ADa', imagen: 'imagenes/Galleta_María.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Principe', hidratos: 14, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Galleta_rellena', imagen: 'imagenes/Stack_of_sandwich_cookies_2.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta sin azúcar', hidratos: 18, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Galletas_Gull%C3%B3n', imagen: 'imagenes/descarga.jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Garbanzo cocido', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Cicer_arietinum', imagen: 'imagenes/Guiso_de_garbanzos.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Guisantes', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Pisum_sativum', imagen: 'imagenes/220px-Guis-fruto-1.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina', hidratos: 15, glucemico: 78, url: 'https://es.wikipedia.org/wiki/Harina_de_trigo', imagen: 'imagenes/250px-Wheat_flour.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina de centeno', hidratos: 17, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Secale_cereale', imagen: 'imagenes/Secale_cereale_MHNT.BOT.2015.2.40.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina de soja', hidratos: 70, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Harina_de_soja', imagen: 'imagenes/descarga (1).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Hojaldre horneado', hidratos: 24, glucemico: 10, url: 'https://es.wikipedia.org/wiki/Hojaldre', imagen: 'imagenes/descarga (2).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Judias blancas', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Phaseolus_vulgaris', imagen: 'imagenes/christina-rumpf-qjh-BCHbHis-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Lentejas', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Lens_culinaris', imagen: 'imagenes/frederic-dupont-KoiRJFKYqR4-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Maiz en lata', hidratos: 50, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Zea_mays', imagen: 'imagenes/engin-akyurt-Q9eGEt8Dk2Y-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Muesli', hidratos: 15, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Muesli', imagen: 'imagenes/micheile-henderson-OwvydDkjynM-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan blanco', hidratos: 20, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Pan_blanco', imagen: 'imagenes/220px-White_bread_800.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de centeno', hidratos: 20, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Pan_de_centeno', imagen: 'imagenes/300px-Mischbrot-1.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de molde', hidratos: 20, glucemico: 85, url: 'https://es.wikipedia.org/wiki/Pan_de_molde', imagen: 'imagenes/descarga (3).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de hamburguesa', hidratos: 18, glucemico: 85, url: 'https://cuk-it.com/recetas/pan-de-hamburguesa/', imagen: 'imagenes/descarga (4).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan integral', hidratos: 23, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Pan_integral', imagen: 'imagenes/koa-link-U2_V1Ylkcro-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan rallado', hidratos: 15, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Pan_rallado', imagen: 'imagenes/250px-Semmelmehl.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan tostado', hidratos: 15, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Biscote', imagen: 'imagenes/220px-Zwieback-1.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan bastoncitos', hidratos: 15, glucemico: 70, url: 'https://www.recetasdesbieta.com/grissini-palitos-de-pan-para-aperitivos-y-picoteo/', imagen: 'imagenes/descarga (5).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pasta', hidratos: 50, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Pasta', imagen: 'imagenes/Fusilli.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata cocida', hidratos: 50, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Solanum_tuberosum', imagen: 'imagenes/descarga (6).jpeg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata horno', hidratos: 35, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Solanum_tuberosum', imagen: 'imagenes/henry-perks-nKjo8bOd6Es-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata frita', hidratos: 30, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Papas_fritas', imagen: 'imagenes/Patatas_fritas_con_salsa_valenciana_de_ajo_y_perejil.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patatas chips', hidratos: 20, glucemico: 95, url: 'https://es.wikipedia.org/wiki/Papas_fritas_inglesas', imagen: 'imagenes/251px-Kartoffelchips-1.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pure de patatas', hidratos: 80, glucemico: 90, url: 'https://es.wikipedia.org/wiki/Pur%C3%A9_de_papas', imagen: 'imagenes/thembi-johnson-rDTTH5vDTOA-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Quinoa', hidratos: 48, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Chenopodium_quinoa', imagen: 'imagenes/220px-Sopa_de_Quinoa.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Semola de trigo', hidratos: 90, glucemico: 67, url: 'https://es.wikipedia.org/wiki/S%C3%A9mola', imagen: 'imagenes/220px-Sa_semolina_far.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Soja hervida', hidratos: 100, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Glycine_max', imagen: 'imagenes/Soybean_Oil,_Meal_and_Beans_(10059732523).jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Sushi', hidratos: 45, glucemico: 42, url: 'https://es.wikipedia.org/wiki/Sushi', imagen: 'imagenes/tamas-pap-68Vb4Mj-L9c-unsplash.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Tapioca', hidratos: 33, glucemico: 84, url: 'https://es.wikipedia.org/wiki/Tapioca', imagen: 'imagenes/Dadinhos_de_tapioca_com_geleia_de_pimenta.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Trigo sarraceno', hidratos: 42, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Fagopyrum_esculentum', imagen: 'imagenes/Fagopyrum_гречка.jpg' },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Yuca', hidratos: 33, glucemico: 55, url: 'https://es.wikipedia.org/wiki/Manihot_esculenta', imagen: 'imagenes/Manihot_esculenta_dsc07325.jpg' },
  { tipo: 'Frutas', nombre: 'Albaricoque', hidratos: 150, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Albaricoque', imagen: 'imagenes/Apricot_and_cross_section.jpg' },
  { tipo: 'Frutas', nombre: 'Arandano', hidratos: 100, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Vaccinium_corymbosum', imagen: 'imagenes/250px-Blueberries.jpg' },
  { tipo: 'Frutas', nombre: 'Castana cruda', hidratos: 30, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Casta%C3%B1a', imagen: 'imagenes/C._sat-nux-1.jpg' },
  { tipo: 'Frutas', nombre: 'Castana tostada', hidratos: 25, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Casta%C3%B1a', imagen: 'imagenes/descarga (7).jpeg' },
  { tipo: 'Frutas', nombre: 'Cereza', hidratos: 100, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Cereza', imagen: 'imagenes/Cherry_season_(48216568192).jpg' },
  { tipo: 'Frutas', nombre: 'Chirimoya', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Annona_cherimola', imagen: 'imagenes/descarga (8).jpeg' },
  { tipo: 'Frutas', nombre: 'Ciruela', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Ciruela', imagen: 'imagenes/Quelques_mirabelles_-_20050831.jpeg.jpeg' },
  { tipo: 'Frutas', nombre: 'Coco fresco', hidratos: 200, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Coco', imagen: 'imagenes/Coconuts_-_single_and_cracked_open.jpg' },
  { tipo: 'Frutas', nombre: 'Datil', hidratos: 15, glucemico: 70, url: 'https://es.wikipedia.org/wiki/D%C3%A1til', imagen: 'imagenes/descarga (9).jpeg' },
  { tipo: 'Frutas', nombre: 'Frambuesa', hidratos: 150, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Rubus_idaeus', imagen: 'imagenes/Raspberry_-_whole_(Rubus_idaeus).jpg' },
  { tipo: 'Frutas', nombre: 'Fresones', hidratos: 200, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Fragaria', imagen: 'imagenes/272px-Erdbeere_(27009450954).jpg' },
  { tipo: 'Frutas', nombre: 'Granada', hidratos: 70, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Punica_granatum', imagen: 'imagenes/Pomegranate03_edit.jpg' },
  { tipo: 'Frutas', nombre: 'Grosella', hidratos: 200, glucemico: 25, url: 'https://es.wikipedia.org/wiki/D%C3%A1til', imagen: 'imagenes/Redcurrant_(Ribes_rubrum)_fruits.jpg' },
  { tipo: 'Frutas', nombre: 'Grosella negra', hidratos: 140, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Ribes_nigrum', imagen: 'imagenes/220px-Blackcurrants.jpg' },
  { tipo: 'Frutas', nombre: 'Higos', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Higo', imagen: 'imagenes/tijana-drndarski-aqdC12GKPUU-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Kiwi', hidratos: 100, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Kiwi', imagen: 'imagenes/220px-Hardy-Kiwi-Comparison-3.jpg' },
  { tipo: 'Frutas', nombre: 'Litchi', hidratos: 70, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Litchi', imagen: 'imagenes/isaac-n-c-BTX7z4dENKI-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Mandarina', hidratos: 100, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Mandarina', imagen: 'imagenes/Mandarins_-_whole_and_halved.jpg' },
  { tipo: 'Frutas', nombre: 'Mango', hidratos: 100, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Mango_(fruta)', imagen: 'imagenes/Mangos_-_single_and_halved.jpg' },
  { tipo: 'Frutas', nombre: 'Manzana', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Manzana', imagen: 'imagenes/amit-lahav-rxN2MRdFJVg-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Manazana asada', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Manzana', imagen: 'imagenes/elena-leya-O_HpnSAdnnM-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Melocoton', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Prunus_persica#Fruto', imagen: 'imagenes/vlad-deep-dAjYxJrcdd8-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Melocoton conserva', hidratos: 50, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Melocot%C3%B3n_en_alm%C3%ADbar', imagen: 'imagenes/elena-leya-SCcHQRI773s-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Melon', hidratos: 200, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Cucumis_melo', imagen: 'imagenes/251px-Piel_De_Sapo_Melon.jpg' },
  { tipo: 'Frutas', nombre: 'Membrillo', hidratos: 150, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Cydonia_oblonga', imagen: 'imagenes/220px-Cydonia.jpg' },
  { tipo: 'Frutas', nombre: 'Membrillo dulce de', hidratos: 20, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Dulce_de_membrillo', imagen: 'imagenes/220px-Dulce_de_membrillo.jpg' },
  { tipo: 'Frutas', nombre: 'Moras', hidratos: 150, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Mora_(fruta)', imagen: 'imagenes/220px-Black_Butte_blackberry.jpg' },
  { tipo: 'Frutas', nombre: 'Naranja', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Naranja_(fruta)', imagen: 'imagenes/Oranges_-_whole-halved-segment.jpg' },
  { tipo: 'Frutas', nombre: 'Nectarina', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Prunus_persica', imagen: 'imagenes/patrick-fore-Hv1PMQpe3fs-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Nispero', hidratos: 100, glucemico: 55, url: 'https://es.wikipedia.org/wiki/Mespilus_germanica', imagen: 'imagenes/220px-Mispel.jpg' },
  { tipo: 'Frutas', nombre: 'Pera', hidratos: 100, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Pera', imagen: 'imagenes/Pyrus_-_Clapps_Liebling.JPG' },
  { tipo: 'Frutas', nombre: 'Papaya', hidratos: 125, glucemico: 55, url: 'https://es.wikipedia.org/wiki/Carica_papaya', imagen: 'imagenes/Papaya_-_longitudinal_section.jpg' },
  { tipo: 'Frutas', nombre: 'Paraguayo', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Prunus_persica_var._platycarpa', imagen: 'imagenes/Prunus_Persica_var._Platycarpa_I.JPG' },
  { tipo: 'Frutas', nombre: 'Piña', hidratos: 100, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Ananas_comosus', imagen: 'imagenes/220px-Pineapple_victoria_dsc07770.jpg' },
  { tipo: 'Frutas', nombre: 'Platano', hidratos: 50, glucemico: 50, url: 'https://es.wikipedia.org/wiki/Banana', imagen: 'imagenes/Bananas.jpg' },
  { tipo: 'Frutas', nombre: 'Sandia', hidratos: 200, glucemico: 75, url: 'https://es.wikipedia.org/wiki/Citrullus_lanatus', imagen: 'imagenes/art-rachen-izi5AnlbRIA-unsplash.jpg' },
  { tipo: 'Frutas', nombre: 'Uva', hidratos: 50, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Uva', imagen: 'imagenes/Grapes,_Rostov-on-Don,_Russia.jpg' },
  { tipo: 'Hortalizas', nombre: 'Acelga', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Beta_vulgaris_var._cicla', imagen: 'imagenes/Swiss_Chard.jpg' },
  { tipo: 'Hortalizas', nombre: 'Ajo', hidratos: 40, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Allium_sativum', imagen: 'imagenes/220px-POL_czosnek_333.jpeg' },
  { tipo: 'Hortalizas', nombre: 'Alcachofa', hidratos: 300, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Cynara_scolymus', imagen: 'imagenes/Artichoke71.jpg' },
  { tipo: 'Hortalizas', nombre: 'Apio', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Apium_graveolens', imagen: 'imagenes/220px-Celery.jpg' },
  { tipo: 'Hortalizas', nombre: 'Berenjena', hidratos: 300, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Solanum_melongena', imagen: 'imagenes/Aubergine.jpg' },
  { tipo: 'Hortalizas', nombre: 'Brocoli', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Brassica_oleracea_var._italica', imagen: 'imagenes/Broccoli_bunches.jpg' },
  { tipo: 'Hortalizas', nombre: 'Calabacin', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Cucurbita_pepo', imagen: 'imagenes/Calabacín,_Múnich,_Alemania,_2013-03-30,_DD_01.JPG' },
  { tipo: 'Hortalizas', nombre: 'Cebolla', hidratos: 150, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Allium_cepa', imagen: 'imagenes/250px-Two_colors_of_onions.jpg' },
  { tipo: 'Hortalizas', nombre: 'Coliflor', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Brassica_oleracea_var._botrytis_(coliflor)', imagen: 'imagenes/220px-Coliflores_blancas_de_la_huerta_de_Valencia.jpg' },
  { tipo: 'Hortalizas', nombre: 'Endibia', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Cichorium_endivia', imagen: 'imagenes/Endive_p1160063.jpg' },
  { tipo: 'Hortalizas', nombre: 'Judia verde', hidratos: 250, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Ejote', imagen: 'imagenes/descarga (10).jpeg' },
  { tipo: 'Hortalizas', nombre: 'Lechuga', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Lactuca_sativa', imagen: 'imagenes/Romaine_lettuce.jpg' },
  { tipo: 'Hortalizas', nombre: 'Nabo', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Brassica_rapa_subsp._rapa', imagen: 'imagenes/Turnip_2622027.jpg' },
  { tipo: 'Hortalizas', nombre: 'Palmitos', hidratos: 200, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Palmito_(gastronom%C3%ADa)', imagen: 'imagenes/descarga (11).jpeg' },
  { tipo: 'Hortalizas', nombre: 'Pepino', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Cucumis_sativus', imagen: 'imagenes/mockup-graphics-UrLT3x0x9sA-unsplash.jpg' },
  { tipo: 'Hortalizas', nombre: 'Pimiento', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Capsicum', imagen: 'imagenes/Pimientos_verdes.jpg' },
  { tipo: 'Hortalizas', nombre: 'Puerro', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Allium_ampeloprasum_var._porrum', imagen: 'imagenes/christopher-previte-7CcXR5wIhEY-unsplash.jpg' },
  { tipo: 'Hortalizas', nombre: 'Rabano', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Raphanus_sativus', imagen: 'imagenes/Raphanus_sativus_subsp._sativus,_radijs_(1).jpg' },
  { tipo: 'Hortalizas', nombre: 'Remolacha', hidratos: 150, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Beta_vulgaris', imagen: 'imagenes/220px-Uncommon_beetroot_colours.jpg' },
  { tipo: 'Hortalizas', nombre: 'Repollo', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Brassica_oleracea_var._capitata', imagen: 'imagenes/Col_repollo.jpg' },
  { tipo: 'Hortalizas', nombre: 'Setas', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Seta', imagen: 'imagenes/ashleigh-shea-otVUcXqwqGM-unsplash.jpg' },
  { tipo: 'Hortalizas', nombre: 'Tomate', hidratos: 300, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Tomate', imagen: 'imagenes/Bright_red_tomato_and_cross_section02.jpg' },
  { tipo: 'Hortalizas', nombre: 'Zanahoria', hidratos: 150, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Daucus_carota', imagen: 'imagenes/rodrigo-dos-reis-ZgDHMMd72I8-unsplash.jpg' },
  { tipo: 'Hortalizas', nombre: 'Zanahoria hervida', hidratos: 200, glucemico: 85, url: 'https://es.wikipedia.org/wiki/Daucus_carota', imagen: 'imagenes/descarga (12).jpeg' },
  { tipo: 'Frutos secos', nombre: 'Aceituna', hidratos: 250, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Aceituna', imagen: 'imagenes/antonio-molin-4C25CSqK2PI-unsplash.jpg' },
  { tipo: 'Frutos secos', nombre: 'Albaricoque seco', hidratos: 15, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Albaricoque_seco', imagen: 'imagenes/YosriApricotKering.jpg' },
  { tipo: 'Frutos secos', nombre: 'Almendra', hidratos: 150, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Almendra', imagen: 'imagenes/Almendras_fritas.jpg' },
  { tipo: 'Frutos secos', nombre: 'Avellana', hidratos: 150, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Avellana', imagen: 'imagenes/Hazelnuts_(Corylus_avellana).jpg' },
  { tipo: 'Frutos secos', nombre: 'Cacahuete', hidratos: 100, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Arachis_hypogaea', imagen: 'imagenes/Peanuts_(Arachis_hypogaea)_-_in_shell,_shell_cracked_open,_shelled,_peeled.jpg' },
  { tipo: 'Frutos secos', nombre: 'Ciruela pasa', hidratos: 150, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Ciruela_pasa', imagen: 'imagenes/Prune.JPG' },
  { tipo: 'Frutos secos', nombre: 'Datil seco', hidratos: 15, glucemico: 70, url: 'https://es.wikipedia.org/wiki/D%C3%A1til', imagen: 'imagenes/vd-photography-_fc9yOAZa3Y-unsplash.jpg' },
  { tipo: 'Frutos secos', nombre: 'Higo seco', hidratos: 15, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Higo#El_higo_seco', imagen: 'imagenes/tom-hermans-E1AAFoR0C80-unsplash.jpg' },
  { tipo: 'Frutos secos', nombre: 'Nuez', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Nuez', imagen: 'imagenes/Walnuts_-_whole_and_open_with_halved_kernel.jpg' },
  { tipo: 'Frutos secos', nombre: 'Piñon', hidratos: 300, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Pi%C3%B1%C3%B3n', imagen: 'imagenes/blackieshoot-iOTYjcl6myQ-unsplash.jpg' },
  { tipo: 'Frutos secos', nombre: 'Pipas', hidratos: 80, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Semilla_de_girasol', imagen: 'imagenes/lukasz-rawa-NDro8tjU4e0-unsplash.jpg' },
  { tipo: 'Frutos secos', nombre: 'Pistacho', hidratos: 80, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Pistacia_vera', imagen: 'imagenes/Almendras_fritas.jpg' },
  { tipo: 'Frutos secos', nombre: 'Sesamo', hidratos: 100, glucemico: 35, url: 'https://es.wikipedia.org/wiki/Sesamum_indicum', imagen: 'imagenes/251px-Sa_white_sesame_seeds.jpg' },
  { tipo: 'Frutos secos', nombre: 'Uva pasa', hidratos: 15, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Pasa', imagen: 'imagenes/200px-Pasas.jpeg' },
  { tipo: 'Bebidas', nombre: 'Bebida isotonica', hidratos: 130, glucemico: 78, url: 'https://es.wikipedia.org/wiki/Bebida_isot%C3%B3nica', imagen: 'imagenes/descarga (13).jpeg' },
  { tipo: 'Bebidas', nombre: 'Refresco', hidratos: 100, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Gaseosa', imagen: 'imagenes/Soft_drink_shelf_2.jpg' },
  { tipo: 'Bebidas', nombre: 'Bebida de cacao', hidratos: 100, glucemico: 34, url: 'https://es.wikipedia.org/wiki/Leche_chocolatada', imagen: 'imagenes/Chocolate_milk.JPG' },
  { tipo: 'Bebidas', nombre: 'Bebida de soja', hidratos: 250, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Leche_de_soja', imagen: 'imagenes/images (1).jpeg' },
  { tipo: 'Bebidas', nombre: 'Bebida energetica', hidratos: 80, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Bebida_energizante', imagen: 'imagenes/jorge-franganillo-uTBMw32LIOI-unsplash.jpg' },
  { tipo: 'Bebidas', nombre: 'Bitter', hidratos: 100, glucemico: 70, url: 'https://www.dispedisa.com/productos/refrescos/bitter-kas/', imagen: 'imagenes/descarga (14).jpeg' },
  { tipo: 'Bebidas', nombre: 'Cava seco', hidratos: 250, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Cava', imagen: 'imagenes/descarga (15).jpeg' },
  { tipo: 'Bebidas', nombre: 'Cerveza', hidratos: 250, glucemico: 110, url: 'https://es.wikipedia.org/wiki/Cerveza', imagen: 'imagenes/150px-Helles_im_Glas-Helles_(pale_beer).jpg' },
  { tipo: 'Bebidas', nombre: 'Horchata', hidratos: 75, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Horchata_de_chufa', imagen: 'imagenes/Quart_de_Poblet_-_Centre_Cultural_El_Casino_05.jpg' },
  { tipo: 'Bebidas', nombre: 'Licor de Manzana', hidratos: 30, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Licor', imagen: 'imagenes/Liqueurs_françaises.JPG' },
  { tipo: 'Bebidas', nombre: 'Mosto', hidratos: 70, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Mosto', imagen: 'imagenes/220px-Mosto-DSC01551.jpeg' },
  { tipo: 'Bebidas', nombre: 'Sangria', hidratos: 100, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Sangr%C3%ADa_(bebida)', imagen: 'imagenes/Red_Wine_Sangria_with_lemon,_lime,_apple,_and_orange_served_in_a_glass_-_Evan_Swigart.jpg' },
  { tipo: 'Bebidas', nombre: 'Sidra', hidratos: 200, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Sidra', imagen: 'imagenes/220px-Apfelwein_Geripptes_Bembel.jpg' },
  { tipo: 'Bebidas', nombre: 'Tonica', hidratos: 100, glucemico: 70, url: 'https://es.wikipedia.org/wiki/T%C3%B3nica_(bebida)', imagen: 'imagenes/247px-Tónica_Schweppes.jpg' },
  { tipo: 'Bebidas', nombre: 'Vermut', hidratos: 75, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Verm%C3%BA', imagen: 'imagenes/Vermut-2009.jpg' },
  { tipo: 'Bebidas', nombre: 'Vino dulce', hidratos: 75, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Vinos_de_postre', imagen: 'imagenes/Vin_Santo.JPG' },
  { tipo: 'Bebidas', nombre: 'Zumo comercial', hidratos: 100, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Jugo_de_frutas', imagen: 'imagenes/Orange_juice_1.jpg' },
  { tipo: 'Otros', nombre: 'Azucar blanco', hidratos: 10, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Az%C3%BAcar_blanco', imagen: 'imagenes/220px-A_Bowl_of_Sugar_2.jpg' },
  { tipo: 'Otros', nombre: 'Azucar moreno', hidratos: 10, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Az%C3%BAcar_moreno', imagen: 'imagenes/220px-Brown_sugar_examples.jpeg' },
  { tipo: 'Otros', nombre: 'Barrita energetica', hidratos: 20, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Barrita_energ%C3%A9tica', imagen: 'imagenes/towfiqu-barbhuiya-Y-VDI9vQS3M-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Bizcocho', hidratos: 20, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Bizcocho', imagen: 'imagenes/Bizcocho-San_Isidro_(Madrid).JPG' },
  { tipo: 'Otros', nombre: 'Bolleria', hidratos: 20, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Bollo', imagen: 'imagenes/kirsten-drew-n49BjsFf5dI-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Cruasan', hidratos: 20, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Cruas%C3%A1n', imagen: 'imagenes/jocelyn-morales-qqIj5pV48-s-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Cacao en polvo', hidratos: 12, glucemico: 25, url: 'https://es.wikipedia.org/wiki/Cacao_en_polvo', imagen: 'imagenes/Cocoa_powder.jpg' },
  { tipo: 'Otros', nombre: 'Calamares a la romana', hidratos: 120, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Calamares_fritos', imagen: 'imagenes/Calamares_Romana_0984.jpg' },
  { tipo: 'Otros', nombre: 'Canelones con bechamel', hidratos: 100, glucemico: 15, url: 'https://es.wikipedia.org/wiki/Canelones_(comida)', imagen: 'imagenes/descarga (16).jpeg' },
  { tipo: 'Otros', nombre: 'Caramelo', hidratos: 12, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Caramelo', imagen: 'imagenes/245px-Caramel-2.jpg' },
  { tipo: 'Otros', nombre: 'Chocolate', hidratos: 17, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Chocolate_con_leche', imagen: 'imagenes/Schokolade-braun.jpg' },
  { tipo: 'Otros', nombre: 'Chocolate negro', hidratos: 25, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Chocolate_amargo', imagen: 'imagenes/tetiana-bykovets-YemxYB75xvI-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Churros', hidratos: 25, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Churro', imagen: 'imagenes/Churros-Madrid-2009.jpg' },
  { tipo: 'Otros', nombre: 'Crema de cacao', hidratos: 25, glucemico: 55, url: 'https://es.wikipedia.org/wiki/Crema_de_chocolate', imagen: 'imagenes/irene-kredenets-ZToCBpyv3aA-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Crema de cacahuetes', hidratos: 100, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Mantequilla_de_cacahuete', imagen: 'imagenes/250px-PeanutButter.jpg' },
  { tipo: 'Otros', nombre: 'Croquetas', hidratos: 50, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Croqueta', imagen: 'imagenes/300px-Croquetas_Caseras_(7068664101).jpg' },
  { tipo: 'Otros', nombre: 'Donut', hidratos: 23, glucemico: 75, url: 'https://es.wikipedia.org/wiki/Dona_(comida)', imagen: 'imagenes/Voodoo_Doughnut_Documentary_Project.jpg' },
  { tipo: 'Otros', nombre: 'Empanadilla de carne', hidratos: 50, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Empanadilla', imagen: 'imagenes/Empanadillas.jpg' },
  { tipo: 'Otros', nombre: 'Edulcorante', hidratos: 10, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Edulcorante', imagen: 'imagenes/towfiqu-barbhuiya-N2n01mhpbmg-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Gazpacho', hidratos: 150, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Gazpacho', imagen: 'imagenes/Gazpacho_Cazuela_Barro.jpg' },
  { tipo: 'Otros', nombre: 'Gelatina', hidratos: 62, glucemico: 30, url: 'https://es.wikipedia.org/wiki/Gelatina', imagen: 'imagenes/jose-g-ortega-castro-8fEbc4nw24E-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Glucosa', hidratos: 10, glucemico: 100, url: 'https://es.wikipedia.org/wiki/Glucosa', imagen: 'imagenes/descarga (17).jpeg' },
  { tipo: 'Otros', nombre: 'Golosinas', hidratos: 18, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Golosina', imagen: 'imagenes/Fale_-_Barcellona_-_194.jpg' },
  { tipo: 'Otros', nombre: 'Ketchup', hidratos: 50, glucemico: 55, url: 'https://es.wikipedia.org/wiki/K%C3%A9tchup', imagen: 'imagenes/Ketchup_20160918_181342_(cropped).jpg' },
  { tipo: 'Otros', nombre: 'Lasaña', hidratos: 100, glucemico: 40, url: 'https://es.wikipedia.org/wiki/Lasa%C3%B1a', imagen: 'imagenes/Lasagna_bolognese.jpg' },
  { tipo: 'Otros', nombre: 'Magdalena', hidratos: 25, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Magdalena_(alimento)', imagen: 'imagenes/descarga (18).jpeg' },
  { tipo: 'Otros', nombre: 'Mazapan', hidratos: 25, glucemico: 60, url: 'https://es.wikipedia.org/wiki/Mazap%C3%A1n', imagen: 'imagenes/descarga (19).jpeg' },
  { tipo: 'Otros', nombre: 'Mermelada', hidratos: 20, glucemico: 65, url: 'https://es.wikipedia.org/wiki/Mermelada', imagen: 'imagenes/220px-Sevilleorangemarmalade.jpg' },
  { tipo: 'Otros', nombre: 'Miel', hidratos: 13, glucemico: 85, url: 'https://es.wikipedia.org/wiki/Miel', imagen: 'imagenes/benyamin-bohlouli-Rcj302Npzis-unsplash.jpg' },
  { tipo: 'Otros', nombre: 'Palomitas', hidratos: 20, glucemico: 85, url: 'https://es.wikipedia.org/wiki/Palomitas_de_ma%C3%ADz', imagen: 'imagenes/Patlamış_mısır.JPG' },
  { tipo: 'Otros', nombre: 'Pizza', hidratos: 40, glucemico: 45, url: 'https://es.wikipedia.org/wiki/Pizza', imagen: 'imagenes/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg' },
  { tipo: 'Otros', nombre: 'Surimi', hidratos: 100, glucemico: 20, url: 'https://es.wikipedia.org/wiki/Surimi', imagen: 'imagenes/descarga (20).jpeg' },
  { tipo: 'Otros', nombre: 'Tortilla de patata', hidratos: 17, glucemico: 70, url: 'https://es.wikipedia.org/wiki/Tortilla_de_patatas', imagen: 'imagenes/Tortilla_de_patatas.jpg' },

  // Agrega más alimentos aquí...
];

const table = document.getElementById('food-table');
const searchInput = document.getElementById('search-input');
const gramsInput = document.getElementById('grams-input');
const resultContainer = document.getElementById('result-container');

function createTableRow(food) {
  const row = document.createElement('tr');

  const tipoCell = document.createElement('td');
  tipoCell.textContent = food.tipo;
  row.appendChild(tipoCell);

  const nombreCell = document.createElement('td');
  nombreCell.textContent = food.nombre;
  row.appendChild(nombreCell);

  const hidratosCell = document.createElement('td');
  hidratosCell.textContent = food.hidratos;
  row.appendChild(hidratosCell);

  const glucemicoCell = document.createElement('td');
  glucemicoCell.textContent = food.glucemico.toString();
  row.appendChild(glucemicoCell);

  // Aplicar estilos según el rango del índice glucémico
  if (food.glucemico < 50) {
    glucemicoCell.style.color = 'green';
  } else if (food.glucemico >= 50 && food.glucemico <= 65) {
    glucemicoCell.style.color = 'orange';
  } else {
    glucemicoCell.style.color = 'red';
  }

  const urlCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = food.url;
  link.target = '_blank';
  link.textContent = 'Saber más';
  urlCell.appendChild(link);
  row.appendChild(urlCell);

  const imagenCell = document.createElement('td');
  const image = document.createElement('img');
  image.src = food.imagen;
  image.alt = 'Imagen ' + food.nombre;
  image.width = 100;
  image.height = 100;
  imagenCell.appendChild(image);
  row.appendChild(imagenCell);

  return row;
}

function renderTable(foodsToShow) {
  table.innerHTML = ''; // Limpiar la tabla antes de renderizar

  // Agregar la fila de nombres de columna
  const headerRow = document.createElement('tr');
  const headers = ['Tipo', 'Nombre', 'Hidratos', 'Índice Glucémico', 'URL', 'Imagen'];

  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  foodsToShow.forEach(food => {
    const row = createTableRow(food);
    table.appendChild(row);
  });
}

function filterFoods(searchTerm) {
  const filteredFoods = foods.filter(food => {
    const nombre = food.nombre.toLowerCase();
    return nombre.includes(searchTerm.toLowerCase());
  });

  renderTable(filteredFoods);
}

function calculateRations() {
  const selectedFood = foods.find(food => food.nombre.toLowerCase() === searchInput.value.toLowerCase());
  const grams = parseFloat(gramsInput.value);

  if (selectedFood && !isNaN(grams)) {
    const rations = grams / selectedFood.hidratos;
    resultContainer.textContent = `Corresponden a ${rations.toFixed(2)} raciones de hidratos.`;
  } else {
    resultContainer.textContent = 'Ingrese un alimento válido y una cantidad de gramos.';
  }
}

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value;
  filterFoods(searchTerm);
});

gramsInput.addEventListener('input', calculateRations);

// Renderizar la tabla inicialmente con todos los alimentos
renderTable(foods);
