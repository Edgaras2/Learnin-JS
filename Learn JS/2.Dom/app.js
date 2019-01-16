
var scores, roundScore, activePlayer, gamePlay, rep;

init();
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");

}

// 
// // document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// var x = document.querySelector("#score-0").textContent;
// console.log(x);



//annonymus function
document.querySelector(".btn-roll").addEventListener("click", function() {
    if(gamePlay) {

       var dice = Math.floor(Math.random() * 6) +1;
       var dice2 = Math.floor(Math.random() * 6) +1;
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "img/dice-" + dice + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice2").src = "img/dice-" + dice2 + ".png";

        if(dice != 1 && dice2 != 1) {
            roundScore += dice + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        
     /* CHALLANGE 2
        if(dice == 6 && rep == 6) {
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0";
            alert("You rolled two 6 in a row");
            nextPlayer();
        } else if(dice !== 1) {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            alert("you rolled 1 , next player turn");
            nextPlayer();
        }

    }
     rep = dice;
     rep2 = dice2
    console.log(rep);
  */
    }
} );

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function() {
    if(gamePlay) {
        scores[activePlayer] += roundScore;

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
        var input = document.querySelector(".final-score").value;
        var winningScore;
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //check if game won
        if(scores[activePlayer] >= winningScore) {
            document.getElementById("name-"+ activePlayer).textContent = "Winner";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlay = false;
            alert("Player " + (activePlayer+1) + " WON");
        } else {
            nextPlayer();
        }  
    }
   
});

document.querySelector(".btn-new").addEventListener("click", init);
