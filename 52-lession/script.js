let textarea = document.querySelector('textarea')


textarea.addEventListener('keydown', function(){
    console.log('keydown');
})
textarea.addEventListener('keypress', function(){
    console.log('keypress');
})
textarea.addEventListener('keyup', function(){
    console.log('keyup');
})

textarea.addEventListener('keyup', function(e){
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
    console.log(e.repeat);
})

