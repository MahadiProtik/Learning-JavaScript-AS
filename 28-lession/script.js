let names = ['Rahim', 'Karim', 'Shafiq', 'Rafiq']

console.log(names);
names.shift()
console.log(names);
names.unshift('Taufiq')
console.log(names);

let numbers = [10, 20, 30, 40, 50, 60, 70, 80,90, 100]

console.log(numbers);

numbers.splice(3,0,33,36,39)

console.log(numbers);

numbers.splice(3,3)
console.log(numbers);

numbers.sort(function(a,b){
    return b-a
})

console.log(numbers);