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

btn.addEventListener('click', clickBtn )
quitBtn.addEventListener('click', clickQuitBtn )
time.addEventListener('start', timeStart )
input.addEventListener('input', guessValue )

function clickBtn(){

}

function clickQuitBtn(){

}

function timeStart(){

}

function guessValue(e){
    log.textContent = e.target.value;
}

function startGame(input){
    playing = true
    favNumber = 4
    time = setInterval(clock, 1000)
    if(playing){
        if(input<favNumber){
            feedback.textContent(`${input} is too low!`)
        } else if(input>favNumber && input<=10){
            feedback.textContent(` ${input} is too high!`)
        }else if(input == favNumber){
            feedback.textContent(`Congrats!!!! ${input} is correct!`);
        }
    }
}

function endGame(status){
   if(status === 'win'){
       document.quitBtn.textContent("You win!");
   }else if(status != 'win'){
       document.btn.textContent("That's not it! Try again?")
   }else{
       document.quitBtn.textContent("Do you want to quit?")
   }
}






