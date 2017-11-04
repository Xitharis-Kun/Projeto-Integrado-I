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

// Laço para atribuir a função "onclick" aos elementos do vetor
for (var i = 0; i < quantidadeDivsAttributeClass; i++) {
	// Verifica se "i" é "0"
	if (i == 0) {
		// Caso a condição seja atendida, aplica a função "onclick" ao elemento
		// "imgs[i]". Sempre que o usuário clicar com o botão esquerdo do mouse sobre o elemento
		// a função será ativada
		imgs[i].onclick = function() {
			// Captura novamente todos os valores de divs dentro do elemento com id "imagemEscolher"
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				// Verifica se "j" é "0"
				if (j == 0) {
					// Caso a condição seja verdadeira
					// Pega o elemento "imagemPrincipal" e o coloca na variavel "imgPrincipal"
					var imgPrincipal = document.getElementById("imagemPrincipal");
					// Pega o elemento "img" filho de "imgPrincipal" e o coloca na variavel "textoAlt"
					var textoAlt = imgPrincipal.querySelector("img");

					// Muda o texto alternativo do elemento "textoAlt" para "Ícone de cor " + texto alternativo do elemento
					// "img" filho do elemento do vetor "imgs"
					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					// Muda a cor de fundo do elemento "imgPrincipal" para "#ffa"
					imgPrincipal.style.backgroundColor = "#ffa";
					// Muda a cor do texto do elemento "imgPrincipal" para "#000"
					imgPrincipal.style.color = "#000";
				}
			}
		}
	}

	else if (i == 1) {
		imgs[i].onclick = function() {
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 1) {
					var imgPrincipal = document.getElementById("imagemPrincipal");
					var textoAlt = imgPrincipal.querySelector("img");

					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					imgPrincipal.style.backgroundColor = "#0af";
					imgPrincipal.style.color = "#000";
				}
			}
		}
	}

	else if (i == 2) {
		imgs[i].onclick = function() {
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 2) {
					var imgPrincipal = document.getElementById("imagemPrincipal");
					var textoAlt = imgPrincipal.querySelector("img");

					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					imgPrincipal.style.backgroundColor = "#000";
					imgPrincipal.style.color = "#fff";
				}
			}
		}
	}

	else if (i == 3) {
		imgs[i].onclick = function() {
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 3) {
					var imgPrincipal = document.getElementById("imagemPrincipal");
					var textoAlt = imgPrincipal.querySelector("img");

					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					imgPrincipal.style.backgroundColor = "#f7f";
					imgPrincipal.style.color = "#000";
				}
			}
		}
	}

	else if (i == 4) {
		imgs[i].onclick = function() {
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 4) {
					var imgPrincipal = document.getElementById("imagemPrincipal");
					var textoAlt = imgPrincipal.querySelector("img");

					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					imgPrincipal.style.backgroundColor = "#0d5";
					imgPrincipal.style.color = "#000";
				}
			}
		}
	}

	else if (i == 5) {
		imgs[i].onclick = function() {
			imgs = document.getElementById("imagemEscolher").querySelectorAll("div");
			for (var j = 0; j < quantidadeDivsAttributeClass; j++) {
				if (j == 5) {
					var imgPrincipal = document.getElementById("imagemPrincipal");
					var textoAlt = imgPrincipal.querySelector("img");

					textoAlt.alt = "Ícone de cor " + imgs[j].querySelector("img").getAttribute("alt");
					imgPrincipal.style.backgroundColor = "#a00";
					imgPrincipal.style.color = "#000";
				}
			}
		}
	}
}