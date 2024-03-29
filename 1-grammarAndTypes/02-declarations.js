//Declarations

let a = 2;

/*(1 let)    (2 a)    (3 =)    (4 2)
1 = keyword
2 = Variable name
3 = Assignment operator
4 = Variable value
*/

let hello;
let Hello;
let firstName = 'Bob';

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
  (=) assignment operator is NOT the same as the equal operator (== or ===)
*/

let weather;
weather = 87;

let x;
//console.log('Declaration:', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

let y = 'Hello';
console.log('Both:', x, y);

//Const

let today = 'Great';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);

elevenFifty = 'Super';
console.log(today, elevenFifty);
