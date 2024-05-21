let num1 = prompt('Enter First Number: ')
let num2 = prompt('Enter last Number: ')

num1 = parseInt(num1,10)
num2 = parseInt(num2,10)

let sum, sub, multi, divi, modu, squre, result;

result = num1+num2;
document.write(result);
document.write('<br>')

result = num1-num2;
document.write(result);
document.write('<br>')

result = num1*num2;
document.write(result);
document.write('<br>')

result = num1/num2;
document.write(result);
document.write('<br>')

result = num1%num2;
document.write(result);
document.write('<br>')

result = num1**num2
document.write(result);
document.write('<br>')

document.write('<br>')
document.write('<br>')

let base = parseFloat(prompt('Enter Base: '))
let height = parseFloat(prompt('Enter Height: '))

let area = base*height;

document.write('The area is: ' + area);
document.write('<br>')
document.write('<br>')

let f = parseFloat(prompt('Enter Fahrenheit: '))

let cel = (f-32) * (5/9)

document.write('The Celsius is: ' + cel);

document.write('<br>')
let c = parseFloat(prompt('Enter Celsius: '));

let fahr = (c*(9/5)) +32
document.write('The Fahrenheit is: ' + fahr);
document.write('<br>')