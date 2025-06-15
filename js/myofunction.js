function filterNumbers(arr) {
    let answer = []
    for(let i of arr){
        let converted = Number(i);
        if(!isNaN(converted)){
            answer.push(converted);
        }
    }
  return answer;
}

let a = ["String", 1 ,2 , true];
let answer = filterNumbers(a);
// console.log(typeof answer, answer);

function reverseArray(arr) {
    let length = arr.length;
    let answer = [];
    for(let i = 0; i<arr.length; i++){
        answer[i] = arr[length-i-1];
    }
  return answer;
}

numberorder = [1,2,3,4,5,6,7,8,9,10];
// console.log(reverseArray(numberorder));

function reverseArray(arr) {
    let loop = Math.floor(arr.length/2);
    let length = arr.length
    for(let i = 0; i<loop; i++){
        let temp = arr[i];
        arr[i] = arr[length-i-1];
        arr[length-i-1] = temp;
    }
  return arr;
}

numberorder = [3,2,1];
reverseArray(numberorder);
// console.log(numberorder);

numberorder = [3,2,1];
let reverse = reverseArray(numberorder);
// console.log(reverse);
// console.log(numberorder);

function findMax(arr) {
    let length = arr.length;
    let maxnumber = -Infinity;
    for(let i = 0; i<length; i++){
        if(arr[i]>maxnumber){
            maxnumber = arr[i];
        }
    }
  return maxnumber;
}
findMaximum = (arr) => {
    return Math.max(...arr)
}
// console.log(findMax(numberorder));
// console.log(findMaximum(numberorder));

function removeDuplicates(arr) {
    return [...new Set(arr)];;
  }
numberarray = [1,2,3,3,4,4,4,4,5,5,6,6]
console.log(new Set(numberarray));
