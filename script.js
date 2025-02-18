const canvas = 
document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");


let x = canvas.width / 2;
let y = 50; 
let radio = 40;

let velocidadY = 0;
let gravedad = 0.2;
let coefRebote = 0.9;
let suelo = canvas.height - radio;

function dibujarBolita() {
    ctx.beginPath(); 
    ctx.arc(x, y, radio, 0, Math.PI * 2); 
    ctx.fillStyle = "yellow"; 
    ctx.fill(); 
    ctx.closePath(); 
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
    dibujarBolita(); 
    requestAnimationFrame(actualizar);
}

actualizar();

