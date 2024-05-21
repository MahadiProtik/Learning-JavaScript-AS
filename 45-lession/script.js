
let audio;

for(i = 0; i<3; i++){
    document.querySelectorAll('.my-button')[i].addEventListener('click', function(){
        let text = this.innerHTML;
        // document.write(text);
        audioPlay(text)
        playAnimation(text)
    })
}

document.addEventListener('keypress', function(event){
    text = event.key;
    audioPlay(text)
    playAnimation(text)
})

function audioPlay(text){
    switch(text){
        case 'a':
            audio =new Audio('audio/01.wav');
            audio.play()
            break;
        case 'b':
            audio =new Audio('audio/02.wav');
            audio.play()
            break;
        case 'c':
            audio =new Audio('audio/03.wav');
            audio.play()
            break;
    }
}

function playAnimation(text){
    let selectedButton = document.querySelector('.'+text)
    selectedButton.classList.add('anim')

    setTimeout(function(){
        selectedButton.classList.remove('anim')
    }, 1000)
}



let count = 0;

document.querySelector('textarea').addEventListener('keypress', function(event){
    count++
    let text2 = event.key;
    document.querySelector('#p1').innerHTML = 'You have pressed: ' + text2;
    document.querySelector('#p2').innerHTML = 'You have pressed: ' + count;
})

document.querySelector('#p3').innerHTML = 'You have pressed: ' + count;