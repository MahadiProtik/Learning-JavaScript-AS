let persons = [
    {
        name: 'Rahim Khan',
        age: 27,
        city: 'Dhaka'
    },
    {
        name: 'Karim Khan',
        age: 33,
        city: 'Chittagong'
    },
    {
        name: 'Shafiq Khan',
        age: 35,
        city: 'Barisal'
    },
]

// console.log(persons);

function personNames1(){
    return persons.filter(function(x){
        return x.age > 30
    }).map(function(y){
        return y.name;
    })
}
console.log(personNames1());

let personNames2 = ()=>{
    return persons.filter((x)=>{
        return x.age>30
    }).map((y)=>{
        return y.city

    })
}
console.log(personNames2());

let personNames3 = ()=>persons.filter((x)=>x.age>30).map((y)=>y.age);

console.log(personNames3());

let personNames4 = ()=>persons.filter(x=>x.age>30).map(y=>y.name);

console.log(personNames4());