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

if (status === 'win') {
    quitBtn.textContent ="You win!";
} else if (status != 'win') {
    document.btn.textContent = "That's not it! Try again?"
} else {
    document.quitBtn.textContent = "Do you want to quit?"
}





function startGame(){
    favNumber = 4;
    playing = true;
    const time = setInterval(clock, 1000);
    
    function guess(input){
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