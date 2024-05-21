function func()
{
    document.write('Hello Function')
}

func()
document.write('<br>')
document.write('<br>')

function addName(firstName = 'Jon', lastName = 'Doe') {
    fullName = firstName + ' ' + lastName
    return fullName;
}


document.write(addName('Rahim', 'Khan'))
document.write('<br>')
document.write(addName('Karim', 'Khan'))
document.write('<br>')
document.write(addName('Rafiq', 'Khan'))
document.write('<br>')
document.write(addName())

document.write('<br>')
document.write('<br>')


function addNew(firstName = 'FirstName is Empty', lastName = 'LastName is Empty'){
    fullName = firstName + ' ' + lastName;
    document.write(fullName);
}

addNew('Hello', 'Hello')
document.write('<br>')
addNew('New', 'Name')
document.write('<br>')
addNew()
document.write('<br>')

document.write('<br>')
document.write('<br>')

// (function display(message) {
//     console.log(message);
// })('Hai');

let newFunc = function display2()
{
    console.log('Hai');
}

newFunc();

document.write('<br>')
document.write('<br>')

(function display3() {
    document.write('Hello Display3');
})();
