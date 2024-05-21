h1 = document.getElementById('h1');

h1.innerHTML = 'h1 Tag Changed';


document.getElementsByClassName('para')[1].innerHTML = 'Second para Class Changed'

document.getElementsByTagName('p')[2].innerHTML = 'Third p tag Changed'

document.write('<br>')
document.write('<br>')

document.querySelectorAll('div')[1].innerHTML = 'This is Div Two'
document.querySelectorAll('.div-four')[0].innerHTML = 'This is Div Four'
document.querySelectorAll('.section')[1].innerHTML = 'This is Section Two'

document.querySelector('#h3').innerHTML = 'Heading Three'