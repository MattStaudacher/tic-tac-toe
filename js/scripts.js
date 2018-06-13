
/***************************** BACK END ******************************/
var counter = 0;

function whosTurn() {
  if (counter %2 === 0){
    return "X";
  } else {
    return "O"
  }
}


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
  $("#0-0").text(whosTurn());
  counter++;
  alert(counter);
});

$("#0-1").click(function(){
  $("#0-1").text(whosTurn());
  counter++;
  alert(counter);
});

$("#0-2").click(function(){
  $("#0-2").text(whosTurn());
  counter++;
  alert(counter);
});

$("#1-0").click(function(){
  $("#1-0").text(whosTurn());
  counter++;
  alert(counter);
});

$("#1-1").click(function(){
  $("#1-1").text(whosTurn());
  counter++;
  alert(counter);
});

$("#1-2").click(function(){
  $("#1-2").text(whosTurn());
  counter++;
  alert(counter);
});

$("#2-0").click(function(){
  $("#2-0").text(whosTurn());
  counter++;
  alert(counter);
});

$("#2-1").click(function(){
  $("#2-1").text(whosTurn());
  counter++;
  alert(counter);
});

$("#2-2").click(function(){
  $("#2-2").text(whosTurn());
  counter++;
  alert(counter);
});
});
