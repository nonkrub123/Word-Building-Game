let sum = 0;
let i = 1;
/*
while (i<=5) {
    sum += i; //sum = sum + i
    i++;
    console.log(sum);
}
*/

/*
// second challenge
let countdown = [];
let j = 5;
while (j > 0){
    countdown.push(j);
    console.log(j);
    j--;
}
*/

/*
let teaCollection = [];
let tea = "abc";

do {
    tea = prompt(`Enter your favorite tea (type stop to finish)`)
    if (tea !== "stop"){
        teaCollection.push(tea);
    }
} while (tea !== "stop");

*/

/*
let total = 0;
let k = 1;
do {
    total +=k;
    k++;
} while (k<=3);
console.log(total);

*/

/*
let multipliedNumbers = [];
let numbers = [2,4,6];

for (let index = 0; index < numbers.length; index++){
    multipliedNumbers[index] = numbers[index] * 2;
}
console.log(multipliedNumbers);

*/
let thecities = ["Paris", "New York", "Tokyo", "London"];
cityList = [];
for(let i = 0; i< thecities.length; i++){
    cityList[i] = [...thecities[i]];
    thecities.pop();
    console.log(cityList[i]);
}
console.log(cityList);

thecities = ["Paris", "New York", "Tokyo", "London"];
cityList = [];
for(let i = 0; i< thecities.length; i++){
    cityList[i] = thecities[i];
    console.log(cityList[i]);
}
console.log(cityList);