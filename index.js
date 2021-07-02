var randomNumber1 = Math.floor(Math.random()*6) +1;

var imageSource1 = "./images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor(Math.random()*6) +1;
var imageSource2 = "./images/dice"+randomNumber2+".png";


var dice1Value = document.querySelector(".img1").setAttribute("src",imageSource1);
var dice2Value = document.querySelector(".img2").setAttribute("src",imageSource2);
winner();

function winner(){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText="🚩Player 1 Wins";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerText="Player 2 Wins🚩";
    }
    else{
        document.querySelector("h1").innerHTML ="Draw!!"
    }
}

function reset(){
    document.querySelectorAll("img")[0].src= "./images/dice6.png";
    document.querySelectorAll("img")[1].src= "./images/dice6.png";
}


