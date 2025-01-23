//An array is a special variable, which can hold more than one value
//An array can hold many values under a single name, and you can access the values by referring to an index number.

const  fruits = ["Apple", "Banana", "Mango"]; //It is a common practice to declare arrays with the const keyword.

//I can also create an array, and then provide the elements:
const fruit=[];
fruit[0] = "apple";
fruit[1] = "banana";
//Using the JavaScript Keyword new
const number = new Array (1, 2 , 8)
// Accessing Array Elements
let f = fruits[0]; //Note: Array indexes start with 0.   => output: Apple

// Changing an Array Element
fruits[0] = "orange";
console.log(fruits) // output=> [ 'orange', 'Banana', 'Mango' ]
// Converting an Array to a String
console.log(fruits.toString()); //output => orange,Banana,Mango

/* Arrays are a special type of objects 
Arrays use numbers to access its "elements". In this example, person[0] returns aya:
*/
const person = ['aya', 'esraa'];
// Objects use names to access . In this example, person.firstName returns aya:
const fullName = {firstName: "aya", lastName: "anwar"};
console.log(fullName.firstName); // aya
/*
Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
*/


//Array Properties and Methods
//1-length
console.log(fruits.length); //3
//Accessing the Last Array Element
console.log(fruits[fruits.length - 1])




//2-sort()
let cars = ['Toyota', 'BMW', 'Audi'];
cars.sort();
console.log(cars); // Output: ['Audi', 'BMW', 'Toyota']


let numbers = [20, 5, 100, 50];
numbers.sort();
console.log(numbers); // Incorrect output: [100, 20, 5, 50] Because JS convert numbers TO string   "100" < "20" < "5" < "50" (alphabetical order)
//SOULOTION!
numbers.sort((a, b) => a-b)
/*
a, b = 20, 5 
20 - 5 = 15   if The number is positive   Reverse the two numbers [5 , 20]
20 - 100 = -80   if The number is negetive   Keep the two numbers the same [5 , 20, 100]
100 - 50 = 50   if The number is positive   Reverse the two numbers [5 , 20, 50 , 100]
*/
console.log(numbers); // correct ouput [ 5, 20, 50, 100 ]

//Ascending   => numbers.sort((a, b) => a - b);
//Descending  => numbers.sort((a, b) => b - a);

let CAR = [
    { brand: 'Toyota', year: 2018 },
    { brand: 'BMW', year: 2020 },
    { brand: 'Audi', year: 2019 }
  ];
  
  // Sort by year (ascending)
  CAR.sort((a, b) => a.year - b.year);
  console.log(CAR);
  /*
  Output:
  [
    { brand: 'Toyota', year: 2018 },
    { brand: 'Audi', year: 2019 },
    { brand: 'BMW', year: 2020 }
  ]
  */
  
//Looping Array Elements
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
fruits.forEach(fruit => {
    console.log(fruit);
});

//Adding Array Elements
fruits.push('Lemon');
console.log(fruits);
//New element can also be added to an array using the length property:
fruits[fruits.length] = "apple";
console.log(fruits);
//Adding elements with high indexes can create undefined "holes" in an array:
fruits[7] = "Strawberry";
console.log(fruits);
/* OUTPUT:
 * [ 'orange','Banana','Mango','Lemon','apple',<2 empty items>,'Strawberry']
 */

/*
If you use named indexes, JavaScript will redefine the array to an object.
After that, some array methods and properties will produce incorrect results.
*/
// fruits["color"] = "Yellow";
console.log(fruits.length);
console.log(fruits); // convert to Object => Output: [ 'Banana', 'Orange', 'Apple', color: 'Yellow' ]
console.log(fruits.length); // output 8  => It doesn't count object


/**
 * The Difference Between Arrays and Objects
 * In JavaScript, arrays use numbered indexes.  
 * In JavaScript, objects use named indexes.
 */


/**
 * When to Use Arrays. When to use Objects.
 * You should use objects when you want the element names to be strings (text).
 * You should use arrays when you want the element names to be numbers.
 */

//two different statements both create a new empty array 

/**
 * A Common Error
 * const points = [40];
 * is not the same as:
 * const points = new Array(40);
 * [40]: An array with one element.
 * new Array(40): An array of length 40 but it is all empty space
 */
const points = new Array(40);
console.log(points.length); // output => 40
const point = [40];
console.log(point.length); // output => 1

//How do I know if a variable is an array?
console.log(typeof(fruits)); // object
/**
 * The typeof operator returns object because a JavaScript array is an object.
 * Solution 1:
 * To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
 * Array.isArray(fruits);
 * Solution 2:
 * The instanceof operator returns true if an object is created by a given constructor:

 */
console.log(Array.isArray(fruits)); //true
console.log((fruits instanceof Array));//true
//Nested Arrays and Objects  & Values in objects can be arrays, and values in arrays can be objects:
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}


//////////////////////////////////////  Array Methods //////////////////////////////////////

//Array length
//The length property returns the length (size) of an array
let size = fruits.length;
//Array toString()  converts an array to a string of (comma separated) array values.
const arrayToString = fruits.toString(); //orange,Banana,Mango,Lemon,apple,,,Strawberry

//Array at()
console.log(fruits)
console.log(fruits.at(2)) //Mango
console.log(fruits.at(-7)); //Banana
console.log(fruits[7])
console.log(fruits[-7]) //  Negative indexes are not supported.   => output : undefined

//Array join()
//It behaves just like toString(), but in addition you can specify the separator
console.log(fruits.join()); //orange,Banana,Mango,Lemon,apple,,,Strawberry
console.log(fruits.join(' ')); //orange Banana Mango Lemon apple   Strawberry
//Popping and Pushing
//Popping items out of an array, or pushing items into an array.

fruits.pop(); // delet last element Strawberry => method returns the value that was "popped out":
console.log(fruits);
fruits.push("Strawberry");
console.log(fruits);

