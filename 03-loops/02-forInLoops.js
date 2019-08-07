let students = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};

for(let item in students){
    //console.log(item);
    console.log(students[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(let cat in catArray){
    console.log(catArray[cat]);
}

let name = 'rudi';
let first;

for(let x in name){
    if(x == 0){
        first = name[x].toUpperCase();
    }
    else {
        first += name[x].toLowerCase();
    }
}
console.log(first);