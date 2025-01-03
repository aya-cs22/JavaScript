// //////////////////////////////////////  Activating Strict Mode //////////////////////////////////////
// Strict Mode => The goal is to write cleaner, safer code that avoids many problems that could occur due to wrong programming habits.

'use strict'
// It will give me an error while using strict mode, but if I remove "use strict" it won't give me anything
x = 5;  //Uncaught ReferenceError: x is not defined at script.js:4:3

function sum(a, a) { // Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at script.js:6:17)
    return a + a;
}
// It prevents you from using certain things that are "reserved" for the future: such as 'interface', 'implements', and other JavaScript things that you will use in the future.
let implements;    //script.js:14 Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:14:1)
let interface;     //script.js:15 Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:15:1)




////////////////////////////////////////  Functions //////////////////////////////////////

function logger() {
    console.log("Hello My name is Aya");
}
//calling
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);

////////////////////////////////////////  Function Declarations vs. Expressions //////////////////////////////////////
console.log(calcAge1(2004)); //20
console.log(calcAge2(2004)); // script.js:35 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization at script.js:35:13

// Function declaration
function calcAge1(birhYear) {
    return 2024 - birhYear;
}
const age = calcAge1(2004);
console.log(age);

//Function expression
const calcAge2 = function (birhYear) {
    return 2024 - birhYear;
}

const age2 = calcAge2(2004);
console.log(age2);

////////////////////////////////////////  Arrow Functions //////////////////////////////////////
const calcAge3 = birhYear => 2024 - birhYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearUntilRetirement = (birhYear, firstName) => {
    const age = 2024 - birhYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} Years`;
}
console.log(yearUntilRetirement(2004, 'Aya'))


//////////////////////////////////////// Functions Calling Other Functions //////////////////////////////////////
function fruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applesPicess = fruitPieces(apples);
    const orangesPicess = fruitPieces(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return `${juice} ${applesPicess} ${orangesPicess} `;
}

console.log(fruitProcessor(2, 4));