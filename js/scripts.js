
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
  $("#board").show();
  $(".player").show();
// alert(boardArray.length);
}

function Game() {

}


function isOver(){

}
var boardArray = [
                  [],[],[],
                  [],[],[],
                  [],[],[]
                          ];


var player1;
var player2;

/*******************  FRONT END (USER INTERFACE) *********************/
$(document).ready(function() {
  var gameBoard = new Board();





$("#x-button").click(function() {
  player1 = "X";
  player2 = "O";
  $(".blah2").show();
  // $("#player-choice").show();
  // $("#player-choice2").show();
});



$("#o-button").click(function() {
  player1 = "O";
  player2 = "X";
  $(".blah1").show();
  // $("#other-choice").show();
  // $("#other-choice2").show();
});








$("#0-0").click(function(){
  $("#0-0").text(whosTurn());  // fill user (visual) board with X or O
  boardArray [0] = whosTurn(); // fill array/board with X or O
  counter++; // add counter to make it odd or even to determine whosTurn using %2

  //isOver();
});

$("#0-1").click(function(){
  $("#0-1").text(whosTurn());
  boardArray [1] = whosTurn();
  counter++;

});

$("#0-2").click(function(){
  $("#0-2").text(whosTurn());
  boardArray [2] = whosTurn();
  counter++;

});

$("#1-0").click(function(){
  $("#1-0").text(whosTurn());
  boardArray [3] = whosTurn();
  counter++;

});

$("#1-1").click(function(){
  $("#1-1").text(whosTurn());
  boardArray [4] = whosTurn();
  counter++;

});

$("#1-2").click(function(){
  $("#1-2").text(whosTurn());
  boardArray [5] = whosTurn();
  counter++;

});

$("#2-0").click(function(){
  $("#2-0").text(whosTurn());
  boardArray [6] = whosTurn();
  counter++;

});

$("#2-1").click(function(){
  $("#2-1").text(whosTurn());
  boardArray [7] = whosTurn();
  counter++;

});

$("#2-2").click(function(){
  $("#2-2").text(whosTurn());
  boardArray [8] = whosTurn();
  counter++;
});
});
