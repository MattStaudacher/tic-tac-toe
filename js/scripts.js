
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // var counter = 0;
  // for (var i = 0; i < boardArray.length; i++)
  // {
  //     if(boardArray[i] === "x"){
  //       counter ++;
  //
  //       if(counter === 3){
  //         alert("player X wins")
  //       }
  //
  //     }else{
  //       counter = 0;
  //     }
  // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //alert("fjkdlsafjl;j")
  // if(boardArray[0] === "X" && boardArray[1] === "X" && boardArray[2] === "X"){
  //   alert("WINNER");
  // }
  // if(boardArray[3] === "X" && boardArray[4] === "X" && boardArray[5] === "X"){
  //   alert("WINNER");
  // }
  // if(boardArray[6] === "X" && boardArray[7] === "X" && boardArray[8] === "X"){
  //   alert("WINNER");
  // }
  //
  // if(boardArray[0] === "O" && boardArray[1] === "O" && boardArray[2] === "O"){
  //   alert("WINNER");
  // }
  // if(boardArray[3] === "O" && boardArray[4] === "O" && boardArray[5] === "O"){
  //   alert("WINNER");
  // }
  // if(boardArray[6] === "O" && boardArray[7] === "O" && boardArray[8] === "O"){
  //   alert("WINNER");
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
var boardArray = [
                  "","",[],
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
  isOver();
});

$("#0-1").click(function(){
  $("#0-1").text(whosTurn());
  boardArray [1] = whosTurn();
  counter++;
  isOver();
});

$("#0-2").click(function(){
  $("#0-2").text(whosTurn());
  boardArray [2] = whosTurn();
  counter++;
  isOver();
});

$("#1-0").click(function(){
  $("#1-0").text(whosTurn());
  boardArray [3] = whosTurn();
  counter++;
  isOver();
});

$("#1-1").click(function(){
  $("#1-1").text(whosTurn());
  boardArray [4] = whosTurn();
  counter++;
  isOver();
});

$("#1-2").click(function(){
  $("#1-2").text(whosTurn());
  boardArray [5] = whosTurn();
  counter++;
  isOver();
});

$("#2-0").click(function(){
  $("#2-0").text(whosTurn());
  boardArray [6] = whosTurn();
  counter++;
  isOver();
});

$("#2-1").click(function(){
  $("#2-1").text(whosTurn());
  boardArray [7] = whosTurn();
  counter++;
  isOver();
});

$("#2-2").click(function(){
  $("#2-2").text(whosTurn());
  boardArray [8] = whosTurn();
  counter++;
  isOver();
});
});
