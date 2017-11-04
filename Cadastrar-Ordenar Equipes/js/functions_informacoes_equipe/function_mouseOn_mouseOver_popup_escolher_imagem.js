// Pega os elementos "div" filhos de "imagemEscolher" e os coloca no vetor "imgs"
var imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
// Cria um contador para verificar quantos divs com atributo "class" existem
var quantidadeDivsAttributeClass = 0;

// Laço para verificar atributo "class" existem
for (var i = 0; i < imgs.length; i++) {
	if (imgs[i].getAttribute("class") == "imgs") {
		quantidadeDivsAttributeClass++;
	}
}

// Laço para atribuir funções "onmouseover" e "onmouseout" aos elementos do vetor
for (var i = 0; i < quantidadeDivsAttributeClass; i++) {
	// Verifica se "i" é "0"
	if (i == 0) {
		// Caso a condição seja atendida, aplica a função "onmouseover" ao elemento
		// "imgs[i]". Sempre que o usuário estiver com o mouse sobre o elemento
		// a função será ativada
		imgs[i].onmouseover = function() {
			// Captura novamente todos os valores de divs dentro do elemento com id "imagemEscolher"
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				// Verifica se "j" é "0"
				if (j == 0) {
					// Caso a condição seja verdadeira
					// Atribui a largura de "90px" ao elemento "imgs[j]"
					imgs[j].style.width = "90px";
					// Atribui a altura de "90px" ao elemento "imgs[j]"
					imgs[j].style.height = "90px";
					// Atribui a cor de fundo "#ff0" ao elemento "imgs[j]"
					imgs[j].style.backgroundColor = "#ff0";
					// Atribui a cor da borda "#f00" ao elemento "imgs[j]"
					imgs[j].style.borderColor = "#f00";
					// Muda o tipo do cursor para o valor "pointer" (mãozinha)
					// Indicando que é um elemento clicável
					imgs[j].style.cursor = "pointer";
				}
			}
		}
		// Caso a condição seja atendida, aplica a função "onmouseout" ao elemento
		// "imgs[i]".  Sempre que o usuário retirar o mouse do elemento
		// a função será ativada
		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 0) {
					// Caso a condição seja verdadeira
					// Atribui a largura de "75px" ao elemento "imgs[j]"
					imgs[j].style.width = "75px";
					// Atribui a altura de "75px" ao elemento "imgs[j]"
					imgs[j].style.height = "75px";
					// Atribui a cor de fundo "#ffa" ao elemento "imgs[j]"
					imgs[j].style.backgroundColor = "#ffa";
					// Atribui a cor da borda "#000" ao elemento "imgs[j]"
					imgs[j].style.borderColor = "#000";
					// Muda o tipo do cursor para o valor "default" (setinha)
					// Indicando que saiu da área clicável
					imgs[j].style.cursor = "default";
				}
			}
		}
	}

	else if (i == 1) {
		imgs[i].onmouseover = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 1) {
					imgs[j].style.width = "90px";
					imgs[j].style.height = "90px";
					imgs[j].style.backgroundColor = "#00f";
					imgs[j].style.borderColor = "#f00";
					imgs[j].style.cursor = "pointer";
				}
			}
		}

		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 1) {
					imgs[j].style.width = "75px";
					imgs[j].style.height = "75px";
					imgs[j].style.backgroundColor = "#0af";
					imgs[j].style.borderColor = "#000";
					imgs[j].style.cursor = "default";
				}
			}
		}
	}

	else if (i == 2) {
		imgs[i].onmouseover = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 2) {
					imgs[j].style.width = "90px";
					imgs[j].style.height = "90px";
					imgs[j].style.backgroundColor = "#999";
					imgs[j].style.borderColor = "#f00";
					imgs[j].style.cursor = "pointer";
				}
			}
		}

		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 2) {
					imgs[j].style.width = "75px";
					imgs[j].style.height = "75px";
					imgs[j].style.backgroundColor = "#000";
					imgs[j].style.borderColor = "#fff";
					imgs[j].style.cursor = "default";
				}
			}
		}
	}

	else if (i == 3) {
		imgs[i].onmouseover = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 3) {
					imgs[j].style.width = "90px";
					imgs[j].style.height = "90px";
					imgs[j].style.backgroundColor = "#d5d";
					imgs[j].style.borderColor = "#f00";
					imgs[j].style.cursor = "pointer";
				}
			}
		}

		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 3) {
					imgs[j].style.width = "75px";
					imgs[j].style.height = "75px";
					imgs[j].style.backgroundColor = "#f7f";
					imgs[j].style.borderColor = "#000";
					imgs[j].style.cursor = "default";
				}
			}
		}
	}

	else if (i == 4) {
		imgs[i].onmouseover = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 4) {
					imgs[j].style.width = "90px";
					imgs[j].style.height = "90px";
					imgs[j].style.backgroundColor = "#0e1";
					imgs[j].style.borderColor = "#f00";
					imgs[j].style.cursor = "pointer";
				}
			}
		}

		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 4) {
					imgs[j].style.width = "75px";
					imgs[j].style.height = "75px";
					imgs[j].style.backgroundColor = "#0d5";
					imgs[j].style.borderColor = "#000";
					imgs[j].style.cursor = "default";
				}
			}
		}
	}

	else if (i == 5) {
		imgs[i].onmouseover = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 5) {
					imgs[j].style.width = "90px";
					imgs[j].style.height = "90px";
					imgs[j].style.backgroundColor = "#f00";
					imgs[j].style.borderColor = "#fff";
					imgs[j].style.cursor = "pointer";
				}
			}
		}

		imgs[i].onmouseout = function() {
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 5) {
					imgs[j].style.width = "75px";
					imgs[j].style.height = "75px";
					imgs[j].style.backgroundColor = "#a00";
					imgs[j].style.borderColor = "#000";
					imgs[j].style.cursor = "default";
				}
			}
		}
	}
}