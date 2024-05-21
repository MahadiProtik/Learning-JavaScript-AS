let numbers = [10, 22, 35, 44, 52, 59, 68]

let [num1, num2, ...num3] = numbers

console.log(num2);
console.log(num3);

let a = 10;
let b = 20;
let c = 30
[a, b] = [b, a]

// console.log(a);
console.log(b);

let person1 = {
    name: 'Rahim Khan',
    age: 33,
    city: 'Dhaka',
    skill: {
        frontEnd: ['JavaScript', 'VueJS'],
        backEnd: 'PHP'
    }
}

let {name, age, city, skill} = person1

console.log(city);
console.log(skill.frontEnd[0]);
console.log(skill.backEnd);


let personFunc = ({name, age, city})=> console.log(name, age, city);

let person2 = {
    name : 'Rahim Khan',
    age: 33,
    city: 'Dhaka'
}

personFunc(person2)