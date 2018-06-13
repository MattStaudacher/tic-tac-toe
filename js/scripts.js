
/***************************** BACK END ******************************/
function Player(name) {
  this.name = name;

}

function Space() {

}
function Board() {

}

function Game() {

}


/*******************  FRONT END (USER INTERFACE) *********************/
$(document).ready(function() {
  var gameBoard = new Board();

$("#0-0").click(function(){
  //alert("tester");
  $("#0-0").text("X")

});
$("#0-1").click(function(){
  alert("tester");
});
$("#0-2").click(function(){
  alert("tester");
});
$("#1-0").click(function(){
  alert("tester");
});
$("#1-1").click(function(){
  alert("tester");
});
$("#1-2").click(function(){
  alert("tester");
});
$("#2-0").click(function(){
  alert("tester");
});
$("#2-1").click(function(){
  alert("tester");
});
$("#2-2").click(function(){
  alert("tester");
});
});
