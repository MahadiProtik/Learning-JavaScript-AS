function myFunc(){
    alert('Hello')
}

document.querySelector('button').addEventListener('click', myFunc)

let headingOne = document.querySelector('h1')



headingOne.addEventListener('mouseover', function(){
    headingOne.classList.add('h1-style')
})

// headingOne.addEventListener('mouseout', function(){
//     headingOne.classList.add('h1-style-change')
// })

headingOne.addEventListener('mouseout', function(){
    headingOne.classList.remove('h1-style')
})