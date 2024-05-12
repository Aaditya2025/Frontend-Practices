//First Dice: 
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage1 = "dice" + randomNumber1 + ".png" ; 

var randomImageSource = "images/" + randomDiceImage1; 

var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageSource);


//Second Dice:
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomdiceImage2 = "dice" + randomNumber2 + ".png"; 

var randomImageSource2 = "images/" + randomdiceImage2; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//If player 1 wins

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Aditya Wins" ; 
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Sunil Wins" ; 
}
else{
  document.querySelector("h1").innerHTML = "Draw" ; 
}
 /*
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 1) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Aditya Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Sunil Loose! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
*/