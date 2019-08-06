let weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
}
else {
    console.log('No jacket needed');
}

let weather = 75;

if (weather < 75 && weather > 55){
    console.log('Wear a light jacket');
}
else {
    console.log('Number not in range');
};



let name = 'Rudi';

if (name == 'Rudi Rudicel'){
    console.log('Hello, my name is', name);
}
else if (name == 'Rudi'){
    console.log('Hello, my name is', name);
}
else {
    console.log('Hello, is your name', name);
};


let name = 'aUTuMN';

if (name.charAt(0) === name.charAt(0).toUpperCase()){
    partial = name.substring(1, 6);
    console.log('Hello, my name is', name.charAt(0) + partial.toLowerCase());
}

else {
    first = name.charAt(0);
    partial = name.substring(1, 6);
    console.log('Is your name', first.toUpperCase() + partial.toLowerCase(), '?');
};

/* let name = 'aUTuMN';
   if (name.charAt(0) === name.charAt(0).toUpperCase()){
       firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
       console.log(firstLetter;
   }
   else [
       otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
       console.log(otherLetters);
   ];
*/
