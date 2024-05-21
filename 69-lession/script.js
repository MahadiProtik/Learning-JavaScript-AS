let names = ['Jon', 'Ron', 'Joe', 'Root']

for(let name of names){
    console.log(name);
}

let person = {
    name: 'Rahim Khan',
    age: 38,
    city: 'Dhaka'
}

for(x in person){
    console.log(`${x} : ${person[x]}`);
}


let numbers = [10, 20, 30, 40, 80, 50];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log('\n');
numbers.forEach(function(x){
    console.log(x);
})

let numbersSquare = [];

numbers.forEach(function(x){
    numbersSquare.push(x*x)
})
console.log(numbersSquare);

numbers.forEach(function(x, index, arr){
    arr[index] = x+5;
})

console.log(numbers);