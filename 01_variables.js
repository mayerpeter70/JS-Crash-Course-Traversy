//Variable initialization and definition: var, let, const
let name = "Peter Mayer";
let age = 51

console.log(typeof age);

//String methods
console.log(`My name is ${name}`); //Template strings
console.log(`My name is ${name} and my age is ${age}`); //Concatenation with template strings
console.log('My name is ' + name + ' and my age is ' + age) //Concatenation
console.log(name.length);//length
console.log(name.toUpperCase());//Transform to upper case..
console.log(name.substring(0,3));//substring(starts at,ends before)
console.log(name.split(''));//Split by letter -> returns and array
console.log(name.split(' '));//Split by word -> returns and array
//Methods and properties may be chained to each other
console.log(name.substring(0,3).toUpperCase());

//Arrays
let numbers = new Array(1,2,3,4,5);//array definition with constructor 
let fruits = ['apples', 'bananas', 'ornages', 'berries', 'pinapples']; //array definition
const cars = ['VW', 'Audi', 'BMW', 'Opel', 'Mercedes']; //const also allow manipulation but no complete reassignment
fruits[2] = "oranges";
fruits.push('mangos'); //adds a value to the end of the array
fruits.pop(); //takes the value from the end of the array
fruits.unshift('pear'); //adds a value to the front of the array
fruits.shift(); //takes the value from the front of the array

console.log(fruits); 
console.log(fruits[3]); //returns berries

