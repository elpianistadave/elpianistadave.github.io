const canvas = 
document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

// Posición inicial y radio de la bola
let x = canvas.width / 2;
let y = 30; 
let radio = 20;

let velocidadY = 0;
let gravedad = 0.1;
let coefRebote = 0.8;
let suelo = canvas.height - radio;

function dibujarBolita() {
    ctx.beginPath(); // Empezamos a dibujar
    ctx.arc(x, y, radio, 0, Math.PI * 2); // Dibujamos un círculo
    ctx.fillStyle = "green"; // Color de la bola
    ctx.fill(); // Rellenamos la bola
    ctx.closePath(); // Terminamos el dibujo
}

function actualizar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Borra el lienzo
    velocidadY += gravedad; //Aplicar gravedad
    y += velocidadY; // mover la bolita

    if (y >= suelo) {
        y = suelo; 
        velocidadY = -velocidadY * coefRebote;

    if (Math.abs(velocidadY) <0.2){
        velocidadY = 0;
    }
    } 
    dibujarBolita(); // Dibuja la bola en la nueva posición
    requestAnimationFrame(actualizar);
}

actualizar();

