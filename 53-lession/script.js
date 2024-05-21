let input = document.querySelector('#inputOne');

input.addEventListener('blur', function(e){
    console.log('Its Blur');
    input.style.backgroundColor = 'white'
    input.style.color = 'blue'
    input.value = e.target.value.toUpperCase();
})
input.addEventListener('focus', function(){
    console.log('Its Focus');
    input.style.backgroundColor = 'blue'
    input.style.color = 'white'
})
input.addEventListener('focusin', function(){
    console.log('Its Focus In');
})
input.addEventListener('focusout', function(){
    console.log('Its Focus Out');
})


let inputTwo = document.querySelector('#inputTwo');
let p1 = document.querySelector('p');

inputTwo.addEventListener('copy', function(){
    console.log('Its Copy');
    p1.innerText = 'You have Copied'
})
inputTwo.addEventListener('cut', function(){
    console.log('Its Cut');
    p1.innerText = 'You have cut'
})
inputTwo.addEventListener('paste', function(){
    console.log('Its Paste');
    p1.innerText = 'You have Paste'
})