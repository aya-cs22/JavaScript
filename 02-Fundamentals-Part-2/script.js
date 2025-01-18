// // //////////////////////////////////////  Activating Strict Mode //////////////////////////////////////
// // Strict Mode => The goal is to write cleaner, safer code that avoids many problems that could occur due to wrong programming habits.

// 'use strict'
// // It will give me an error while using strict mode, but if I remove "use strict" it won't give me anything
// x = 5;  //Uncaught ReferenceError: x is not defined at script.js:4:3

// function sum(a, a) { // Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at script.js:6:17)
//     return a + a;
// }
// // It prevents you from using certain things that are "reserved" for the future: such as 'interface', 'implements', and other JavaScript things that you will use in the future.
// let implements;    //script.js:14 Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:14:1)
// let interface;     //script.js:15 Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:15:1)

//////////////////////////////////////  Functions //////////////////////////////////////

// function logger() {
//     console.log("Hello My name is Aya");
// }
// //calling
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleOrangeJuice = fruitProcessor(3, 5);
// console.log(appleOrangeJuice);

////////////////////////////////////// Function Declarations vs. Expressions //////////////////////////////////////
// console.log(calcAge1(2004)); //20
// console.log(calcAge2(2004)); // script.js:35 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization at script.js:35:13

// // Function declaration
// function calcAge1(birhYear) {
//     return 2024 - birhYear;
// }
// const age = calcAge1(2004);
// console.log(age);

// //Function expression
// const calcAge2 = function (birhYear) {
//     return 2024 - birhYear;
// }

// const age2 = calcAge2(2004);
// console.log(age2);

////////////////////////////////////////  Arrow Functions //////////////////////////////////////
// const calcAge3 = birhYear => 2024 - birhYear;
// const age3 = calcAge3(2004);
// console.log(age3);

// const yearUntilRetirement = (birhYear, firstName) => {
//     const age = 2024 - birhYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} Years`;
// }
// console.log(yearUntilRetirement(2004, 'Aya'))

//////////////////////////////////////// Functions Calling Other Functions //////////////////////////////////////
// function fruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applesPicess = fruitPieces(apples);
//     const orangesPicess = fruitPieces(oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return `${juice} ${applesPicess} ${orangesPicess} `;
// }
// console.log(fruitProcessor(2, 4));

