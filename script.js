
// variaveis

let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];  // a cobrinha é um array que ganhará um item no inicio e perderá um no fim, para andar
snake[0] = {
	x: 8 * box,
	y: 8 * box

}


let direction = "right";

// Funções

// cria BG
function criarBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}


// cria cobrinha
function criarCobra() {
	for(i = 0; i < snake.length; i++){
		context.fillStyle = "black";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}


function iniciarJogo() {
	//starta funções
	criarBG();
	criarCobra();

	// setando posição inicial da cobrinha
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	//seta como vai andar
	if(direction == "right") snakeX += box;
	if(direction == "left") snakeX -= box;
	if(direction == "up") snakeY -= box;
	if(direction == "down") snakeY += box;
	
	//retirar box final para movimento
	snake.pop();

	//adiciona box inicial para movimento (cabeça)
	let newHead = {
		x: snakeX, 
		y: snakeY
	}

	snake.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100)