for(let x = 1; x<=20; x++)
    {
        document.write(x);
    }

    document.write('<br>')
    document.write('<br>')

for(let x = 1; x<=20; x= x+1)
    {
        document.write('X = ' + x + '<br>');
    }


    document.write('<br>')

for(let x = 1; x<=99; x= x+2)
    {
        document.write(x + ', ');
    }

    document.write('<br>')

for(let x = 2; x<=100; x= x+2)
    {
        document.write(x + ', ');
    }

    document.write('<br>')
    document.write('<br>')

for(let x = 20; x>=0; x-= 1)
    {
        document.write(x + ', ');
    }

    document.write('<br>')
    document.write('<br>')

sum = 0;

for(let x = 0; x<=5; x+=1)
{
    sum = sum + x; // 1+2+3+4+5 = 15
}

document.write(sum)
document.write('<br>')
document.write('<br>')

let m = parseInt(prompt('Enter a Number: '))
let n = parseInt(prompt('Enter a Number: '))

for(let x = m; x <= n; x++)
    {
        document.write(x + ', ')
    }

    
document.write('<br>')
document.write('<br>')

for(let x = 0; x<=3; x++)
    {
        let num1 = parseFloat(prompt('Enter First Number: '))
        let num2 = parseFloat(prompt('Enter Second Number: '))
        let num3 = num1+num2;

        document.write('Result is: ' + num3 + '<br>')
    }