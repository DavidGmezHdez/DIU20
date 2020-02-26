/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Ayax García",
				Photo: "man.png",
				Quote: "La vida imitar al arte(Oscar Wilde)",
				Age: 51,
				Occupation: "Profesor de filosofía",
				Family: "Casado",
				Location: "Granada (Albaicin)",
				Character: "Le gusta deleitarse con la lectura y el arte",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Luchar por el cambio político", "Tratar de vivir sin depender de los bienes materiales", "Conocer la forma de vivir de otras personas y su cultura", "Transmitir su pasión por la filosofía y cambiar la forma de enseñar"],
				Frustrations: ["No le gusta depender de las redes sociales", "Siente que las instituciones de enseñanza están obsoletas y capitalizadas, con un conocimiento doctrinista", "Siente que ha olvidado una de sus pasiones con la madurez: la poesía"],
				Bio: "Su infancia fué en el Albaicin y estudió la carrera de filosofía, queda con sus amigos y compañeros de trabajo para charlar sobre literatura, política y filosofía por las tardes y asisten a jam de poesía",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva unos años que siente que ha perdido su junventud, que ha perdido muchas cosas en su camino y que es demasiado tarde, desea realizar un viaje con su mujer para encontrarse a si mismo y su ilusión, así como recuperar su poesia",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Cayetana Jimenez Robles",
				Photo: "woman.png",
				Quote: "La religión es lo que mantiene a los pobres de matar a los ricos -  Napoleón Bonaparte",
				Age: 25,
				Occupation: "Jefa de departamento",
				Family: "Soltera",
				Location: "Las Rozas - Madrid",
				Character: "Le gusta tener el control de las situaciones, conocer y salir con gente que tenga sus mismos gustos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Ganar más poder de control.", "Vivir sin preocupaciones.", "Ser la dueña de una empresa.", "Conocer al amor de su vida."],
				Frustrations: ["Escuchar opiniones diferentes", "Siente que sus opiniones son cada vez menos compartidas por la gente."],
				Bio: "Nacida en Madrid en un barrio de clase alta, vivió en una vida sin muchos problemas en el seno de una familia rica y tradicional. Al haber ascendido tanto en la empresa de su padre, tiene que realizar muchos viajes por todo el mundo, casi siempre sola, ya que no soporta a la gente que le lleva la contraria.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value:  2}
					
				], 
                Contextos:   "Quiere que alguien le acompañe en sus viajes con el que poder mantener una relación de amistad, comparta sus mismas opiniones y compartir aficiones y hobbies" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
