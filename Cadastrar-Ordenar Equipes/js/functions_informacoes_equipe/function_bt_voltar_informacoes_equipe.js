// Pega todos os inputs dentro da div com id "espaco_informacoes" e os coloca na variavel inputs
var inputs = document.getElementById("espacoBotoesPopUp").querySelectorAll("input");
// Pega o elemento com id "telaEscolherImagem" e o coloca na variavel tl_escolherImagem
var tl_escolherImagem = document.getElementById("telaEscolherImagem");
// Pega o elemento com id "imagemPrincipal" e o coloca na variavel imgPrincipal
var imgPrincipal = document.getElementById("imagemPrincipal");
// Pega o elemento img filho de "imgPrincipal" e o coloca na variavel textoAlt
var textoAlt = imgPrincipal.querySelector("img");
// Pega o elemento com id "fundo" e o coloca na variavel fundo
var fundo = document.getElementById("fundo");

// Percorre o vetor inputs e procura qual input tem o atributo do tipo "button"
for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].getAttribute("type") == "button") {
		// Pega o input do tipo "button" e aplica uma função de click a ele
		inputs[i].onclick = function() {
			// Quando clicado o elemento "imgPrincipal" terá sua cor padrão novamente
			imgPrincipal.style.backgroundColor = "#bbb";
			// Será atribuido o valor "none" para o elemento "tl_escolherImagem"
			tl_escolherImagem.style.display = "none";
			// Será atribuido a cor de texto padrão para o elemento "imgPrincipal"
			imgPrincipal.style.color = "#000";
			// O texto do elemento "img" filho de "imagemPrincipal" voltará ao texto padrão
			textoAlt.alt = "Imagem principal";
			// Será atribuido o valor "none" ao elemento "fundo"
			fundo.style.display = "none";
		}
	}
}