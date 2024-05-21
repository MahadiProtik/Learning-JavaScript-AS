let mainDiv = document.querySelector('.main-div')

mainDiv.style.backgroundColor = 'blue'
mainDiv.style.color = 'white'
mainDiv.style.textAlign = 'center'
mainDiv.style.padding = '6px'

let divOne = mainDiv.querySelector('.div-one')

divOne.style.color = 'red'

let divTwo = mainDiv.children[1]

divTwo.style.color ='orange'

let divThree = document.querySelector('.div-three')

let parentDiv = divThree.parentElement

parentDiv.style.fontSize = '2rem'



// let beforeDiv = divTwo.previousElementSibling
// let afterDiv = divTwo.nextElementSibling