//A version of Wordle. Word guessing Game!

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

class Game{
    wordList = ["apple", "banana", "alphabet", "two", "javascript"];
    constructor(){
        this.answer;
        this.guess = " ";
    }
    init(){
        this.selectWord();

        this.renderAnswerBoxes();
    }    
//choose a word
    selectWord(){
        this.answer = this.wordlist[randomNumber(0, this.wordList.length)]
    }

//Render the answer boxes
    renderAnswerBoxes(){
        let letters = document.querySelector(".letters");

        for(let index in this.answer){
            let box = document.createElement("span")
            box.classList.add("letter");
            box.id = `letter${parseInt(index) + 1}`
            letters.appendChild(box);
        }


    }
//Accept characters
    addKeyUpHandler(){
        window.addEventListener("keyup", (e) => {
            let char = e.key.toUpperCase();
            let charCode = key.charCodeAt(0);
            //A-Z -> 65-90
            if( charCode>= 65 && <= 90){
                //what letter are you guessing?
                if(this.answer.length > this.guess.length){
                    this.guess += char; 
                }
                //if you have guessed all letters, do nothing

            }else if(char == "BACKSPACE" || char == "DELETE"){
                //if you backspace/delete 
            }

        })
    }

//Evaluate guess vs answer
}