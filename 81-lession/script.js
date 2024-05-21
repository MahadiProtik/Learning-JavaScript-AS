console.log('Hai');

let taskOne = () =>{
    return new Promise((resolve, reject)=>{
        resolve('Task One is Completed')
    })
}
let taskTwo = () =>{
    return new Promise((resolve, reject)=>{
        resolve('Task Two is Completed')
    })
}
let taskThree = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('Task Three is Completed'),1000)
    })
}
let taskFour = () =>{
    return new Promise((resolve, reject)=>{
        reject('Task Four is not Completed')
    })
}

taskOne().then((res)=>console.log(res))
.then(taskTwo).then((res)=>console.log(res))
.then(taskThree).then((res)=>console.log(res))
.then(taskFour).then((res)=>console.log(res))

.catch((err) => console.log(err))


//==========EcmaScript-7-Code=========

let callAllTask = async ()=>{
    try{
        let t1 = await taskOne()
    console.log(t1);
    let t2 = await taskTwo()
    console.log(t2);
    let t3 = await taskThree()
    console.log(t3);
    let t4 = await taskFour()
    console.log(t4);
    } catch(err){
        console.log(err);
    }
}

callAllTask()

console.log('Bye');