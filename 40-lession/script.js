
let phptos = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg'];
let imageTag = document.querySelector('img');


let count = 0;

function next(){
    count++
    if(count >= phptos.length)
        {
            count = 0;
            imageTag.src = phptos[count];
        } else{
            imageTag.src = phptos[count];
        }
    
}

function prev(){
    count--
    if(count < 0)
        {
            count = phptos.length - 1;
            imageTag.src = phptos[count];
        } else{
            imageTag.src = phptos[count];
        }
}