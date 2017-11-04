// Pega todos os inputs dentro da div com id "espacoBotoes" e os coloca na variavel inputs
var inputs = document.getElementById("espacoBotoes").querySelectorAll("input");

// Percorre o vetor inputs e procura qual input tem o atributo com valor "Voltar"
for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].getAttribute("value") == "Voltar") {
		// Pega o input com valor "voltar" e aplica uma função de click a ele
		inputs[i].onclick = function() {
			// Quando clicado a página será direcionada para esse endereço
			window.location = "../index.html";
		}
	}
}