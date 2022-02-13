
let arrayDiceOne = [diceResultsOne, diceResultsTwo, diceResultsThree, diceResultsFour, diceResultsFive, diceResultsSix];
let arrayDiceTwo = [secondDiceResultsOne, secondDiceResultsTwo, secondDiceResultsThree, secondDiceResultsFour, secondDiceResultsFive, secondDiceResultsSix];

var playerOneCount = 0;
var playerTwoCount = 0;

function diceResults (){

    let firstRandomNum = Math.floor(Math.random()*6)+1;
    let secondRandomNum = Math.floor(Math.random()*6)+1;

    for(var i=1; i<7; i++)
    {
        if(firstRandomNum===i)
        {
            var index1 = i;
            // alert(`Player one's dice = ${index1}`);
            arrayDiceOne[(index1-1)]();
        }
    }

    for(var i=1; i<7; i++)
    {
        if(secondRandomNum===i)
        {
            var index2 = i;
            // alert(`Player two's dice = ${index2}`);
            arrayDiceTwo[index2-1]();
        }
    }

    if(firstRandomNum > secondRandomNum)
    {
        playerOneCount+=1;
        document.querySelector(".ScoreOne").textContent = `Player 1 Scored : ${playerOneCount}`;
    }
    else if(firstRandomNum < secondRandomNum)
    {
        playerTwoCount+=1;
        document.querySelector(".ScoreTwo").textContent = `Player 2 Scored : ${playerTwoCount}`;
    }
    else
    {
        playerTwoCount+=1;
        document.querySelector(".ScoreTwo").textContent = `Player 2 Scored : ${playerTwoCount}`;
        
        playerOneCount+=1;
        document.querySelector(".ScoreOne").textContent = `Player 1 Scored : ${playerOneCount}`;

    }
}

function diceReset()
{
    document.querySelector(".dice1 img").setAttribute("src", "images/dice1.png"); 
    document.querySelector(".dice2 img").setAttribute("src", "images/dice1.png"); 

    playerOneCount = 0;
    playerTwoCount = 0;

    document.querySelector(".ScoreOne").textContent = `Player 1 Scored : 0`;
    document.querySelector(".ScoreTwo").textContent = `Player 2 Scored : 0`;


}


document.querySelector(".btnThrow").addEventListener("click",diceResults);
document.querySelector(".btnReset").addEventListener("click",diceReset);


function diceResultsOne(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice1.png"); 
}

function diceResultsTwo(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice2.png"); 
}

function diceResultsThree(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice3.png"); 
}

function diceResultsFour(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice4.png"); 
}

function diceResultsFive(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice5.png"); 
}

function diceResultsSix(){
   
    document.querySelector(".dice1 img").setAttribute("src", "images/dice6.png"); 
}



function secondDiceResultsOne(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice1.png"); 
}

function secondDiceResultsTwo(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice2.png"); 
}

function secondDiceResultsThree(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice3.png"); 
}

function secondDiceResultsFour(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice4.png"); 
}

function secondDiceResultsFive(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice5.png"); 
}

function secondDiceResultsSix(){
   
    document.querySelector(".dice2 img").setAttribute("src", "images/dice6.png"); 
}


