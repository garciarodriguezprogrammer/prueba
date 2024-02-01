var encendida = false;
function encender_apagar() {
    encendida = !encendida;

    if (encendida) {
        imagen.src = "./img/on.png";
    

    }

    else {
        imagen.src = "./img/off.png";
    
    }

}

let resetBtn = document.getElementById("Reset");
let aBtn = document.getElementById("aBoton");
let bBtn = document.getElementById("bBoton");
let imagen = document.getElementById("Pantalla");


resetBtn.onclick = function () {
    if (encendida) {
        imagen.src = "./img/on.png";
    }
}

aBtn.onclick = function () {
    if (encendida) {
        imagen.src = "./img/animadaA.gif";
    }
}

bBtn.onclick = function () {
    if (encendida) {
        imagen.src = "./img/animadaB.gif";
    }
}
