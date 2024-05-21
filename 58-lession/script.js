setTimeout(()=>{
    console.log('Hi');
}, 2000)


function displayFunc(){
    console.log('Hi Display');
}

setTimeout(displayFunc, 2000)

let button = document.querySelector('#btn1');
let para = document.querySelector('#p1');

button.addEventListener('click', ()=>{
    para.textContent = 'Save Successfully';
    setTimeout(()=>{
        para.textContent = '';
    }, 2000)
})

let button2 = document.querySelector('#btn2')
let para2 = document.querySelector('#p2')

button2.addEventListener('click', ()=>{
    let count = 0;
    para2.textContent = count;

    setInterval(()=>{
        count--;
        para2.textContent = count;
    }, 1000)
})


let button3 = document.querySelector('#btn3')
let para3 = document.querySelector('#p3') 

button3.addEventListener('click', startClock)

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

        minutes = formatTime(minutes);
        seconds = formatTime(seconds)

    let time = hours + ':' + minutes + ':' + seconds
    para3.textContent = time;

    setInterval(startClock, 1000)
}

function formatTime(value){
    if(value<10){
        value = '0' + value;
        
    }
    return value;
}