const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multyply = (num1, num2, num3) => num1 * num2 * num3;
const result = multyply(4, 12, 3);

const tenTimes = (num) => num * 10;
const outPut = tenTimes(17);


const fiveTimes = num => num * 5
const output = fiveTimes(17);

console.log(sum, result, outPut, output);

const getName = () => `Emtiaz Rahman`;
const names = getName();
console.log(names);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;

}

const total = doMath(12, 5);
console.log(total);