// Number

let balance = 120;
let anotherBalance = new Number(120)

console.log(balance)
console.log(anotherBalance)

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = true;
let isReallyActive = new Boolean(true) //not recommended

// null and undefined

let firstname;
let lastname = null;
console.log(firstname);
console.log(lastname);

//string

let myString = "hello";
let myStringone = 'Hola';
let username = 'nonkrub123';

let oldGreet = myString + " " + "hitesh";

let greetmessage = `Hello ${username} !`;
let demoone = `Value is ${2**2}`;

console.log(greetmessage);
console.log(demoone);

let sm1 = Symbol() //unique value
let sm2 = Symbol()

console.log(sm1 == sm2);//false cuz it's not same

let sm3 = Symbol("nonkrub123");
let sm4 = Symbol("nonkrub123"); //still unique lmao

console.log(sm3==sm4);