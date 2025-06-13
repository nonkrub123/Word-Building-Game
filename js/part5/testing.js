
function whatAmI(input) {
  let typeofinput= typeof input;
  let answer = "I'm a" + " " + answer +"!";
  return answer;
}

// whatAmI(1)

let vowels = ['A', 'E', 'I', 'O', 'U'];
let test = ['A,E,I,O,U'];

function countVowels(str) {
  const vowel = ['A','E','I','O','U']
  let answer = [];

  for(let i of str){
    let word = i.toUpperCase()
    if(vowel.includes(word,0)){
      answer.push(word);
    }
  }
  
return answer.length;
}

console.log(countVowels(test));