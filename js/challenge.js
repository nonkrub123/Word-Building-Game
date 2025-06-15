const squareNumbers = (arr) => (arr.map((x) => Math.sqrt(x)));

// console.log(squareNumbers([25,100]));

const numbers = [1, 2, 3];

const newNumbers = numbers.map(num => num * 2);
const oldNumbers = numbers.forEach(num => num * 2);

console.log(newNumbers, oldNumbers);


const result = numbers.forEach(num => {
  return num * 2;
});

console.log(result); 
