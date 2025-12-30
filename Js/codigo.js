
           
                let jugador = 0                   //ESTAS SON VARIABLES QUE SE GUARDAN VALORES//
                let pc = 0
                let triunfos = 0
                let perdidas = 0

                function aleatorio (min,max){     //ESTA FUNCION GENERA NUMEROS ALEATORIOS//
                return Math.floor (Math.random() * (max - min + 1) + min)
                }

            
                function eleccion(jugada) {       //ESTA FUNCION GENERA MI ELECCION//
                let resultado = "";
         
                if (jugada == 1) {
                resultado = " Piedra 🥌"
                }
                else if (jugada == 2) {
                resultado = " Papel 📝"
                }
                else if (jugada == 3) {
                resultado = " Tijera ✂️"
                }
                else {
                resultado = "Elección inválida"
                }
         
                return resultado;
                }                                 //EL RETURN VUELVE AL INICIO DE LA FUNCION//
         
                                                  //CON ESTA FUNCION YA COMIENZA EL JUEGO//
                while (triunfos < 3 && perdidas < 3) {             //ESTO DE LLAMA CICLO//
                 
                pc = aleatorio(1, 3);            
                jugador = prompt ("elige: 1 piedra, 2 papel, 3 tijera")
        
                alert("Tu eliges:" + eleccion(jugador));
                alert("Pc elige:" + eleccion(pc));

                if (jugador == pc) { //EN ESTO SE BASA LAS PERDIDAS Y TRIUNFOS, SON EN BASE AL JUGADOR//
                alert("EMPATE 😒")
                }
                else if (jugador == 1 && pc == 3) {
                alert("GANASTE 🎉")
                triunfos = triunfos + 1
                }
                else if (jugador == 2 && pc == 2) {
                alert("EMPATE 😒")
                }
                else if (jugador == 2 && pc == 1) {
                alert("GANASTE 🎉")
                triunfos = triunfos + 1
                }
                else if (jugador == 3 && pc == 2) {
                alert("GANASTE 🎉")
                triunfos = triunfos + 1 
                //ACA LE ESTOY DICIENDO QUE A LA VARIABLE TRIUNFOS LE SUME 1 CADA VEZ QUE GANE//
                }
                else {
                alert("PERDISTE 😢")
                perdidas = perdidas + 1
                //ACA LE ESTOY DICIENDO QUE A LA VARIABLE PERDIDAS LE SUME 1 CADA VEZ QUE PIERDA//
                }
                } 
                
                 alert  (" Ganaste " + triunfos +  " veces  . Perdiste " + perdidas + " veces ")
             
                    //ESTO INDICA QUE FINALIZO EL JUEGO Y ES EL RESULTADO FINAL//
                
        
   