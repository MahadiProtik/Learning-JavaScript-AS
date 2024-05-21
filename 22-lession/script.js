for(let i = 0; i <= 100; i++)
    {
        if( i > 10)
            {
                break;
            }
        document.write(i + ' ')
    }

document.write('<br>')
document.write('<br>')

for(let i = 0; i<= 100; i++)
    {
        if(i == 10)
            {
                continue;
            }
        document.write(i + ' ')
    }

document.write('<br>')
document.write('<br>')

for(let i = 0; i <= 100; i++)
    {
        if(i%2 == 0)
            {
                continue;
            }
        document.write(i + ' ')
    }

document.write('<br>')
document.write('<br>')

for(let i = 2; i <= 100; i++)
    {
        if(i%2 != 0)
            {
                continue;
            }
        document.write(i + ' ')
    }
