let video = document.querySelector('video')

video.addEventListener('canplay', function(){
    console.log('CanPlay');
    // document.write('can Play')
})
video.addEventListener('play', function(){
    console.log('play');
    // document.write('Play')
})
video.addEventListener('pause', function(){
    console.log('pause');
})
video.addEventListener('playing', function(){
    console.log('playing');
    
})
video.addEventListener('ended', function(){
    console.log('Thanks for Watching');
    
})