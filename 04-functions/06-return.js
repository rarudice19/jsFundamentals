let hi = () => {
    return 'hi';
}

let newName = hi();
console.log(newName);

let capitalizedName = (name) => {
    let capName = '';
    for(let letter in name){
        if(letter == 0) {
            capName += name[letter].toUpperCase();
        }
        else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

//console.log(capName);

const myName = capitalizedName('rUdI');
console.log('The name is LastName, ' + myName +' LastName');

/*function tipCalculator() {

    let bill;
    let tip = bill * 0.2;
    let total = bill + tip;
    return total;

}
let  resturant = tipCalculator (100);
console.log('Your total with 20% gratuity is $' + resturant);
*/


let tipCalculator = (price) => {
    let tip = price * 0.2;
    return tip;
}

let dinner = tipCalculator(10);
console.log(`With 20% gratuity, that comes to $`, price + ${dinner});
