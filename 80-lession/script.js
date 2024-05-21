console.log('welcome');

let promise1 = new Promise((resolve, reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve('Completed Promise One')
    } else{
        reject('Not Completed Promise One')
    }
    // setTimeout(()=>resolve('Completed Promise One'),2000)
})

// console.log(promise1);

// promise1.then(res=>{
//     console.log(res);
// })

// .catch(err=>{
//     console.log(err);
// })


let promise2 = new Promise((resolve, reject)=>{
    // resolve('Completed Promise Two')
    setTimeout(()=>resolve('Completed Promise Two'),1000)
})

// promise2.then(res => console.log(res))

// Promise.all([promise1, promise2]).then((res)=>{
//     console.log(res);
// })
Promise.race([promise1, promise2]).then((res)=>{
    console.log(res);
})

console.log('End');


