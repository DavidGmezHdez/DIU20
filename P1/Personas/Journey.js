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
                goal1: "Quiere preparar un viaje en verano junto con su mujer",
                touch1: "teléfono",
                feel1: "4",
                con1: "ver cuantos días puede tener libres su mujer ",
                ima1: "cartoon-phoning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Habla con su compañero de trabajo para preguntarle por páginas de viajes diferentes",
                touch2: "persona",
                feel2: "3",
                con2: "hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar la pagina web de TripGiraffe que le recomendaron y publicar un viaje en Nepal con el objetivo de encontrar y con gente de su misma edad",
                touch3: "ordenador",
                feel3: "3",
                con3: "Registrarse y aprender a usar la página web",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: TRAZA ***/ 
                
                goal4: "Se pone a trazar las rutas del viaje y sitios a los que visitar junto con su mujer",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar recomendaciones de lugares de interés en páginas y decidirlo entre su mujer y el",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Hablais por skype con las personas interesadas en el viaje",
                touch5: "móvil (skype)",
                feel5: "2",
                con5: "Tiene que descartar a algunas personas ya que no casan con sus motivaciones e intereses",
                ima5: "cartoon-phoneAssistan.jpg",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra otra pareja de su misma edad y con las mismas aficiones",
                touch6: "ordenador",
                feel6: "4",
                con6: "Siente cierta incertidumbre ya que no conoce a la pareja en persona",
                ima6: "cartoon-resting.png",
                // poner que le da miedo por saber que persona son y eso, organizar viaje
                
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
                touch1: "trabajo",
                feel1: "4",
                con1: "Quiere ir a un pais rico ya que quiere todas las comodidades posible, además que quiere un compañero/a que la acompañe",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Recibe una recomendación de la empresa. Usa la aplicación recomendada",
                touch2: "Servicio (agencia)",
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
                feel4: "2",
                con4: "No le gusta ninguno ya que es muy selectiva. Cree que nunca va a encontrar un compañero ideal y se enfada",
                ima4: "cartoon-phoningangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Un compañero que cumple los requisitos se une a su viaje",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Analiza bien los rasgos de este compañero",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Decide aceptar a este usuario como compañero y procede a irse de viaje",
                touch6: "Movil (llamada)",
                feel6: "4",
                con6: "Se pondrá en contacto con él y juntos se irán de viaje.",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



