var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceSrc1 = "images/" + randomDiceImage1;
document.querySelector(".img1").setAttribute("src", randomDiceSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceSrc2 = "images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src", randomDiceSrc2);

var result = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  result.textContent = "🚩 Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  result.textContent = "Player2 Wins 🚩";
} else {
  result.textContent = "Draw!";
}
