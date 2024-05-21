let link = document.getElementsByTagName('a')[0];

// document.write(link)

link.innerHTML = 'Click Google';

link.style.textDecoration = 'none';
link.style.color = 'blue';
link.style.fontSize = '1.5rem';

link.href = 'https://google.com';


let heading3 = document.createElement('h1')
let text = document.createTextNode('This is heading Three')
heading3.appendChild(text)

// document.getElementById('myDiv').appendChild(heading3)

let myDiv = document.getElementById('myDiv')
myDiv.appendChild(heading3)

let heding2 = document.getElementsByTagName('h1')[1];
myDiv.removeChild(heding2)

let heading0 = document.createElement('h1');
let text0 = document.createTextNode('This is heading Zero')
heading0.appendChild(text0)

let heading1 = document.getElementsByTagName('h1')[0]
myDiv.insertBefore(heading0, heading1)


let classList = document.getElementById('myDiv').classList;

document.write(classList)
document.write('<br>')
document.write(classList.add('my-class-two'))
document.write('<br>')
document.write(classList)
classList.remove('my-div')
document.write('<br>')
document.write(classList)