
function roleDice(){

}


var player1 = Math.floor((Math.random() * 6) + 1);
var player2 = Math.floor((Math.random() * 6) + 1);

var winner = "";
if(player1 === player2){
  winner = "Its a Draw!";
}
else if(player1 > player2){
  winner = "Player One Wins! 🚩";
}else{ winner = "Player Two Wins! 🚩";}

var player1Img = "images/dice"+player1+".png";
var player2Img = "images/dice"+player2+".png";
var imgAttributes = document.querySelectorAll("img");

imgAttributes[0].setAttribute("src", player1Img);
imgAttributes[1].setAttribute("src", player2Img);
document.querySelector('h2').innerText = winner;
