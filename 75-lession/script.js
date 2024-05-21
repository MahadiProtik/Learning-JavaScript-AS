let numbers = [5, 7, 17, 22, 25, 32]

let firstEven = numbers.find( x=> x%2 == 0)
console.log(firstEven);

let evenNumber = (value, index, array)=>{
    if(value%2 == 0)
        return value
}

let firstEvenNumber = numbers.find(evenNumber)
let firstEvenNumberIndex = numbers.findIndex(evenNumber)

console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);



let persons = [
    {
        name: 'Rahim Khan',
        age: '27'
    },
    {
        name: 'Karim Khan',
        age: '25'
    },
    {
        name: 'Shafiq Khan',
        age: '31'
    },
    {
        name: 'Rafiq Khan',
        age: '26'
    },
    {
        name: 'Tawfiq Khan',
        age: '33'
    },
]

console.log(persons.find( x => x.age > 30));




//=====Error Problem========

// let numbers = [5, 7, 17, 22, 25, 32]
// // let evenNumber = (value)=>{
// //     if( value%2 == 0 )
// //         return value
// // }

// function evenNumber(value){
//     if( value%2 == 0 )
//         return value
// }

// // let findFirstEvenNumber = numbers.find(evenNumber())

// let findFirstEvenNumber = numbers.find(evenNumber)

// console.log(findFirstEvenNumber);