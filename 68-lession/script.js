let personOne = (name, age)=>{
    return{
        name: name,
        age: age
    }
}

console.log(personOne('Rahim Khan', 33));

let personTwo = (name, age)=>{
    return{
        name,
        age
    }
}

console.log(personTwo('Karim Khan', 27));

let objFunc = {
    objOne: function(){
        return 'Hello From Object One';
    },
    objTwo(){
        return 'Hello from Object Two';
    },
    'object three'(){
        return 'Hello From Object Three'
    }
}

console.log(objFunc.objOne());
console.log(objFunc.objTwo());
console.log(objFunc['object three']());