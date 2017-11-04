//Um botão vai chamar essa função e vai ter uma div com a id "corDado" mara a mudança da cor do background
function rolardado(){
		
        for (var i =1; i<4;i++){
        setTimeout(function(){ document.getElementById("corDado").style.backgroundColor = "blue"}, (i/2)*300);
        setTimeout(function(){document.getElementById("corDado").style.backgroundColor = "red" }, (i/2)*500);
        setTimeout(function(){ document.getElementById("corDado").style.backgroundColor = "yellow"}, (i/2)*700);
        setTimeout(function(){document.getElementById("corDado").style.backgroundColor = "green" },(i/2)*900);
        setTimeout(function(){ document.getElementById("corDado").style.backgroundColor = "orange"}, (i/2)*1100);}
 setTimeout(function(){
    valor = Math.round(Math.random()*99);
    if(valor<=39){
            document.getElementById("corDado").style.backgroundColor = 'yellow';$("body").append("<br>pronto");
        } else  if(valor<=59){
            document.getElementById("corDado").style.backgroundColor = 'green';$("body").append("<br>pronto");
        }else  if(valor<=79){
            document.getElementById("corDado").style.backgroundColor = 'orange';$("body").append("<br>pronto");
        }else  if(valor<=89){
           document.getElementById("corDado").style.backgroundColor = 'red';$("body").append("<br>pronto");
        }else  if(valor<=95){
         document.getElementById("corDado").style.backgroundColor = 'purple';$("body").append("<br>pronto");
            $("body").append("<br>imagem desafio");
        }else  if(valor<=99){
         document.getElementById("corDado").style.backgroundColor = 'blue';$("body").append("<br>pronto");
            $("body").append("<br>imagem I Love you");
        }},3000);
        
    
}
