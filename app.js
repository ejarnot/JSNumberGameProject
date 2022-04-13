


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
let attemptsEle = document.getElementById("attempts");

btn.addEventListener('click', startGame)
quitBtn.addEventListener('click', endGame)


function startGame() {
    playing = true
    favNumber = 4
    clock = setInterval(timer, 1000)
 

    btn.removeEventListener("click", startGame)
    btn.addEventListener("click", takeGuess)

    btn.textContent = "Guess";
}

function takeGuess() {
    let guess = input.value
    attempts ++
    attemptsEle.textContent = `You have guessed ${attempts} time(s)!`

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
    
        //time stops and resets
        //feedback to default/nothing
        //reset attempts
            attempts = 0
            clearInterval(clock)
            clock = 0;
            playing = false
            feedback.textContent = "-"

            btn.addEventListener("click", startGame)
            btn.removeEventListener("click", takeGuess)

            btn.textContent = "Start";

            attemptsEle.textContent = "-"

        }




function timer() {
        seconds++

        if (seconds > 59) {
            minutes++
            seconds = 0
        }

        if (minutes > 59) {
            minutes = 0
            hours++
        }

    time.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

