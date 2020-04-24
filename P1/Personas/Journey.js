/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ayax García",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje en verano junto con su mujer a Nepal",
                touch1: "teléfono",
                feel1: "4",
                con1: "ver cuantos días puede tener libres su mujer y busca la pagina web recomendada por su compañero",
                ima1: "cartoon-phoning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Visita la pagina web de TripGiraffe y busca viajes a Nepal",
                touch2: "ordenador",
                feel2: "2",
                con2: "No existe ningun viaje a Nepal",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se registra en la pagina web para poder publicar su viaje a Nepal",
                touch3: "ordenador",
                feel3: "3",
                con3: "Registrarse y aprender a usar la página web",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: TRAZA ***/ 
                
                goal4: "Crea el viaje a Nepal con las rutas del viaje y sitios a los que visitar juntos",
                touch4: "ordenador",
                feel4: "2",
                con4: "Crear el viaje en la pagina web y buscar recomendaciones de lugares de interés en páginas y decidirlo entre su mujer y el",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Hablan por skype con las personas interesadas en el viaje",
                touch5: "móvil (skype)",
                feel5: "2",
                con5: "Tiene que descartar a algunas personas ya que no casan con sus motivaciones e intereses",
                ima5: "cartoon-phoneAssistan.jpg",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra otra pareja de su misma edad y con las mismas aficiones tras tener que crear desde cero el propio viaje",
                touch6: "ordenador",
                feel6: "4",
                con6: "Siente cierta incertidumbre ya que no conoce a la pareja en persona y cansancio por todo el proceso de creación de viaje",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Camb reservar, otro año se encarga otro!iar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Cayetana Jimenez Robles",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje de trabajo, pero hacer algo de turismo por el camino",
                touch1: "Trabajo",
                feel1: "4",
                con1: "Quiere un compañero/a que la acompañe. Se informa de páginas donde puede conseguir compañeros para el viaje",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Encuentra la página TripGiraffe",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Decide crearse una cuenta en la pagina web. ",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Pone un viaje en la aplicación dada",
                touch3: "Móvil (webapp)",
                feel3: "4",
                con3: "Decide esperar a que se una un compañero",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Analiza los distintos compañeros que se unen para su viaje",
                touch4: "Móvil (webapp)",
                feel4: "3",
                con4: "No le gusta ninguno ya que es muy selectiva. Cree que nunca va a encontrar un compañero ideal y se enfada",
                ima4: "cartoon-phoningangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Ningún compañero le gusta.",
                touch5: "Móvil (webapp)",
                feel5: "2",
                con5: "Se enfada con la página web por no proporcionarle los compañeros suficientes",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Se borra de la página web",
                touch6: "Movil (llamada)",
                feel6: "1",
                con6: "Decide probar suerte en otras apps especializadas",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



