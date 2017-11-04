// Pega o elemento "input" filho de "espacoBotoes" e o coloca na variavel "bt"
var bt = document.getElementById("espacoBotoes").querySelector("input");

// Aplica uma função "onclick" na variavel "bt".
// Sempre que o elemento for clicado, a função ativará
bt.onclick = function() {
	// Muda a pagina para o endereço
	window.location = "../index.html";
}