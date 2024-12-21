var randP1 = Math.floor(Math.random()*6)+1;
var randP2 = Math.floor(Math.random()*6)+1;

var diceP1src = "assets/dice"+randP1+".png";
var diceP2src = "assets/dice"+randP2+".png";

var diceP1 = document.querySelector(".diceP1 img");
var diceP2 = document.querySelector(".diceP2 img");

diceP1.setAttribute("src", diceP1src) ;
diceP2.setAttribute("src", diceP2src) ;

var p1ResultText = document.querySelector("#p1Result");
var p2ResultText = document.querySelector("#p2Result");


if(randP1>randP2){
  p1ResultText.textContent="Winner"
  p1ResultText.style.color="#00B050";

  p2ResultText.textContent="Loser"
  p2ResultText.style.color="#C74A44";
  
}else if(randP1<randP2){
  p2ResultText.textContent="Winner"
  p2ResultText.style.color="#00B050";
  p1ResultText.textContent="Loser"
  p1ResultText.style.color="#C74A44";
}else{
  p1ResultText.textContent="Tie"
  p2ResultText.textContent="Tie"
}