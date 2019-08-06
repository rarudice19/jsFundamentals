// Scope

// Local 
// Global

/* Scope refers to where a variable is defined and accessible.
    - JavaScript has function scope: each function creates a new scope
    - Scope determines the visibility of these variables
    - Variables defined inside a fucntion are not visible outside a function
*/

let x = 12;

function scope() {
    let x = 33;
    console.log('function', x);
}

scope();
console.log(x);

let y = 12;
function scopeY() {
    y = 33;
    console.log(y);
}

scopeY();
console.log(y);

// var vs let

var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
};

varTest();
console.log(x);

var x = 12;

function letTest() {
    var x = 33;
    if (1 == 1){
        let x = 45;
        console.log(x);
    }
    console.log(x);
};
letTest();
console.log(x);

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();

