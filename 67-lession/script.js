"use strict"

let addFunc = (x, y, z) => {
    return x+y+z
}

let numbers = [5, 8, 3]
let check = 2
let check1 = 2
let check2 = 2

console.log(addFunc(numbers[0], numbers[1], numbers[2]));

console.log(addFunc(5, 2, 3));
console.log(addFunc(check,check1,check2));

let numbers2 = [9,8,6]

console.log(addFunc(...numbers2));

let num1 = [2, 5, 8, ...numbers2, 6, 3]
let num2 = [8, 6, 5, 1, 9]
let num3 = [...num1, ...num2]

console.log(num1);

console.log(`value of Num3: ${num3}`);


let p1 = {
    name: 'Rahim Khan',
    age: 33
}

let p2 = {
    country: 'Bangladesh',
    district: 'Noakhali'
}

let p3 = {...p1, ...p2}

console.log(p3);