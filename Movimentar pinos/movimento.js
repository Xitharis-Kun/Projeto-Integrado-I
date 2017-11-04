$(document).ready(function(){

$("#clica").click(function(){
  var elem = $("#animate").position(); //pegar posição pino
  var dest = $("#destino").position();//pegar posição destino
   $("#animate").animate({top:dest.top,left:dest.left},1000);// movimeto usando a a posição do destino
});
});
