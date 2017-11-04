// Pega todos os elementos "inputs" filhos de "espaco_informacoes" e coloca no vetor "inputs"
var inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");

// Percorre o vetor e verifica se existe algum "input" com "value" "Prosseguir"
for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].getAttribute("value") == "Prosseguir") {
		// Caso tenha sido atendida a condição, pega o "input" com "value" "Prosseguir"
		// e aplica uma função "onclick" a ele. Sempre que o usuário clicar no elemento
		// a função será aplicada.
		inputs[i].onclick = function() {
			// Pega novamente os "inputs" filhos de "espaco_informacoes"
			inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
			// Pega todos os elementos "figures" filhos de "espaco_informacoes" e os coloca no vetor "figures"
			var figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
			// Verifica se o primeiro elemento do vetor "inputs" tem atributo "disabled" com valor "false", ou seja,
			// verifica se o usuário pode manipulá-lo
			if (inputs[0].disabled == false) {
				// Caso a condição seja atendida, verifica se o primeiro elemento do vetor "inputs" tem o atributo "valor"
				// diferente de vazio e se o elemento "img" filho do primeiro elemento do vetor "figures"
				// tem atributo "src" diferente de vazio
				if (inputs[0].value != "" && figures[0].querySelector("img").getAttribute("src") != "") {
					// Caso a condição seja atendida
					// Verifica se o segundo elemento do vetor "inputs" tem atributo "disabled" com valor "false", ou seja,
					// verifica se o usuário pode manipulá-lo
					if (inputs[1].disabled == false) {
						// Caso a condição seja atendida, verifica se o segundo elemento do vetor "inputs" tem o atributo "valor"
						// diferente de vazio e se o elemento "img" filho do segundo elemento do vetor "figures"
						// tem atributo "src" diferente de vazio
						if (inputs[1].value != "" && figures[1].querySelector("img").getAttribute("src") != "") {
							// Caso a condição seja atendida
							// Verifica se o terceiro elemento do vetor "inputs" tem atributo "disabled" com valor "false", ou seja,
							// verifica se o usuário pode manipulá-lo
							if (inputs[2].disabled == false) {
								// Caso a condição seja atendida, verifica se o terceiro elemento do vetor "inputs" tem o atributo "valor"
								// diferente de vazio e se o elemento "img" filho do terceiro elemento do vetor "figures"
								// tem atributo "src" diferente de vazio
								if (inputs[2].value != "" && figures[2].querySelector("img").getAttribute("src") != "") {
									// Caso a condição seja atendida
									// Verifica se o quarto elemento do vetor "inputs" tem atributo "disabled" com valor "false", ou seja,
									// verifica se o usuário pode manipulá-lo
									if (inputs[3].disabled == false) {
										// Caso a condição seja atendida, verifica se o quarto elemento do vetor "inputs" tem o atributo "valor"
										// diferente de vazio e se o elemento "img" filho do quarto elemento do vetor "figures"
										// tem atributo "src" diferente de vazio
										if (inputs[3].value != "" && figures[3].querySelector("img").getAttribute("src") != "") {
											// Caso todas as condições sejam atendidas, ou seja, todos os campos de textos forem
											// preenchidos e todas as imagens forem selecionadas, teremos um total de 4 equipes em jogo.

											// Cria um laço para guardar o nome e número da equipe e o caminho da imagem.
											for (var j = 0; j < 4; j++) {
												window.localStorage.setItem("nomeEquipe"+(j+1), inputs[j].value);
												window.localStorage.setItem("imagemEquipe"+(j+1), figures[j].querySelector("img").getAttribute("src"));
												window.localStorage.setItem("equipe"+(j+1), (j+1));
											}
											// Guarda a quantidade de equipes cadastradas na variavel "nEquipes"
											window.localStorage.setItem("nEquipes", 4);
											// Muda a págica para o seguinte endereço:
											window.location = "randomizacaoequipes.html"
										}
										else if (inputs[3].value == "" && figures[3].querySelector("img").getAttribute("src") == "") {
											// Caso a condição '(inputs[3].value != "" && figures[3].querySelector("img").getAttribute("src") != "")'
											// não tenha sido atendida, verifica se o elemento do vetor "inputs" tem o atributo "valor" vazio e se
											// se o elemento "img" filho do quarto elemento do vetor "figures" tem atributo "src" vazio

											// Caso seja atendida, todos os campos até a terceira equipe foram preenchidos, teremos, então
											// um total de 3 equipes em jogo.

											// Cria um laço para guardar o nome e número da equipe e o caminho da imagem.
											for (var j = 0; j < 3; j++) {
												window.localStorage.setItem("nomeEquipe"+(j+1), inputs[j].value);
												window.localStorage.setItem("imagemEquipe"+(j+1), figures[j].querySelector("img").getAttribute("src"));
												window.localStorage.setItem("equipe"+(j+1), (j+1));
											}
											// Guarda a quantidade de equipes cadastradas na variavel "nEquipes"
											window.localStorage.setItem("nEquipes", 3);
											// Muda a págica para o seguinte endereço:
											window.location = "randomizacaoequipes.html"
										}
										else {
											// Caso a condição "(inputs[3].value != "" && figures[3].querySelector("img").getAttribute("src") != "")"
											// e "(inputs[3].value == "" && figures[3].querySelector("img").getAttribute("src") == "")" tenham sido
											// atendidas, presume-se que ou o campo de texto da equipe 4 foi preenchido ou alguma imagem foi
											// selecionada.

											// Verifica se o elemento do vetor "inputs" tem atributo "value" vazio
											if (inputs[3].value == "") {
												// Caso a condição seja atendida
												// Envia uma alerta ao usuário
												alert ("Digite o nome da equipe para poder prosseguir, por favor");
												// Mostra qual elemento o usuário deverá preencher para prosseguir
												inputs[3].focus();
											}
											// Caso a primeira condição não tenha sido atendida
											// Verifica se o elemento "img" filho do elemento do vetor "figures"
											// tem atributo "src" vazio
											else if (figures[3].querySelector("img").getAttribute("src") == "") {
												// Caso a condição seja atendida
												// Envia uma alerta ao usuário
												alert ("Selecione a imagem que representará sua equipe para poder prosseguir, por favor");
												// Mostra qual elemento o usuário deverá preencher para prosseguir
												figures[3].focus();
											}
											return false;
										}
									}
									else {
										for (var j = 0; j < 3; j++) {
											window.localStorage.setItem("nomeEquipe"+(j+1), inputs[j].value);
											window.localStorage.setItem("imagemEquipe"+(j+1), figures[j].querySelector("img").getAttribute("src"));
											window.localStorage.setItem("equipe"+(j+1), (j+1));
										}
										window.localStorage.setItem("nEquipes", 3);
										window.location = "randomizacaoequipes.html"
									}
								}
								else if (inputs[2].value == "" && figures[2].querySelector("img").getAttribute("src") == "") {
									for (var j = 0; j < 2; j++) {
										window.localStorage.setItem("nomeEquipe"+(j+1), inputs[j].value);
										window.localStorage.setItem("imagemEquipe"+(j+1), figures[j].querySelector("img").getAttribute("src"));
										window.localStorage.setItem("equipe"+(j+1), (j+1));
									}
									window.localStorage.setItem("nEquipes", 2);
									window.location = "randomizacaoequipes.html"
								}
								else {
									alert ("Preencha todos os dados para poder prosseguir, por favor");
									if (inputs[2].value == "") {
										inputs[2].focus();
									}
									else if (figures[2].querySelector("img").getAttribute("src") == "") {
										figures[2].focus();
									}
									return false;
								}
							}
							else {
								for (var j = 0; j < 2; j++) {
									window.localStorage.setItem("nomeEquipe"+(j+1), inputs[j].value);
									window.localStorage.setItem("imagemEquipe"+(j+1), figures[j].querySelector("img").getAttribute("src"));
									window.localStorage.setItem("equipe"+(j+1), (j+1));
								}
								window.localStorage.setItem("nEquipes", 2);
								window.location = "randomizacaoequipes.html"
							}
						}
						else {
							alert ("Preencha todos os dados para poder prosseguir, por favor");
							if (inputs[1].value == "") {
								inputs[1].focus();
							}
							else if (figures[1].querySelector("img").getAttribute("src") == "") {
								figures[1].focus();
							}
							return false;
						}
					}
					else {
						return false;
					}
				}
				else {
					alert ("Preencha todos os dados para poder prosseguir, por favor");
					if (inputs[0].value == "") {
						inputs[0].focus();
					}
					else if (figures[0].querySelector("img").getAttribute("src") == "") {
						figures[0].focus();
					}
					return false;
				}
			}
			else {
				return false;
			}
		}
	}
}

