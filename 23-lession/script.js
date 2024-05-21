let number = prompt('Enter a Number: ')

// document.write(number>0 ? 'positive' : 'negative')

let result = number > 0 ? 'positive' : 'negative'

document.write(result)

document.write('<br>')
document.write('<br>')

let result2 = number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero'

document.write(result2)

document.write('<br>')
document.write('<br>')

let result3 = number == 1 ? 'One' : number == 2 ? 'Two' : number == 3 ? 'Three' : number == 4 ? 'Four' : 'Digit Exit';

document.write(result3)