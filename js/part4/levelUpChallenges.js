/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let alltea = ["green tea", "black tea", "chai", "oolong ;tea"]
let selectedTeas =[];

for(let i = 0; i< alltea.length; i++){
  if(alltea[i] == "chai"){
    break;
  }
  selectedTeas.push(alltea[i]);
  };

//console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let thecities = ["London", "New York","Paris", "Berlin"];
visitedCities = [];
for(let i = 0; i< thecities.length; i++){
  if(thecities[i] != "Paris"){
    visitedCities[i] = thecities[i];
    thecities[i] = ""
  }
}
//console.log(thecities);
//console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

theNumbers = [1,2,3,4,5];
smallNumbers = [];

for(let i of theNumbers){
  if(i === 4){
    break;
  }
  smallNumbers.push(i);
}
//console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
theTeas = ["chai", "green tea", "herbal tea", "black tea"];
preferredTeas = [];

for(let i of theTeas){
  if(i != "herbal tea"){
    preferredTeas.push(i);
  }
}

//console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let raw_citiesPopulation = {
  "London" : 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
}
//const citiesPopulation = new Object();

let cityPopulations = {};
//console.log(typeof (raw_citiesPopulation));

for (const city in raw_citiesPopulation){
  if (city == "Berlin"){
    break;
  }
  cityPopulations[city] = raw_citiesPopulation[city];

}
//console.log(cityPopulations);
/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */
let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
};
let largeCities ={};

for(const city in worldCities){
  if(worldCities[city] < 3000000){
    continue
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);
/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach(function(element){
  if (element === "chai"){
    return;
  }
  availableTeas.push(element);
})
// console.log(availableTeas);


// () => {
//   console.log("abc");
// }
/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myworldCities.forEach(city => {
  if (city === 'Sydney'){
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
number_array = [2,5,7,9];
doubledNumbers = [];
// for(let i of number_array){
//   if(i != 7){
//     doubledNumbers.push(i*2);
//   }

// }
number_array.forEach(number => {
  if(number === 7){
    return
  }
  doubledNumbers.push(number*2);
});
// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

stored_tea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
shortTeas = [];

for (const element of stored_tea) {
  if(element.length > 10){
    break
  }
  shortTeas.push(element);
}

console.log(shortTeas);