// ////////////////////////////////////// Values and Variables //////////////////////////////////////

// // Declare variables called country, continent and population
// // and assign their values according to your own country (population in millions).


let country = "Egypt";
let continent = "africa";
let population = 112.7;


// ////////////////////////////////////// CHALLENGE #1 //////////////////////////////////////

// // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
// // Your task is to write some code to help them:
// // Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// // Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// // Log the value of BMIMark and BMIJohn to the console.
// // BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// // TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


let massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
BMIMark = massMark / (heightMark * heightMark)
BMIJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


// ////////////////////////////////////// Strings and Template Literals //////////////////////////////////////

const firstName = "Aya";
const lastName = "Anwar";
const myFirstJob = "Programmer";
const presentMySelf = "I'm " + firstName + " " + lastName + " and my first job is a " + myFirstJob + " !";
const presentMySelfWithEcma = `I'm ${firstName} ${lastName} and my first job is a ${myFirstJob} !`;
console.log(presentMySelf);
console.log(presentMySelfWithEcma);


console.log('string \n\
    is multipule \n\
    lines');

console.log(`String
is multiple
lines`)


// ////////////////////////////////////// Taking Decisions: if / else Statements //////////////////////////////////////

const age = 12;
if (age >= 18) {
    console.log("Sarah can start driving license")
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is tooooo young. wait anthor ${yearLeft} years`);
}



// ////////////////////////////////////// CHALLENGE #2 //////////////////////////////////////

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// ////////////////////////////////////// Type Conversion and Coercion //////////////////////////////////////

// Type Conversion
const inputYear = '1991';
console.log(inputYear + 18); // output => 199118   becouse number concate with string "1991"

console.log(Number(inputYear) + 18) // output: 2009  because string convert to number by Number()
console.log(Number("aya"))  // output : NaN => (Not-a-Number) because "aya" invaild number
console.log(typeof (NaN)) // OUTPUT : number      NaN is used to indicate that a calculation or conversion to a number was unsuccessful.

console.log(78);
console.log(String(78));


//Type Coercion
console.log("I'm a " + 20 + " years old")  // number 20 convert to String
console.log(23 - '10' - 3);   //OUTPUT => 10      number 20 convert to number
console.log(23 + '10' + 3);  //OUTPUT => 23103      number 23, 3 convert to String
console.log('22' * '2');    //OUTPUT => 44
console.log('22' / '2');    //OUTPUT => 44

let n = '1' + 1; // string => 11
n = n - 1; // 11 - 1 = 10
console.log(n);  //OUTPUT => 10
console.log(2 + 3 + 4 + '5'); //9 + '5' = 95
console.log('10' - '4' - '3' - 2 + '5'); //'10' - '4' - '3' - 2 = 1      => 1 +'5' = 15 15 is a String



// ////////////////////////////////////// Truthy and Falsy Values //////////////////////////////////////

// 5 Falsy Values = (0, "", null, undefined, NaN)
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// example for Truthy values
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(true));       // true

const money = 0;
if (money) {
    console.log("Don't dpend it all!");
} else {
    console.log("You should get a job!!!!!!!");
}

let heightt;
if (heightt) {
    console.log("heghit is defined");
} else {
    console.log("heghit is undefined");
}


// ////////////////////////////////////// Equality Operators: == vs. === //////////////////////////////////////
console.log(18 == '18')  //true
console.log(18 === '18') //false

// OUTPUT => Sarah Just became an adult!!!!!
const ageSarah = '18';
if (ageSarah == 18) {
    console.log("Sarah Just became an adult!!!!!");
} else {
    console.log("Sarah doesn't an adult!!!!!")
}


// OUTPUT => Sarah doesn't an adult!!!!!
if (ageSarah === 18) {
    console.log("Sarah Just became an adult!!!!!");
} else {
    console.log("Sarah doesn't an adult!!!!!")
}



// OUTPUT => Cool! 8 is amazing number
const faviourtNumber = prompt("what's your faviourt number?")
console.log(faviourtNumber);
console.log(typeof faviourtNumber) // string
if (faviourtNumber == 8) {
    console.log("Cool! 8 is amazing number");
} else {
    console.log("the nubmer isn't amazing");
}

// OUTPUT => the nubmer isn't amazing
if (faviourtNumber === 8) {
    console.log("Cool! 8 is amazing number");
} else {
    console.log("the nubmer isn't amazing");
}


// convert number from string to number with Number()
// OUTPUT => Cool! 8 is amazing number
const faviourtNumber2 = Number(prompt("what's your faviourt number?"))
console.log(faviourtNumber2);
console.log(typeof faviourtNumber2) // string
if (faviourtNumber2 === 8) {
    console.log("Cool! 8 is amazing number");
} else if (faviourtNumber2 === 9) {
    console.log("Cool! 9 is amazing number")
} else {
    console.log("the nubmer isn't amazing");
}
// opposite '===' is '!=='
// opposite '==' is '!='
if (faviourtNumber2 !== 8) {
    console.log("Why not 8 ?")
}


// ////////////////////////////////////// Boolean Logic //////////////////////////////////////


console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && false);     // false


console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || false);     // false


//////////////////////////////////////Logical Operators //////////////////////////////////////

const hasDriveLicense = true;
const hasGoodVision = false;
//and => OUTPUT: Someone else should drive...
if (hasDriveLicense && hasGoodVision) {
    console.log("Sara is able to drive");
} else {
    console.log("Someone else should drive...")
}

//or  OUTPUT: Sara is able to drive
if (hasDriveLicense || hasGoodVision) {
    console.log("Sara is able to drive");
} else {
    console.log("Someone else should drive...")
}


////////////////////////////////////// CHALLENGE #3 //////////////////////////////////////

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}


////////////////////////////////////// The switch Statement //////////////////////////////////////


const day = 'monday';
switch (day) {
    case 'monday':
        console.log("the day is monday");
        break;
    case 'tuesday':
    case 'wedenesday':
        console.log("in these days i write code");
        break;
    default:
        console.log("Not a vailable day!!!!!!");
}




////////////////////////////////////// The Conditional (Ternary) Operator //////////////////////////////////////

// condition ? exprIfTrue : exprIfFalse

const age = 19;
const yourAge = age > 18 ? "Adult" : "Young";
console.log(yourAge);


////////////////////////////////////// CHALLENGE #4 //////////////////////////////////////

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉



const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
