import {setText, text} from "./newModule.js";

console.log(text);
setText('Hello Test Function')
console.log(text);


class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    set personName(name){
        this.name = name;
    }

    get personInfo(){
        return this.name + ' ' + this.age
    }
}

let p1 = new Person('Jolil', 33)
console.log(p1);
p1.personName = 'AJ'
console.log(p1.name);

console.log(p1.personInfo);