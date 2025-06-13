//checking if a number is greater than other number

let num1 = 5;
let num2 = 8;

if (num1 > num2) {
    console.log("num 1 is greater than num 2"); 
}
else {
    console.log("num 1 isn't greater than num 2")
}

let username = "chai";
let anotherusername = "chai";

if (username == anotherusername) {
    console.log("Pick another username");
}

let score = 44;

if (typeof score === 'number') {
    console.log("Yep, it's a number");
}
else {
    console.log("No that is not a number");
}

let isTeaReady = false;

if (isTeaReady) {
    console.log("Tea is ready");
}
else {
    console.log("Tea isn't ready");    
}

//check array is empty or no

let items = [];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array isn't empty");
    
}
log
let age = 15;
let result = age >= 18 ? "You can drink" : "You can't drink";