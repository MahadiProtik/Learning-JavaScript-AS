let taskOne = ()=> {
    console.log('This is Task one')
};
taskOne()

let taskTwo = ()=> {
    console.log('This is Task Two')
};
taskTwo()

let loading = ()=> console.log('Loading task two');

let taskThree = ()=> {
    setTimeout(loading, 2000)
};
taskThree()

let taskFour = ()=> {
    console.log('This is Task Four')
};
taskFour()

let taskFive = ()=> {
    console.log('This is Task Five')
};
taskFive()