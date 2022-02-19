function add(number1,number2=15 ) {
    console.log(number1,number2);
    const total = number1 + number2;
    return total;
}
const result = add(15);
console.log(result);