// let myButton = document.querySelectorAll('.my-button')
// let audio;

// for(let i = 0; i < myButton.length; i++){
//     myButton[i].addEventListener('click', function(){
//         let text = this.innerHTML;
//         // document.write(text)

//         switch(text){
//             case 'A' :
//                  audio = new Audio('audio/01.wav');
//                 audio.play();
//                 break;
//             case 'B' :
//                  audio = new Audio('audio/02.wav');
//                  audio.play();
//                 break;
//             case 'C' :
//                  audio = new Audio('audio/03.wav');
//                  audio.play();
//                 break;
//         }
//     })
// }


for(i = 0; i < 3; i++){
    document.querySelectorAll('.my-button')[i].addEventListener('click', function(){
        let text = this.innerHTML;
        // document.write(text)

        switch(text){
            case 'A':
                var audio = new Audio('audio/01.wav')
                audio.play();
                break;
        
            case 'B':
                var audio = new Audio('audio/02.wav')
                audio.play();
                break;
        
            case 'C':
                var audio = new Audio('audio/03.wav')
                audio.play();
                break;
        }
    })
}