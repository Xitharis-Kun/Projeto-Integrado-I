// Pega todos os inputs dentro da div com id "espacoBotoes" e os coloca na variavel inputs
var inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
var figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
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
// pois ao atribuir a função "oninput" para inputs[i], todos os dados anteriores
// a criação da função são "perdidos", sendo impossíves de serem acessados
// dentro da função "oninput"

// Cria um laço que percorre todos os inputs que tenham atributo class "add_nome_equipe"
for (var i = 0; i < quantidadeInputsAttributeClass; i++) {
	if (inputs[i].getAttribute("class") == "add_nome_equipe") {
		// Verifica se o i é "0"
		if (i == 0) {
			// Pega o input com indice "0" e aplica uma função de input a ele
			// Sempre que o usuário digitar algo, ela acionará
			inputs[i].oninput = function() {
				// Captura novamente todos os valores de inputs dentro da div com id "espaco_informacoes"
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				// Cria um novo laço para percorrer todos os inputs
				for (var j = 0; j < quantidadeInputsAttributeClass; j++) {
					// Verifica se o j é "0"
					if (j == 0) {
						// Verifica se os indices "j" e "j+1" tem valores diferentes de vazios
						if (inputs[j].value != "" && inputs[(j+1)].value != "") {
							// Caso a condição seja atendida, os inputs com indices "2" e "5"
							// caixa de texto para adicionar o nome da terceira equipe e botão
							// prosseguir, respectivamente, terão seus atributos "disabled" com valores "false",
							// ou seja, eles ficarão ativos para os usuários
							inputs[2].disabled = false;
							inputs[5].disabled = false;
						}
						else {
							// Caso a condição não seja atendida, os inputs com indices "2" e "3"
							// terão seus valores mudados para vazios e os indices "2", "3" e "5"
							// terão seus atributos "disabled" com valores "true", ou seja, eles
							// ficarão desativados para os usuários

							figures[2].querySelector("img").src = "";
							figures[2].querySelector("img").alt = "Image Equipe 3";
							figures[2].querySelector("img").style.backgroundColor = "#bbb";

							figures[3].querySelector("img").src = "";
							figures[3].querySelector("img").alt = "Image Equipe 4";
							figures[3].querySelector("img").style.backgroundColor = "#bbb";

							inputs[2].value = "";
							inputs[3].value = "";
							
							inputs[2].disabled = true;
							inputs[3].disabled = true;
							inputs[5].disabled = true;
						}
					}
				}
			}
		}
		if (i == 1) {
			inputs[i].oninput = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				for (var j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 1) {
						if (inputs[j].value != "" && inputs[(j-1)].value != "") {
							inputs[2].disabled = false;
							inputs[5].disabled = false;
						}
						else {
							figures[2].querySelector("img").src = "";
							figures[2].querySelector("img").alt = "Image Equipe 3";
							figures[2].querySelector("img").style.backgroundColor = "#bbb";

							figures[3].querySelector("img").src = "";
							figures[3].querySelector("img").alt = "Image Equipe 4";
							figures[3].querySelector("img").style.backgroundColor = "#bbb";

							inputs[2].value = "";
							inputs[3].value = "";

							inputs[2].disabled = true;
							inputs[3].disabled = true;
							inputs[5].disabled = true;
						}
					}
				}
			}
		}
		if (i == 2) {
			inputs[i].oninput = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				for (var j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 2) {
						if (inputs[j].value != "") {
							inputs[3].disabled = false;
						}
						else {
							figures[3].querySelector("img").src = "";
							figures[3].querySelector("img").alt = "Image Equipe 4";
							figures[3].querySelector("img").style.backgroundColor = "#bbb";

							inputs[3].value = "";
							inputs[3].disabled = true;
						}
					}
				}
			}
		}
	}
}