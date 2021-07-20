
// variaveis

let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];  // a cobrinha é um array que ganhará um item no inicio e perderá um no fim, para andar
snake[0] = {
	x: 8 * box,
	y: 8 * box

}


function criarBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
	for(i = 0; i < snake.length; i++){
		context.fillStyle = "black";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

criarBG();
criarCobra();