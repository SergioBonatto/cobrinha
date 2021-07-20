
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

document.addEventListener("keydown", update); //keydown é o clique no teclado

function update(event){
	if(event.keyCode == 37 && direction != "right") direction = "left";
	if(event.keyCode == 38 && direction != "down") direction = "up";
	if(event.keyCode == 39 && direction != "left") direction = "right";
	if(event.keyCode == 40 && direction != "up") direction ="down";

}



function iniciarJogo() {

	//faz a cobrinha atravessar a parede
	if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box



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