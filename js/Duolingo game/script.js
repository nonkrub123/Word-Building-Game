// let username;
// username = window.prompt("Enter username")
// console.log(username);

// document.getElementById("submit").addEventListener("click", function(){
// let sentence = document.getElementById("inputSentence").value;
// console.log(sentence);

// let display_sentences = document.createTextNode(sentence);

// let display = document.getElementById("display");
// display.appendChild(display_sentences);
// })

// document.getElementById("submit").addEventListener("click", function(){
// let inputsentence = document.getElementById("inputSentence").value;
// console.log(inputsentence);

// let display_sentences = document.createElement('p');
// display_sentences.textContent = inputsentence;

// let display = document.getElementById("display");
// display.appendChild(display_sentences);
// })

    let inputsection = document.querySelector(".input-section")
    let gamesection = document.querySelector(".game-section")
    let feedbacksection =  document.querySelector(".feedback-section")
    let gamestate = "mainmenu";
    
    document.getElementById("submit").addEventListener("click", function(){
        let inputsentence = document.getElementById("inputSentence").value;
        console.log(inputsentence);
        
        let sentencearray = inputsentence.split("\n").map((sentence) => sentence.split(" "));
        
        console.log(sentencearray);
        // for(let word of sentencearray){
            // let display_sentences = document.createElement('p');
            // display_sentences.textContent = word;
            
            // let display = document.getElementById("display");
            // display.appendChild(display_sentences);
            // }
        })
        
        // start game button
        document.getElementById("start-game").addEventListener("click", function(){
            console.log(gamesection.classList);
            inputsection.classList.add("hidden")
            gamesection.classList.remove("hidden")
            gamestate = "playing";
        })
        
