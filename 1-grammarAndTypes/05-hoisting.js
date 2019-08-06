// Hoisting

// Hoisting DNE. It is an illusion. Code does not get moved.
// JS Reads through code twice remembering left hand side variables and functions 

scissors = 'blue';

console.log(scissors);

var scissors; 

b();
console.log(a);

function b() {
    console.log('this is all hoisted');
}

var a = 'This is not hoisted';