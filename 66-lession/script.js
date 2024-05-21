"use strict"

let myFunc = (x, y, ...z)=>{
    console.log(`The value of X = ${x}, The value of Y = ${y}, The value of Z = ${z}`);
}

myFunc(5, 8, 6, 20, 14, 9, 10, 25, 32)

let newFunc = (name) =>{
    name = `welcome ${name}`
    return name;
}

console.log(newFunc());
console.log(newFunc('Karim Khan'));
console.log(newFunc());