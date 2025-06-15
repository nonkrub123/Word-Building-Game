let inputsection = document.querySelector(".input-section")
let gamesection = document.querySelector(".game-section")
let feedbacksection =  document.querySelector(".feedback-section")
let targetWords = document.getElementById("targetWords");
let feedbacktext = document.getElementById("feedbackMessage");
let wordcontainer = document.getElementById("sourceWords");//get sourceword wordcontainer

let score = 0;
class player{
    constructor(sentencearray,sentenceindex,currrentsentence,tries){
        this.sentencearray = sentencearray;
        this.sentenceindex = sentenceindex;
        this.currrentsentence = currrentsentence;
        this.tries = tries;
    }
    getcurrentsentence(self){
        if (this.sentenceindex >= this.sentencearray.length) {
            console.log("No more sentences");
            return;
        }
        return this.currrentsentence =this.sentencearray[this.sentenceindex];
    }
    randomWordOrders(){
        for(let word of wordcontainer.children){//random word order
            word.style.order = Math.floor(Math.random() * wordcontainer.children.length)
        }        
    }
    getnewsentence(){
        let inputsentence = document.getElementById("inputSentence").value;//get inputsentence
        if(inputsentence){//If input sentence isn't blank or null
            let wordcontainer = document.getElementById("sourceWords");//get sourceword wordcontainer
            wordcontainer.innerHTML="";//remove all child or word in sourceword

            for(let word of this.sentencearray[this.sentenceindex]){//word is iterate through current sentence array
                let wordElement = document.createElement("span");
                wordElement.classList.add("word");
    
                let newWord = document.createTextNode(word);
                wordElement.appendChild(newWord);
    
                wordcontainer.appendChild(wordElement);
            }
        this.randomWordOrders();//random words order
        }
    }
    nextsentence(){
        if(this.sentencearray.length < this.sentenceindex){
            return false;
        }
        [...targetWords.children].forEach(element => {element.remove()});
        this.sentenceindex += 1;
        score = 0;
        this.getcurrentsentence();
        this.getnewsentence();
    }
}

let player1 = new player([[]],0,"",0);

document.getElementById("submit").addEventListener("click", function(){
    let inputsentence = document.getElementById("inputSentence").value;
    if(inputsentence){
        let sentencearray = inputsentence.split("\n").map((sentence) => sentence.split(" "));
        player1 = new player(sentencearray,0,"",0);
        player1.getcurrentsentence();
    }
    else{
        alert("Please input something. I beg you")
    }

})
        
// start game button
document.getElementById("start-game").addEventListener("click", function(){
    player1.getnewsentence();
    inputsection.classList.add("hidden")//Hidden input section
    gamesection.classList.remove("hidden")//show gamesection
})
document.getElementById("sourceWords").addEventListener("click", function(event){
    if(event.target.classList.contains("word")){
        let selectedWord = document.createElement("span");
        selectedWord.classList.add("choosen-word");
        
        let newWord = document.createTextNode(event.target.textContent);
        selectedWord.appendChild(newWord);

        targetWords.appendChild(selectedWord);
    }
})

document.querySelector(".button").addEventListener("click", function(event){
    if(event.target.id === "checkSentences"){
        feedbacksection.classList.remove("hidden");
        score = 0;
        if(targetWords.children.length !== player1.currrentsentence.length) {
            feedbacktext.textContent = "Number of words don't match! Try again!"
            return;
        }
        for(let i = 0; i< targetWords.children.length; i++){
            console.log("------------------------------");
            console.log(player1.currrentsentence[i]);
            console.log(targetWords.children[i].textContent);
            if(player1.currrentsentence[i] === targetWords.children[i].textContent){
                score += 1;;
            }
        }
        feedbacktext.textContent = `You got ${score} corrected words! and ${player1.currrentsentence.length - score} incorrected words!`
    }
    if(event.target.id === "removelastword"){
        if(targetWords.children.length != 0){
            targetWords.lastElementChild.remove();
        }
        else{
            console.log("Removed all targetWords already!");
        }
    }
    if(event.target.id === "clearallword"){
        if(targetWords.children.length != 0){
            [...targetWords.children].forEach(element => {element.remove()});
        }
        else{
            console.log("Clear all word already!");
        }
    }
})

document.getElementById("nextSentence").addEventListener("click", function(){
    let totalWords = player1.currrentsentence.length;
    let baseline = Math.ceil(totalWords/2)
    if(score >= baseline){//If score is high enough to go to next sentence
        if(player1.currrentsentence != false){//check if we play go through all input sentence
        // //remove all user choosen words
            player1.nextsentence();
        }
        
    }
    else{
        feedbacktext.textContent = `You need ${baseline} corrected words to proceed to next sentences`
        console.log(score);
    }
})
// document.getElementById("checkSentences").addEventListener("click", function(event){
//     feedbacksection.classList.remove("hidden");

// })