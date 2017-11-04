// Pega todos os inputs dentro da div com id "espacoBotoes" e os coloca na variavel inputs
var inputs = document.getElementById("espacoBotoesPopUp").querySelectorAll("input");

// Cria um laço que percorre todos os inputs que tenham atributo com valor "Escolher"
for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].getAttribute("value") == "Escolher") {
		// Caso a condição seja atendida pega o input com atributo com valor "Escolher"
		// e aplica uma função do tipo onclick a ele
		// Sempre que o usuário clicar, ela acionará
		inputs[i].onclick = function() {
			// Cria um vetor de strings com o nome das cores
			var nomeCor = ["amarelo", "azul", "preto", "rosa", "verde", "vermelho"];
			// Cria um vetor de strings com todas as cores das imagens
			var cores = ["rgb(255, 255, 170)", "rgb(0, 170, 255)", "rgb(0, 0, 0)", "rgb(255, 119, 255)", "rgb(0, 221, 85)", "rgb(170, 0, 0)"];
			// Pega o elemento com id "imagemPrincipal" e o coloca na variavel "imgPrincipalPopup"
			var imgPrincipalPopup = document.getElementById("imagemPrincipal");
			// Pega o elemento com id "telaEscolherImagem" e o coloca na variavel "popupEscolherImagem"
			var popupEscolherImagem = document.getElementById("telaEscolherImagem");
			// Pega o elemento "img" filho de "telaEscolherImagem" e o coloca na variavel "textoAlt"
			var textoAlt = imgPrincipalPopup.querySelector("img");
			// Pega o elemento "h2" filho de "telaEscolherImagem" e o o aloca num vetor chamado "textoPopup"
			var textoPopup = document.getElementById("telaEscolherImagem").querySelector("h2").innerText.split();
			// Pega o elemento com id "fundo" e o coloca na variavel "fundo"
			var fundo = document.getElementById("fundo");
			// Pega o vetor "textoPopup" nas posicoes ("0", "43") e do resultado é diminuido uma (1) unidade
			var id = textoPopup[0][43] - 1;

			// Verifica se o id resultado é "0"
			if (id == 0) {
				// Verifica se a cor de fundo do elemento "imgPrincipalPopup" é "rgb(187, 187, 187" ou vazia
				if (imgPrincipalPopup.style.backgroundColor != "rgb(187, 187, 187)" && imgPrincipalPopup.style.backgroundColor != "") {
					// Pega o elemento "img" filho de "img_equipe_um" e o coloca na variavel "img"
					var img = document.getElementById("img_equipe_um").querySelector("img");
					// Pega a cor de fundo do elemento "imgPrincipalPopup" e a coloca na variavel cor
					var cor = imgPrincipalPopup.style.backgroundColor;

					// Cria o laço para percorrer o vetor "cores" e comparar seus indices com
					// a cor armazenada na variavel "cor"
					for (var j = 0; j < cores.length; j++) {
						// Verifica se as cores comparadas são iguais
						if (cor == cores[j]) {
							// Caso a condição seja atendida, o elemento "img" tem seu atributo
							// "src" mudado para "../img/icon_"+j+".png"
							// o j refere_se ao numero da cor que refere-se a uma imagem
							img.src = "../img/icon_"+j+".png";
							// O elemento "img" tem sua cor mudada para a cor indicada no vetor
							// "cores" pelo indice j
							img.style.backgroundColor = cores[j];
							// O elemento "img" tem seu texto alternavito mudado para o nome da cor
							// indicador no vetor "nomeCor" pelo indice j
							img.alt = nomeCor[j];
						}
					}

					// O elemento "img" tem seu tamanho mudado para "100%"
					img.style.width = "100%";
					// O elemento "fundo" tem seu atributo display mudado para "none"
					fundo.style.display = "none";
					// O elemento "popupEscolherImagem" tem seu atributo display mudado para "none"
					popupEscolherImagem.style.display = "none";
					// O elemento "imgPrincipalPopup" tem sua cor de fundo mudada para a cor padrão
					imgPrincipalPopup.style.backgroundColor = "#bbb";
					// O elemento "imgPrincipalPopup" tem sua cor de texto mudada para a cor padrão
					imgPrincipalPopup.style.color = "#000";
					// O elemento "imgPrincipalPopup" tem seu texto alternativo mudado para o texto padrão
					textoAlt.alt = "Imagem principal";
				}
				else {
					// Caso a condição não seja atendida, é emitido um alerta para o usuário com
					// a seguinte mensagem:
					alert ("Escolha a imagem que representará a equipe " + (id+1) + ", por favor");
				}
			}

			else if (id == 1) {
				if (imgPrincipalPopup.style.backgroundColor != "rgb(187, 187, 187)" && imgPrincipalPopup.style.backgroundColor != "") {
					var img = document.getElementById("img_equipe_dois").querySelector("img");
					var cor = imgPrincipalPopup.style.backgroundColor;

					for (var j = 0; j < cores.length; j++) {
						if (cor == cores[j]) {
							img.src = "../img/icon_"+j+".png";
							img.style.backgroundColor = cores[j];
							img.alt = nomeCor[j];
						}
					}

					img.style.width = "100%";
					fundo.style.display = "none";
					popupEscolherImagem.style.display = "none";
					imgPrincipalPopup.style.backgroundColor = "#bbb";
					imgPrincipalPopup.style.color = "#000";
					textoAlt.alt = "Imagem principal";
				}
				else {
					alert ("Escolha a imagem que representará a equipe " + (id+1) + ", por favor");
				}
			}

			else if (id == 2) {
				if (imgPrincipalPopup.style.backgroundColor != "rgb(187, 187, 187)" && imgPrincipalPopup.style.backgroundColor != "") {
					var img = document.getElementById("img_equipe_tres").querySelector("img");
					var cor = imgPrincipalPopup.style.backgroundColor;

					for (var j = 0; j < cores.length; j++) {
						if (cor == cores[j]) {
							img.src = "../img/icon_"+j+".png";
							img.style.backgroundColor = cores[j];
							img.alt = nomeCor[j];
						}
					}

					img.style.width = "100%";
					fundo.style.display = "none";
					popupEscolherImagem.style.display = "none";
					imgPrincipalPopup.style.backgroundColor = "#bbb";
					imgPrincipalPopup.style.color = "#000";
					textoAlt.alt = "Imagem principal";
				}
				else {
					alert ("Escolha a imagem que representará a equipe " + (id+1) + ", por favor");
				}
			}

			else if (id == 3) {
				if (imgPrincipalPopup.style.backgroundColor != "rgb(187, 187, 187)" && imgPrincipalPopup.style.backgroundColor != "") {
					var img = document.getElementById("img_equipe_quatro").querySelector("img");
					var cor = imgPrincipalPopup.style.backgroundColor;

					for (var j = 0; j < cores.length; j++) {
						if (cor == cores[j]) {
							img.src = "../img/icon_"+j+".png";
							img.style.backgroundColor = cores[j];
							img.alt = nomeCor[j];
						}
					}

					img.style.width = "100%";
					fundo.style.display = "none";
					popupEscolherImagem.style.display = "none";
					imgPrincipalPopup.style.backgroundColor = "#bbb";
					imgPrincipalPopup.style.color = "#000";
					textoAlt.alt = "Imagem principal";
				}
				else {
					alert ("Escolha a imagem que representará a equipe " + (id+1) + ", por favor");
				}
			}
		}
	}
}