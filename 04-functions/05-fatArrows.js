// Block Body
let hi = () => {
    console.log('hello!');
}

hi();

let apples = (x) => {
    console.log(`There are ${x} apples in the basket.`);
}

apples(10);

// Concise Body
let hi = () => console.log('hello!');

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);

// Good
let func = () => console.log('hi');

// Bad
let func = ()
    => console.log('hi');