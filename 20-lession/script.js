let i = 0;

while (i <= 20) {
  document.write(i + " ");
  i++;
}

document.write('<br>')
document.write('<br>')

let j = 0;
let sum = 0;

while (j <= 5) {
  sum = sum + j;
  j += 1;
}

document.write("Value of Sum: " + sum);

document.write('<br>')
document.write('<br>')

let p = 1
let sum2 = 0;

while(p <= 30)
    {
        if(p%3 == 0 && p%5 == 0)
            {
                sum2 = sum2 + p;
                document.write(p + ' ') // 15 30
            }
        p += 1;
    }

document.write(sum2)

document.write('<br>')
document.write('<br>')

let r = 0;

do{
    
    document.write(r + ' ')
    r++
}while(r<=10)