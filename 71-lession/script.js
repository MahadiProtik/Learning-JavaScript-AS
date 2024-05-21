let numbers = [2, 8, 9, 7]
let numSquere = [];

numbers.forEach(function(x){
    numSquere.push(x*x)
})

console.log(numSquere);

let numbers2 = [6, 8, 9, 5]

let numSquere2 = numbers2.map(function(x){
    return x*x
})

console.log(numSquere2);

let numbers3 = [45, 25, 24, 26, 15]

let numFilt = numbers3.filter(function(x){
    return x > 20;
})

console.log(numFilt);