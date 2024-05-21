function squre(x){
    console.log(`Squre of X: ${x*x}`);
}

squre(11)
let y = squre;
y(8)

function higherOrderFunction(num, callback){
    callback(num)
}

higherOrderFunction(6,squre)


//===========================

let taskOne = (callback2)=> {
    console.log('This is Task one')
    callback2();
};
// taskOne()

let taskTwo = (callback2)=> {
    console.log('This is Task Two')
    callback2()
};
// taskTwo()
 

let taskThree = (callback2)=> {
    setTimeout(()=> {
        console.log('Loading task three')
        callback2()
    }, 2000)
    
};
// taskThree()

let taskFour = (callback2)=> {
    console.log('This is Task Four')
    callback2()
};
// taskFour()

let taskFive = ()=> {
    console.log('This is Task Five')

};
// taskFive()

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4(){
                taskFive()
            })
        })
    })
})