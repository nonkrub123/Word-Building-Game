let inputsection = document.querySelector(".input-section")
let gamesection = document.querySelector(".game-section")
let feedbacksection =  document.querySelector(".feedback-section")
class player{
    constructor(sentencearray,sentenceindex,currrentsentence,tries){
        this.sentencearray = sentencearray;
        this.sentenceindex = sentenceindex;
        this.currrentsentence = currrentsentence;
        this.tries = tries;
    }
    getcurrentsentence(self){
        this.currrentsentence =this.sentencearray[this.sentenceindex]
    }
    scatterword(self){

    }
}

let player1 = new player([[]],0,"",0);

document.getElementById("submit").addEventListener("click", function(){
    let inputsentence = document.getElementById("inputSentence").value;
    let sentencearray = inputsentence.split("\n").map((sentence) => sentence.split(" "));
    player1 = new player(sentencearray,0,"",0);
    player1.getcurrentsentence();
})
        
// start game button
document.getElementById("start-game").addEventListener("click", function(){
    inputsection.classList.add("hidden")
    gamesection.classList.remove("hidden")

    for(word of player1.currrentsentence){
        let wordElement = document.createElement("span");
        wordElement.classList.add("word");

        let newWord = document.createTextNode(word);
        wordElement.appendChild(newWord);

        let wordcontainer = document.getElementById("sourceWords");
        // console.log(wordElement);
        wordcontainer.appendChild(wordElement);
    }
    
    // document.querySelectorAll(".word").forEach((word) =>{
    //     word.addEventListener("click", function(){
    //         console.log("click the word");
    //         let targetWords = document.getElementById("targetWords");
    //         targetWords.appendChild(this.value);
    // })
    // })
})

document.getElementById("sourceWords").addEventListener("click", function(event){
    if(event.target.classList.contains("word")){
        let selectedWord = document.createElement("span");
        selectedWord.classList.add("choosen-word");

        console.log(event);
        let newWord = document.createTextNode(event.target.textContent);
        selectedWord.appendChild(newWord);
    
        let targetWords = document.getElementById("targetWords");
        targetWords.appendChild(selectedWord);
    }
})
