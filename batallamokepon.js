let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    //.Imagenes de la mascota elegida
    let imagenHipodoge = document.createElement("img")
    imagenHipodoge.src = "./img/mokepons_mokepon_hipodoge_attack.png"
    let imagenCapipepo = document.createElement("img")
    imagenCapipepo.src = "./img/mokepons_mokepon_capipepo_attack.png"
    let imagenRatigueya = document.createElement("img")
    imagenRatigueya.src = "./img/mokepons_mokepon_ratigueya_attack.png"
    let insertarMascotaJugador = document.getElementById("insertar-mascota-jugador")


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        insertarMascotaJugador.appendChild(imagenHipodoge)
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        insertarMascotaJugador.appendChild(imagenCapipepo)
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        insertarMascotaJugador.appendChild(imagenRatigueya)
    } else {
        alert('Selecciona una mascota')
        reiniciarJuego();
    
    }
    

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let insertarMascotaEnemigo = document.getElementById("insertar-mascota-enemigo")

    let imagenHipodogeEnemigo = document.createElement("img")
    imagenHipodogeEnemigo.src = "./img/mokepons_mokepon_hipodoge_attack.png"
    let imagenCapipepoEnemigo = document.createElement("img")
    imagenCapipepoEnemigo.src = "./img/mokepons_mokepon_capipepo_attack.png"
    let imagenRatigueyaEnemigo = document.createElement("img")
    imagenRatigueyaEnemigo.src = "./img/mokepons_mokepon_ratigueya_attack.png"
   
    

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        insertarMascotaEnemigo.appendChild(imagenHipodogeEnemigo)
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        insertarMascotaEnemigo.appendChild(imagenCapipepoEnemigo)
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        insertarMascotaEnemigo.appendChild(imagenRatigueyaEnemigo)
    }
}



function ataqueFuego() {
    ataqueJugador= "🔥"
    ataqueAleatorioEnemigo()  
}

function ataqueAgua() {
    ataqueJugador= "💧"
    ataqueAleatorioEnemigo() 
}

function ataqueTierra() {
    ataqueJugador= "🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "🔥"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "💧"
    } else {
        ataqueEnemigo = "🌱"
    }

    combate()
}



function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    

    
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE 🤜🤛")

    } else if ((ataqueJugador == "🔥" && ataqueEnemigo == "🌱") || (ataqueJugador == "💧" && ataqueEnemigo == "🔥") || (ataqueJugador == "🌱" && ataqueEnemigo == "💧")) {

        crearMensaje("GANASTE 🤩🎊🤩")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo  
       
            
    } else {
        crearMensaje("PERDISTE 😭")
        
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }  

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! ... GANASTE 🎊🤩🎊")
    } else if (vidasJugador == 0){
        crearMensajeFinal("LO SIENTO, PERDISTE 😥")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)