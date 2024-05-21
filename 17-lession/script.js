let digit = Number(prompt('Enter a Digit: '))

switch(digit)
{
    case 1:
        document.write('One')
        break
    case 2:
        document.write('Two')
        break
     
    case 3:
        document.write('Three')
        break
     
    case 4:
        document.write('Four')
        break
     
    case 5:
        document.write('Five')
        break
     
    case 6:
        document.write('Six')
        break
     
    case 7:
        document.write('Seven')
        break
     
    case 8:
        document.write('Eight')
        break
     
    case 9:
        document.write('Nine')
        break
     
    case 10:
        document.write('Ten')
        break
     default:
        document.write('Not Digit')
}

document.write('<br>')
document.write('<br>')

let letter = prompt('Enter a Letter: ')
letter = letter.toLowerCase();

switch(letter)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write('vowel');
        break;
    default:
        document.write('Consonent')
}