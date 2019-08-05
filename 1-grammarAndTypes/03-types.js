/*
// Types

// Booleans

let i = true;

let j = false;

let on = true;

let off = false;

console.log(on,off);

//Null not 0, not undefined

let empty = null;

console.log(empty);

//Undefined no value assigned

let undef = undefined;
console.log(undef);

//Numbers  

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
//ninehundred ninety nine trillion ninehundred ninety nine billion ninehundred ninety nine million ninehundred ninety nine thousand ninehundred ninety nine
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = ((0.2 * 10 + 0.1 * 10) / 10);
console.log(numbersAreHard);

let a = Number('123');

// Strings 

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);

console.log(typeof first);
console.log(typeof second);

// Objects key value pairs

let car = {
    color: 'red',
    tires: '4',
    extras: 'A/C and Radio',
    cool: true
};

console.log(car);
console.log(typeof car);

// Array items seperated by commas

let list = ['phone', 'keys', 'gum'];

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);

// Addition vs Concatenation

let third = 1050 + '100';
console.log(third);
console.log(typeof third);
*/

let firstName = 'Rudi';
let lastName = 'Rudicel,';
let houseNumber = '7694';
let aptNumber = null;
let street = 'Madden Drive,';
let city = 'Fishers,';
let state = 'IN';
let zipcode = '46038';

let a = firstName + ' ' + lastName;
let b = houseNumber + ' ' + street;
let c = city + ' ' + state + ' ' + zipcode;
let d = a + ' ' + b + ' ' + c;

console.log(d); 

// Properties no ()

let myName = 'Rudi';
console.log(myName.length);

// Methods use ()

let myNameIs = 'Rudi';
console.log(myNameIs. toUpperCase());

let home = 'My home is Fishers';
console.log(home.includes('Fishers'));

let str = 'Life is worthless unless it has worth.';
console.log(str.split(' '));

