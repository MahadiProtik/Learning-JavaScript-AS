document.write(Math.sqrt(25))
document.write('<br>')
document.write(Math.pow(3,2))
document.write('<br>')
document.write(Math.sin(45))
document.write('<br>')
document.write(Math.round(20.2))
document.write('<br>')
document.write(Math.round(20.9))
document.write('<br>')
document.write(Math.random())
document.write('<br>')
document.write(Math.random()*5+1)
document.write('<br>')
document.write(Math.round(Math.random()))
document.write('<br>')
document.write(Math.floor(3.8))
document.write('<br>')
document.write(Math.ceil(3.2))
document.write('<br>')
document.write('<br>')
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write(Math.floor(Math.random()*10))
document.write('<br>')
document.write('<br>')
document.write(Math.max(5,8,6,10,25,6,20))
document.write('<br>')
document.write(Math.min(5,8,6,2,25,6,20))
document.write('<br>')
document.write(Math.abs(-66))
document.write('<br>')
document.write('<br>')
document.write('<br>')


let numOfWon = 0;
let numOfLost = 0;

for(let i = 1; i <= 5; i++){
    let guessNumber = parseInt(prompt('Enter a Guess Number: '))
    let randomNumber = Math.floor(Math.random()*5) +1;

    if(guessNumber == randomNumber){
        document.write('You are Won' + '<br>')
        numOfWon++
    }
    else{
        document.write('You are Lost. The Number was: ' + randomNumber + '<br>')
        numOfLost++
    }
}

document.write('<br>')
document.write('You are Won ' + numOfWon + 'Times')
document.write('<br>')
document.write('You are Lost ' + numOfLost + 'Times')