let vidasEnemigo = 3
let vidasJugador = 3
let ataqueJugador
let ataqueEnemigo
let juegoTerminado = false



function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none" 
    
    let reiniciar = document.getElementById("reiniciar")
    reiniciar.addEventListener("click", reiniciarJuego)
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

   
 }

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque =document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } 
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } 
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    }
    else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
    }
    else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"

    }
     else {
        alert("Seleccioná una Mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } 
    else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } 
    else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    else if (mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
     }
    else if (mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
     }
    else {
       spanMascotaEnemigo.innerHTML = "Pydos"
    
     }

}

function ataqueFuego() {
    
    if (juegoTerminado) return

    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } 
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } 
    else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}
function combate() {
     
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE 😒")
    }
    else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "AGUA" && ataqueEnemigo== "FUEGO") {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "TIERRA" && ataqueEnemigo== "AGUA") {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje("PERDISTE 😢")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    
    }
     
    
        revisarVidas()
}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        juegoTerminado = true
        crearMensajeFinal("¡FELICITACIONES!, GANASTE 🥳")
}
    if (vidasJugador == 0) {
        juegoTerminado = true
        crearMensajeFinal("UY, PERDISTE 🤦‍♀️")
}
}
function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p") 
    parrafo.innerHTML = " Tu mascota atacó con " + ataqueJugador + " la mascota del enemigo atacó con " + ataqueEnemigo + " " + resultado

    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(GANASTE) {
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p") 
    parrafo.textContent = GANASTE
    sectionMensaje.appendChild(parrafo)
    
    desactivarBotones()
}
function desactivarBotones() {
    document.getElementById("boton-fuego").disabled = true
    document.getElementById("boton-agua").disabled = true
    document.getElementById("boton-tierra").disabled = true
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}


    

function reiniciarJuego() {
    location.reload() 
}


    

 








function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

        
    

        

    


    


    
    

 




