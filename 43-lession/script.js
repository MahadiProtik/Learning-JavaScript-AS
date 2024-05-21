// document.querySelectorAll('.my-button')[0].addEventListener('click', function(){
//     document.querySelector('h1').innerHTML = 'is Clicked';
// })


let myButton = document.querySelectorAll('.my-button')

let ButtonLength = myButton.length

for(let i = 0; i < ButtonLength; i++){
    myButton[i].addEventListener('click', function(){
        let text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + ' is called';
    })
}


// for(let i = 0; i<3; i++){
//     document.querySelectorAll('.my-button')[i].addEventListener('click', function(){
//         let text = this.innerHTML;
//         document.querySelector('h1').innerHTML = text + ' is Clicked'
//     });
// }



