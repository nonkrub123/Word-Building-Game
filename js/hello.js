let a = [[1, 2], [3, 4]];
let b = [...a];

a[0].push(9);
b.pop();

// console.log("a:",typeof a, a);
// console.log("b:",typeof b,b);
// console.log(typeof a); // "object"
// console.log(Array.isArray(a)); // true ✅

function stringToNumber(input) {
    if(isNaN(input) == true){
        return "Not a number"
    }
    else{
        return Number(input)
    }
}

console.log(stringToNumber("kfc"));