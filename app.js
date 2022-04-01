//What parts do you need to a game????
//1 game welcome and instructions DONE
//// setup game
//2 introduce player (ask player for their name and address them with that name)
//3 game start DONE
//4 game play (ask user to input a number) DONE
//5 feedback DONE
// // make some feedback about anything over 10 DONE
//6 repeat 3-5 until correct DONE
//7 game end DONE
//8 do you want to play again?


///GAME SETUP
let playing = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let favNumber = 4;
let attempts = 0;
let input = document.getElementById("guess");
let btn = document.getElementById("btn");
let quitBtn = document.getElementById("quitBtn");
let time = document.getElementById("time");
let feedback = document.getElementById("feedback");

btn.addEventListener("btn", startGame)
quitBtn.addEventListener("quitBtn", endGame)

function startGame(){
    favNumber = 4;
    playing = true;
    const time = setInterval(clock, 1000);
    
    function guess(){
        if(playing){
            if(input<favNumber){
                feedback.textContent(`${input} is too low!`)
            } else if(input>favNumber && input<=10){
                feedback.textContent(` ${input} is too high!`)
            }else if(input == favNumber){
                feedback.textContent(`Congrats!!!! ${input} is correct!`);
            }
        }
        if(input > 10){
            feedback.textContent("Try again! that's over 10, silly.");
        }
    }
}

function endGame(){

}




//GAME PLAY
while(favNumber != numGuess){
    numGuess = (prompt("Guess my favorite number!\n\nChoose a number between 1 and 10.\n\n type 'quit' to stop."))
    
    //IF THEY WANT TO QUIT
    if(numGuess.toLowerCase() == "quit"){
        alert("Goodbye! Thanks for playing.")
        break;
    }

   

    numGuess = parseInt(numGuess);
    if (isNaN(numGuess)){
        alert("Please try again with a valid number")
    }else{
        evaluateAnswer();
    }
}

function evaluateAnswer(){
    
}
//DO YOU WANT TO REPLAY THE GAME?? (conditions to which the loop should stop)

