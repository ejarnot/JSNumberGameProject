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

// What starts the game?
// Click the start button
// What happens when you start the game?
// The clock starts
// The fav number is generated/set
// Game status is set to 'playing'
// What is a 'guess'?
// User inputs a number
// Clicks a button
// What happens when they guess?
// get the guess
// evaluate the guess
// give feedback
// How does game end?
// How do you restart the game?
// Can you quit?


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
let clock;
let feedback = document.getElementById("feedback");

btn.addEventListener('click', startGame)
quitBtn.addEventListener('click', endGame)


function startGame() {
    playing = true
    favNumber = 4
    clock = setInterval(() => {
        time.textContent = seconds++
     
    }, 1000)
 

    btn.removeEventListener("click", startGame)
    btn.addEventListener("click", takeGuess)

    btn.textContent = "Guess";
}

function takeGuess() {
    let guess = input.value
    attempts++
    console.log(attempts);

    if (playing) {
        if (guess < favNumber) {
            feedback.textContent = `${guess} is too low!`
        } else if (guess > favNumber) {
            feedback.textContent = ` ${guess} is too high!`
        } else if (guess == favNumber) {
            feedback.textContent = `Congrats!!!! ${guess} is correct!`
        }
    }
    
}

//need something to show number of attempts!
//don't understand how to "activate" the quitBtn

function endGame() {
    quitBtn.onclick = function quit(){
        //time stops and resets
        //feedback to default/nothing
        //reset attempts
        if(quitBtn.onclick){
            attempts = 0
            playing = false
            feedback.textContent = "-"
        }
    }
}






