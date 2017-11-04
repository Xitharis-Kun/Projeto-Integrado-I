// Pega todos os inputs dentro da div com id "espaco_informacoes" e os coloca na variavel inputs
var inputs = document.getElementById("espaco_informacoes").getElementsByTagName("input");
// Pega todos os figures dentro da div com id "espaco_informacoes" e os coloca na variavel inputs
var figures = document.getElementById("espaco_informacoes").getElementsByTagName("figure");
// Pega a div com id "fundo" e a coloca na variavel fundo
var fundo = document.getElementById("fundo");

// Cria um contador de inputs com atributo class
var quantidadeInputsAttributeClass = 0;

// Percorre o vetor de inputs e procura os inputs com atributo class "add_nome_equipe"
for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].getAttribute("class") == "add_nome_equipe") {
		// Conta todos os inputs que atenderem a condição
		quantidadeInputsAttributeClass++;
	}
}

// No laço abaixo eu tive que repetir a variável inputs e criar um novo laço,
// pois ao atribuir a função "onclick" para figures[i], todos os dados anteriores
// a criação da função são "perdidos", sendo impossíves de serem acessados
// dentro da função "onclick"

// Cria um laço que percorre todos os inputs que tenham atributo class "add_nome_equipe"
for (var i = 0; i < quantidadeInputsAttributeClass; i++) {
	if (inputs[i].getAttribute("class") == "add_nome_equipe") {
		// Verifica se o i é "0"
		if (i == 0) {
			// Pega o figure com indice "0" e aplica uma função de click a ele
			figures[i].onclick = function() {
				// Captura novamente todos os valores de inputs dentro da div com id "espaco_informacoes"
				inputs = document.getElementById("espaco_informacoes").getElementsByTagName("input");
				// Cria um novo laço para percorrer todos os inputs
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					// Verifica se o j é "0"
					if (j == 0) {
						// Verifica se o input com indice j está desativado
						if (inputs[j].disabled == false) {
							// Caso a condição seja atendida, captura os elementos "telaEscolherImagem" e "h2" filho de "telaEscolherImagem"
							var popupEscolherImagem = document.getElementById("telaEscolherImagem");
							var textoPopup = popupEscolherImagem.querySelector("h2");
							
							// Adiciona o texto ao "h2" filho de "telaEscolherImagem"							
							textoPopup.innerHTML = "Escolha a imagem que representará a equipe " + (j+1) + ":";
							// Atribui o valor "inline" para o elemento "fundo"
							fundo.style.display = "inline";
							// Atribui o valor "inline" para o elemento popupEscolherImagem
							popupEscolherImagem.style.display = "inline";
						}
					}
				}
			}
		}

		else if (i == 1) {
			figures[i].onclick = function() {
				inputs = document.getElementById("espaco_informacoes").getElementsByTagName("input");
				imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 1) {
						if (inputs[j].disabled == false) {
							var popupEscolherImagem = document.getElementById("telaEscolherImagem");
							var textoPopup = popupEscolherImagem.querySelector("h2");

							textoPopup.innerHTML = "Escolha a imagem que representará a equipe " + (j+1) + ":";
							fundo.style.display = "inline";
							popupEscolherImagem.style.display = "inline";
						}
					}
				}
			}
		}

		else if (i == 2) {
			figures[i].onclick = function() {
				inputs = document.getElementById("espaco_informacoes").getElementsByTagName("input");
				imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 2) {
						if (inputs[j].disabled == false) {
							var popupEscolherImagem = document.getElementById("telaEscolherImagem");
							var textoPopup = popupEscolherImagem.querySelector("h2");

							textoPopup.innerHTML = "Escolha a imagem que representará a equipe " + (j+1) + ":";
							fundo.style.display = "inline";
							popupEscolherImagem.style.display = "inline";
						}
					}
				}
			}
		}

		if (i == 3) {
			figures[i].onclick = function() {
				inputs = document.getElementById("espaco_informacoes").getElementsByTagName("input");
				imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 3) {
						if (inputs[j].disabled == false) {
							var popupEscolherImagem = document.getElementById("telaEscolherImagem");
							var textoPopup = popupEscolherImagem.querySelector("h2");

							textoPopup.innerHTML = "Escolha a imagem que representará a equipe " + (j+1) + ":";
							fundo.style.display = "inline";
							popupEscolherImagem.style.display = "inline";
						}
					}
				}
			}
		}
	}
}