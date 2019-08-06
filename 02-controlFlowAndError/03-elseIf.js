

if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }

let age = 19;

if (age >= 25){
    console.log('Yay! You can rent a car!');
}

else if ( age >= 21){
    console.log('Yay! You can drink!');
}
else if (age >= 18){
    console.log('Yay! You can vote!');
}
else if (age <= 17){
    console.log('Sorry, you\'re too young to do anything!');
}
else {
    console.log('Error, that is not a number');
};

for(let i = 1; i <10; i++){
    console.log(i);
};