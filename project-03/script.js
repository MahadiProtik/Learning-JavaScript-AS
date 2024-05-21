
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

let form = document.querySelector('form')
let cardBody = document.querySelector('.card-body')
let guessingNumber = form.querySelector('#guessingNumber')
let checkButton = form.querySelector('#check')
let resultText = cardBody.querySelector('.resultText')
let totalWonsLostsMessage = document.createElement('p')
let remainingAttempts = cardBody.querySelector('.remainingAttempts')


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    attempts++
    if(attempts>5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    else{
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining Attemps: ${totalAttempts - attempts}`
    }
    guessingNumber.value = '';
})

function checkResult(guessingNumber){
    
    let randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber)
        {
            resultText.innerHTML = 'You have won'
            totalWons++
        }
    else{
        resultText.innerHTML = `You have lost. Random Number was: ${randomNumber}`
        totalLosts++
    }    
    totalWonsLostsMessage.innerHTML = `Total Won: ${totalWons} and Total Lost: ${totalLosts}`;
    totalWonsLostsMessage.classList.add('large-text');
    cardBody.appendChild(totalWonsLostsMessage)
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}






// let resultText = cardBody.querySelector('.resultText')
// 