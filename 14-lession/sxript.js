let number = prompt('Enter a Number: ');

if(number>0)
    {
        document.write('Its Positive Number');
    }
else if(number < 0)
    {
        document.write('Its Negative Number');
    }
else
    {
        document.write('Its Zero')
    }

document.write('<br>');

if(number%2 == 0)
    {
        document.write('Its Even')
    }
else{
    document.write('Its Odd')
}

document.write('<br>')
document.write('<br>')

let marks = prompt('Enter Your Marks: ')

if(marks>=80){
    document.write('You got A+')
}
else if(marks>=70){
    document.write('You got A')
}
else if(marks>=60){
    document.write('You got B')
}
else if(marks>=50){
    document.write('You got C')
}
else if(marks>=40){
    document.write('You got D')
}
else{
    document.write('You are Failed')
}

document.write('<br>')
document.write('<br>')

let marks2 = prompt('Enter Your Marks: ')

if(marks2>100 || marks2<0)
    {
        document.write('Invalid Mark')
    }
else if(marks2>=80 && marks2<=100)
    {
        document.write('You got A+')
    }
else if(marks2>=70 && marks2<=79)
    {
        document.write('You got A')
    }
else if(marks2>=60 && marks2<=69)
    {
        document.write('You got A-')
    }
else if(marks2>=50 && marks2<=59)
    {
        document.write('You got B')
    }
else if(marks2>=40 && marks2<=49)
    {
        document.write('You got C')
    }
else if(marks2>=33 && marks2<=39)
    {
        document.write('You got D')
    }
else
{
    document.write('You are Failed')
}

document.write('<br>')
document.write('<br>')

let letter = prompt('Enter a Letter: ')
letter = letter.toLowerCase();

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    {
        document.write('Its Vowel')
    }
else
{
    document.write('Its Consonent')
}    