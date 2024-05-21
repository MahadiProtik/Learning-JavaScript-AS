let text = "Bangladesh";

document.write(text);
document.write('<br>')
document.write(text.length);

document.write('<br>')
document.write('<br>')

let text2 = prompt('Enter a Text: ');

document.write('The Text is: '+text2 +' and The Text Leangth is: ' + text2.length);
document.write('<br>')
document.write('The Text is: '+text2 +' and The character number two of the Text : ' + text2.charAt(2));
document.write('<br>')
document.write('The Text is: '+text2 +' and The Text Upper Case is: ' + text2.toUpperCase());
document.write('<br>')
document.write('The Text is: '+text2 +' and The Text Lower Case is: ' + text2.toLowerCase());

document.write('<br>')
document.write('<br>')

let text3 = 'Hello';
let text4 = ' Bangladesh';

document.write(text3.concat(text4));
document.write('<br>');
document.write(text4.slice(0,4))

document.write('<br>')
document.write('<br>')
document.write('<br>')

let firstName = prompt('Enter Your First Name: ')
let lastName = prompt('Enter Your Last Name: ')

let fullName = firstName + ' ' + lastName;

document.write(fullName);