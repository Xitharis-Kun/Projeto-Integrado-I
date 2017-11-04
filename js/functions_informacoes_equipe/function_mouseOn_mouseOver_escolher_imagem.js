// Pega todos os inputs dentro da div com id "espaco_informacoes" e os coloca na variavel inputs
var inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
// Pega todos os figures dentro da div com id "espaco_informacoes" e os coloca na variavel figures
var figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
// Cria um contador de inputs com atributo class "add_nome_equipe"
var quantidadeInputsAttributeClass = 0;

for (var i = 0; i < inputs.length; i++) {
	// Verifica se o input tem atributo class "add_nome_equipe"
	if (inputs[i].getAttribute("class") == "add_nome_equipe") {
		quantidadeInputsAttributeClass++;
	}
}

// Cria um laço e percorre o vetor inputs verificando quais inputs tem atributo class "add_nome_equipe"
for (var i = 0; i < quantidadeInputsAttributeClass; i++) {
	if (inputs[i].getAttribute("class") == "add_nome_equipe") {
		// Verifica se o i é "0"
		if (i == 0) {
			// Pega figures[i] e aplica uam função "onmouseover" a ele
			// Sempre que o usuário estiver com o mouse sobre o elemento figures[i]
			// ela será acionada.
			figures[i].onmouseover = function() {
				// Captura novamente todos os valores de inputs dentro da div com id "espaco_informacoes"
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				// Pega os elementos "div" filhos de "imagemEscolher" e os coloca no vetor "imgs"
				var imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				// Cria um laço que percorre o vetor inputs verificando se os elementos tem o atributo
				// "disabled" com valor "false"
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					// Verifica se o "j" é "0"
					if (j == 0) {
						if (inputs[j].disabled == false) {
							// Caso a condição seja atendida
							// Captura novamente todos os valores de figures dentro da div com id "espaco_informacoes"
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
							// Pega o elemento com id "imagemPrincipal" e o coloca na variavel "imgPrincipalPopup"
							var imgPrincipalPopup = document.getElementById("imagemPrincipal");

							// Verifica o elemento "img" filho de "figures[j]" tem atributo "src" vazio ou diferente de vazio
							if (figures[j].querySelector("img").getAttribute("src") != "" || figures[j].querySelector("img").getAttribute("src") == "") {
								// Esse primeiro laço verifica quais cores estão "invisíveis" para o usuário poder escolher
								// Caso tenha alguma com atributo "none", ele passa todas para o atributo "inline-block", para
								// que todas fiquem "visíveis" para os usuários

								// Cria um laço para verificar se o vetor "imgs" tem algum elemento com o atributo "display"
								// com valor "none"
								for (var k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (imgs[k].style.display == "none") {
										// Caso a condição seja atendida, o elemento terá o valor de seu atributo
										// mudado para "inline-block"
										imgs[k].style.display = "inline-block";
									}
								}

								// Esse segundo laço verifica se existe alguma cor escolhida por alguma outra equipe e se existir
								// ele pega todas essas cores e deixa-as invisíveis para outros usuários não poderem escolher essa
								// mesma cor/imagem

								// Cria um laço para verificar se o elemento "img" filho dos elementos do vetor "figures" tem
								// atributo "src" com valor diferente de vazio 
								for (k = 0; k < quantidadeInputsAttributeClass; k++) {
									if (figures[k].querySelector("img").getAttribute("src") != "") {
										// Caso a condição seja atendida, é criado outro laço para comparar o 
										// valor do atributo "src" encontrado no elemento "img" filho do elemento
										// "figures[k]" com o "../img/icon_"+l+".png", onde "l" é o número da cor
										for (var l = 0; l < quantidadeDivsAttributeClass; l++) {
											if (figures[k].querySelector("img").getAttribute("src") == "../img/icon_"+l+".png") {
												// Caso a condição seja atendida
												// Pega o elemento com id "tl_imagem+l", onde l é o número da cor, e o coloca
												// na variavel cor
												var cor = document.getElementById("tl_imagem"+l);

												// Atribui o valor "none" para o atributo "display" da variavel cor
												cor.style.display = "none";
											}
										}
									}
								}

								// Esse terceiro laço verifica qual cor já está sendo usada pela equipe, caso ela queira mudar a cor
								// da própria equipe e deixa essa cor "invisível" na hora de escolher uma nova cor. Evitando da equipe
								// escolher a mesma cor que já havia escolhido por último

								// Cria um laço para verificar se o elemento "img" filho dos elementos do vetor "figures" tem
								// atributo "src" com valor diferente de vazio
								for (k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (figures[j].querySelector("img").getAttribute("src") != "") {
										// Caso a condição seja atendida, faz-se uma nova verificação para saber qual cor
										// já foi escolhida pela equipe
										if (figures[j].querySelector("img").getAttribute("src") == "../img/icon_"+k+".png") {
											// Caso a condição seja atendida
											// Pega o elemento com id "tl_imagem+k", onde k é o número da cor, e o coloca na variavel
											// cor
											// Pega o elemento "img" filho de "imgPrincipalPopup" e o coloca na variavel "textoAlt"
											var cor = document.getElementById("tl_imagem"+k);
											var textoAlt = imgPrincipalPopup.querySelector("img");

											// Atribui o valor "none" para o atributo "display" do elemento "cor"
											cor.style.display = "none";
											// Muda a cor de fundo do elemento "imgPrincipalPopup" para a cor do elemento
											// vetor "figures[j]"
											imgPrincipalPopup.style.backgroundColor = figures[j].querySelector("img").style.backgroundColor;
											// Muda o texto alternativo do elemento "textoAlt" para o texto alternativo do elemento
											// do vetor "figures[j]"
											textoAlt.alt = "Ícone de cor " + figures[j].querySelector("img").alt;
											// Verifica se o "k" é "2"
											if (k == 2) {
												// "2" é a cor preta

												// Caso a condição seja verdadeira
												// Atribui o valor "#fff" a cor de texto do elemento "imgPrincipalPopup"
												imgPrincipalPopup.style.color = "#fff";
											}
										}
									}
								}
							}
							// Muda a cor de fundo do elemento "figures[j]" para "#aaa"
							figures[j].style.backgroundColor = "#aaa";
							// Muda o tipo do cursor para o valor "pointer" (mãozinha)
							// indicando que aquele elemento é clicável
							figures[j].style.cursor = "pointer";
						}
					}
				}
			}

			// Pega figures[i] e aplica uam função "onmouseout" a ele
			// Sempre que o usuário retirar o mouse do elemento figures[i]
			// ela será acionada.
			figures[i].onmouseout = function() {
				// Captura novamente todos os valores de inputs dentro da div com id "espaco_informacoes"
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				// Cria esse laço e verifica se o elemento "inputs[j]" tem atributo "disabled"
				// com valor "false"
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					// Verifica se "j" é "0"
					if (j == 0) {
						if (inputs[j].disabled == false) {
							// Caso a condição seja atendida
							// Captura novamente todos os valores de figures dentro da div com id "espaco_informacoes"
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
							// Muda a cor de fundo do elemento "figures[j]" para "#bbb"
							figures[j].style.backgroundColor = "#bbb";
							// Muda o tipo do cursor para o valor "padrão" (setinha)
							// indicando que já saiu da área clicável
							figures[j].style.cursor = "default";
						}
					}
				}
			}
		}

		else if (i == 1) {
			figures[i].onmouseover = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				var imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 1) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
							var imgPrincipalPopup = document.getElementById("imagemPrincipal");

							if (figures[j].querySelector("img").getAttribute("src") != "" || figures[j].querySelector("img").getAttribute("src") == "") {
								for (var k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (imgs[k].style.display == "none") {
										imgs[k].style.display = "inline-block";
									}
								}

								for (k = 0; k < quantidadeInputsAttributeClass; k++) {
									if (figures[k].querySelector("img").getAttribute("src") != "") {
										for (var l = 0; l < quantidadeDivsAttributeClass; l++) {
											if (figures[k].querySelector("img").getAttribute("src") == "../img/icon_"+l+".png") {
												var cor = document.getElementById("tl_imagem"+l);

												cor.style.display = "none";
											}
										}
									}
								}

								for (k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (figures[j].querySelector("img").getAttribute("src") != "") {
										if (figures[j].querySelector("img").getAttribute("src") == "../img/icon_"+k+".png") {
											var cor = document.getElementById("tl_imagem"+k);
											var textoAlt = imgPrincipalPopup.querySelector("img");

											cor.style.display = "none";
											imgPrincipalPopup.style.backgroundColor = figures[j].querySelector("img").style.backgroundColor;
											textoAlt.alt = "Ícone de cor " + figures[j].querySelector("img").alt;
											if (k == 2) {
												imgPrincipalPopup.style.color = "#fff";
											}
										}
									}
								}
							}
							figures[j].style.backgroundColor = "#aaa";
							figures[j].style.cursor = "pointer";
						}
					}
				}
			}

			figures[i].onmouseout = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 1) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");

							figures[j].style.backgroundColor = "#bbb";
							figures[j].style.cursor = "default";
						}
					}
				}
			}
		}

		else if (i == 2) {
			figures[i].onmouseover = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				var imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 2) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
							var imgPrincipalPopup = document.getElementById("imagemPrincipal");

							if (figures[j].querySelector("img").getAttribute("src") != "" || figures[j].querySelector("img").getAttribute("src") == "") {
								for (var k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (imgs[k].style.display == "none") {
										imgs[k].style.display = "inline-block";
									}
								}

								for (k = 0; k < quantidadeInputsAttributeClass; k++) {
									if (figures[k].querySelector("img").getAttribute("src") != "") {
										for (var l = 0; l < quantidadeDivsAttributeClass; l++) {
											if (figures[k].querySelector("img").getAttribute("src") == "../img/icon_"+l+".png") {
												var cor = document.getElementById("tl_imagem"+l);

												cor.style.display = "none";
											}
										}
									}
								}

								for (k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (figures[j].querySelector("img").getAttribute("src") != "") {
										if (figures[j].querySelector("img").getAttribute("src") == "../img/icon_"+k+".png") {
											var cor = document.getElementById("tl_imagem"+k);
											var textoAlt = imgPrincipalPopup.querySelector("img");

											cor.style.display = "none";
											imgPrincipalPopup.style.backgroundColor = figures[j].querySelector("img").style.backgroundColor;
											textoAlt.alt = "Ícone de cor " + figures[j].querySelector("img").alt;
											if (k == 2) {
												imgPrincipalPopup.style.color = "#fff";
											}
										}
									}
								}
							}
							figures[j].style.backgroundColor = "#aaa";
							figures[j].style.cursor = "pointer";
						}
					}
				}
			}

			figures[i].onmouseout = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 2) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");

							figures[j].style.backgroundColor = "#bbb";
							figures[j].style.cursor = "default";
						}
					}
				}
			}
		}

		else if (i == 3) {
			figures[i].onmouseover = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				var imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 3) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
							var imgPrincipalPopup = document.getElementById("imagemPrincipal");

							if (figures[j].querySelector("img").getAttribute("src") != "" || figures[j].querySelector("img").getAttribute("src") == "") {
								for (var k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (imgs[k].style.display == "none") {
										imgs[k].style.display = "inline-block";
									}
								}

								for (k = 0; k < quantidadeInputsAttributeClass; k++) {
									if (figures[k].querySelector("img").getAttribute("src") != "") {
										for (var l = 0; l < quantidadeDivsAttributeClass; l++) {
											if (figures[k].querySelector("img").getAttribute("src") == "../img/icon_"+l+".png") {
												var cor = document.getElementById("tl_imagem"+l);

												cor.style.display = "none";
											}
										}
									}
								}

								for (k = 0; k < quantidadeDivsAttributeClass; k++) {
									if (figures[j].querySelector("img").getAttribute("src") != "") {
										if (figures[j].querySelector("img").getAttribute("src") == "../img/icon_"+k+".png") {
											var cor = document.getElementById("tl_imagem"+k);
											var textoAlt = imgPrincipalPopup.querySelector("img");

											cor.style.display = "none";
											imgPrincipalPopup.style.backgroundColor = figures[j].querySelector("img").style.backgroundColor;
											textoAlt.alt = "Ícone de cor " + figures[j].querySelector("img").alt;
											if (k == 2) {
												imgPrincipalPopup.style.color = "#fff";
											}
										}
									}
								}
							}
							figures[j].style.backgroundColor = "#aaa";
							figures[j].style.cursor = "pointer";
						}
					}
				}
			}

			figures[i].onmouseout = function() {
				inputs = document.getElementById("espaco_informacoes").querySelectorAll("input");
				for (j = 0; j < quantidadeInputsAttributeClass; j++) {
					if (j == 3) {
						if (inputs[j].disabled == false) {
							figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");

							figures[j].style.backgroundColor = "#bbb";
							figures[j].style.cursor = "default";
						}
					}
				}
			}
		}
	}
}