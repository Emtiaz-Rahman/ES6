const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);


const max = Math.max(23, 99, 65);
console.log(max);

const maxNumber = Math.max(...numbers);
console.log(maxNumber);
// new array make
const numbers2=[...numbers];
numbers.push(55);
console.log(numbers2); 
