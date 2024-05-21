let div = document.querySelector('div')

// div.addEventListener('click', function(){
//     console.log('Clicked');
// })
// div.addEventListener('dblclick', function(){
//     console.log('Double Clicked');
// })
// div.addEventListener('mouseup', function(){
//     console.log('Mouse Up');
// })
// div.addEventListener('mousedown', function(){
//     console.log('Mouse Down');
// })
// div.addEventListener('mouseenter', function(){
//     console.log('Mouse Enter');
// })
// div.addEventListener('mouseleave', function(){
//     console.log('Mouse Leave');
// })
// div.addEventListener('mouseover', function(){
//     console.log('Mouse Over');
// })
// div.addEventListener('mousemove', function(e){
//     // console.log('Mouse Move');

//     console.log('Mouse move: '+e.clientX);
// })

// div.addEventListener('click', function(event){
//     console.log(event.target);
//     console.log(event.target.id);
//     console.log(event.target.className);
//     console.log(event.target.innerHTML);
//     console.log(event.target.innerText);
//     console.log(event.target.textContent);
// })

let buttons = div.querySelectorAll('.btn');

console.log(buttons);

Array.from(buttons).map((button) =>{
    button.addEventListener('click', function(e){
        console.log('Hello Button');
        console.log(e.target.innerText);
    })
})