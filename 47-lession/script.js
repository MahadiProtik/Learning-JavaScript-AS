
// console.log(window);

let para1 = document.querySelector('#para1');

let input = document.querySelector('#name');

input.addEventListener('change', changeHandeler)

function changeHandeler(event){
    para1.innerHTML = event;
    console.log(event);
    para1.innerHTML = event.type;
    console.log(event.type);
    para1.innerHTML = event.target;
    console.log(event.target);
    console.log(event.target.className);
    console.log(event.target.id);
    console.log(event.target.value);
    
}

console.clear()

let programInput = document.querySelectorAll('input[name=program]')

// console.log(programInput);

Array.from(programInput).map((program) =>{
    program.addEventListener('change', programHandeler)
})

function programHandeler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}


let subject = document.querySelector('#subject')

// console.log(subject);

subject.addEventListener('change', handleSubject)

function handleSubject(e){
    // console.log('selected');
    console.log(e.target.value);
}