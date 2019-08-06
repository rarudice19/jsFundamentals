// Switch

let friend = 'Rick';

switch (friend) {
    case 'Autumn':
        console.log('Hey Autum, when are we going rock wall climbing?') 
        break;
    case 'Dave' :
        console.log('Hey Dave, how is Cooper?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, when are we playing DnD?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let menu = ['pie', 'cake', 'ice cream', 'steak'];

switch (menu[3]) {
    case 'pie' :
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake' : 
        console.log('Cake is great!');
        break;
    case 'ice cream' : 
        console.log('I scream for ice cream!');
    default :
        console.log(`I'm sorry, but that is not on the menu.`);
}

let age = 19;

switch (true) {
    case (age >= 25) :
        console.log('Yay! You can rent a car!');
        break; 
    case (age >= 21) :
        console.log('Yay! You can drink!');
        break;
    case (age >= 18) :   
        console.log('Yay! You can vote!');
        break;
    default : 
        console.log('Sorry, you\'re too young to do anything!');
}