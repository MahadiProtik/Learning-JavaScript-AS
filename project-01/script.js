

let slideShowElements = document.querySelectorAll('.slideshow-element');
let count = 1;

setInterval(() => {
    count++
    let currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');
    if(count > slideShowElements.length){
        slideShowElements[0].classList.add('current')
        count = 1;
    } else{
        currentElement.nextElementSibling.classList.add('current')
    }
    
}, 2000);