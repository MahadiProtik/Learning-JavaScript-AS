
let names = new Array();
names[0] = 'Rahim';
names[1] = 'Karim';
names[2] = 'Rafiq';

document.write(names[0])
document.write("<br>")
document.write(names[2])
document.write("<br>")
document.write(names.length)

document.write("<br>")
document.write("<br>")

let names2 = ['Jon', true, 25]

document.write(names2[1])
document.write("<br>")
document.write(names2.length)
document.write("<br>")

names2.push('Root')

document.write(names2)
document.write("<br>")
document.write(names2.length)
document.write("<br>")
names2.pop()
document.write(names2)
document.write("<br>")
document.write(names2.length)

document.write("<br>")
document.write("<br>")

let city1 = ['Dhaka', 'Chittagong', 'Noakhali', 'Sylet', 'Khulna']
let city2 = ['Kolkata', 'Dhilli', 'Mombai', 'Tamil']

document.write(typeof city1)
document.write("<br>")

let city = city1.concat(city2)
document.write(city)
document.write("<br>")
document.write(typeof city)

document.write("<br>")
document.write("<br>")

let num = [10, 20, 25, 30, 50, 60, 65]

document.write(num)
document.write("<br>")
document.write("<br>")
document.write(num.length)
document.write("<br>")

for(let i = 0; i < num.length; i++)
    {
        document.write(i + '-' + num[i] + '<br>')
    }

document.write("<br>")
document.write("<br>")

let newNum = new Array();

let sum = 0;

for(let j = 0; j < 6; j++)
    {
        
        newNum = parseFloat(prompt('Enter a number: '))
        sum = sum + newNum;
    }

document.write(sum)