////////////////////////////////////////  CHALLENGE #1 //////////////////////////////////////
// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// */
// /* Write your code below. Good luck! 🙂 */
// const calcAverage = (score1, score2, score3) => {
//     let avg = (score1 + score2 + score3) / 3;
//     return avg;
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (scoreDolphins, scoreKoalas) => {
//     if (scoreDolphins * 2 < scoreKoalas) {
//         console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)

//     } else if (scoreDolphins * 2 > scoreKoalas) {
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
//     } else {
//         console.log("No team wins...")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 24, 27);
// checkWinner(scoreDolphins, scoreKoalas)

////////////////////////////////////////  Introduction to Arrays //////////////////////////////////////
// const years = new Array(5, 6, 'aya');
// const friends = ['john', 'joans', 'julen'];
// console.log(friends[0]); //john
// console.log(friends.length); //3
// console.log(friends[friends.length - 1]); // last element in array 'julen'

// friends[1] = 'machael';
// console.log(friends); // [ 'john', 'machael', 'julen' ]
// //i can update only element not all array
// // friends = ['machael', 'julen']; // TypeError: Assignment to constant variable.

// const firstName = 'aya';
// const aya = [firstName, 20, 'programmer', friends];
// console.log(aya);

// const calcAge = (birhYear) => {
//     return 2024 - birhYear;
// }
// const yearss = [1990, 1893, 1999, 1995];
// console.log(yearss + 10);       // 1990,1893,1999,199510  '+' => convert to string
// console.log(yearss - 10);       // NaN
// console.log(calcAge(yearss));   // NaN

// const age1 = calcAge(yearss[0]);
// const age2 = calcAge(yearss[1]);
// const age3 = calcAge(yearss[yearss.length - 1]);
// console.log(age1, age2, age3);
// const ages = [age1, age2, age3];
// console.log(ages);

////////////////////////////////////////  Basic Array Operations (Methods) //////////////////////////////////////
// // Add elements
// const friends = ['john', 'joans', 'julen'];
// const newLenght = friends.push('joy');
// console.log(friends); //[ 'john', 'joans', 'julen', 'joy' ]
// console.log(newLenght); // 4
// friends.unshift("Steven");
// console.log(friends); // [ 'Steven', 'john', 'joans', 'julen', 'joy' ]

// //Remove elements
// const popped = friends.pop();
// console.log(friends); // remove the last element => [ 'Steven', 'john', 'joans', 'julen' ]
// console.log(popped); // joy
// friends.shift();
// console.log(friends); // remove the first element => [ 'john', 'joans', 'julen' ]
// //////========////
// console.log(friends.indexOf('joans')) // 1  joans is  index 1
// console.log(friends.indexOf('Bob')) // -1  Bob not in array
// console.log(friends.includes('joans')) //true
// console.log(friends.includes('Bob')) //false
// friends.push(23);
// console.log(friends.includes('23')) //false
// console.log(friends.includes(23)) //true
// if (friends.includes('joans')) {
//     console.log("You have afriend called joans") // You have afriend called joans
// }

////////////////////////////////////////  CHALLENGE #2 //////////////////////////////////////
// /* Write your code below. Good luck! 🙂 */

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return (15 / 100) * bill;
//     } else {
//         return (20 / 100) * bill;
//     }
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [];
// for (let i = 0; i < tips.length; i++) {
//     totals.push(bills[i] + tips[i]);
// }
// console.log(bills, tips, totals);

////////////////////////////////////////  Introduction to Objects //////////////////////////////////////
// const aya = {
//     firstName: 'aya',
//     lastName: ' anwar',
//     age: 20,
//     mySisterAndBrother: ['Mohamed', 'Esraa', 'Abdoo']
// };

////////////////////////////////////////   Dot vs. Bracket Notation //////////////////////////////////////
// const aya = {
//     firstName: 'aya',
//     lastName: ' anwar',
//     age: 20,
//     mySisterAndBrother: ['Mohamed', 'Esraa', 'Abdoo']
// };
// console.log(aya.firstName); //Dot Notation  outPut :aya
// console.log(aya["firstName"]); //Bracket Notation  outPut :aya
// const nameKey = 'Name';
// console.log(aya['first' + nameKey]); //aya
// console.log(aya['last' + nameKey]); //anwar
// // console.log(aya.'first' + nameKey); //SyntaxError: Unexpected string
// const interstedIn = prompt("What do you want to Know about Aya?! chooes between firstName, lastName, age,mySisterAndBrother ");
// if (aya[interstedIn])
//     console.log(aya.interstedIn); // input by user firstName   output => undefined
// if (aya[interstedIn]) {
//     console.log(aya[interstedIn]);// input by user firstName   output => aya
// } else {
//     console.log('Wrong request! chooes between firstName, lastName, age,mySisterAndBrother ')
// }
// console.log(`${aya.firstName} has ${aya.mySisterAndBrother.length} sister and brothers and ${aya.mySisterAndBrother[0]} is the The biggest`)

//////////////////////////////////////// Object Methods //////////////////////////////////////

//////////////////////////////////////// Coding Exercise 7: CHALLENGE #3 //////////////////////////////////////

// // CHALLENGE #3

// // Let's go back to Mark and John comparing their BMIs!

// // This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// // Your tasks:

// //     For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// //     Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// //     Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// // TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// // 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// // IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// /* Write your code below. Good luck! 🙂 */
// const mark = {
//     fullName: "Mark Miller's",
//     mass: 78,
//     height:1.69,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith's",
//     mass: 92,
//     height:1.95,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// john.calcBMI();
// mark.calcBMI();
// if(john.bmi> mark.bmi)
// {
//     console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`);
// }else{
//     console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`)
// }

//////////////////////////////////////// Iteration: The for Loop //////////////////////////////////////
// for(let rep=1; rep<=10; rep++)
// {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// //////////////////////////////////////// Looping Arrays, Breaking and Continuing //////////////////////////////////////
// const frindes = [ 'Steven', 'john',50, 'joans', 'julen', 'joy' ];
// const types = [];
// for(let i = 0; i < frindes.length;i++)
// {
//     console.log(frindes[i]);
//     types[i] = typeof(frindes[i]);
//     console.log(types[i]);

//     //OR
//     types.push(typeof(frindes[i]));
//     console.log(types[i]);
// }
// // // CONTINUE
// console.log("ONLY PRINT STRING WITH CONTINUE");
// for(let i = 0; i < frindes.length; i++){
//     if(typeof frindes[i] !== 'string') continue;
//     console.log(frindes[i]);
// }

// console.log("ONLY PRINT STRING WITH BREAK");
// for(let i = 0; i < frindes.length; i++){
//     if(typeof frindes[i] !== 'string') break;
//     console.log(frindes[i]);
// }

// const years = [1980, 2004, 2007, 2011];
// const age = [];
// for(let i = 0; i < years.length; i++)
// {
//     age.push(2025 - years[i]);
//     console.log(age[i]);
// }

// //////////////////////////////////////// Looping Backwards and Loops in Loops //////////////////////////////////////

// const frindes = [ 'Steven', 'john', 'joans', 'julen', 'joy' ];

// for(let i = frindes.length - 1; i >=0; i-- ){
//     console.log(i, frindes[i]);
// }

// for(let exercise = 1; exercise <= 4; exercise++)
// {
//     console.log(`----------starting excirses ${exercise}`);
//     for(let rep = 1; rep < 6; rep++)
//     {
//         console.log(`Exercise ${exercise} Lifting weight repretion ${rep}`);
//     }
// }
// //////////////////////////////////////// The while Loop //////////////////////////////////////

// let rep = 1;
// while(rep <=10)
// {
//     console.log(`Lifting weight repretion ${rep}`);
//     rep++;
// }

// // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
// let dice = Math.trunc(Math.random() * 6 + 1); // dice = 1 to 6
// console.log(dice);
// if(dice === 6){
//     console.log('LOOP is about to end....')
// }
// while(dice !== 6){
//     console.log(`YOU rolled a dicet ${dice}`);
//     dice = Math.trunc(Math.random() * 6 + 1);
//     if(dice === 6){
//         console.log('LOOP is about to end....')
//     }
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
  console.log(totals[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(`avg ${avg}`);
};

calcAverage(totals);

// ERROR