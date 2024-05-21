window.addEventListener('load', function(){
    console.log('load');
})
window.addEventListener('unload', function(){
    console.log('Unload');
})
window.addEventListener('scroll', function(){
    console.log('scroll');
})

window.addEventListener('resize', function(){

    // console.log('resize');
    let width = window.outerWidth;
    let height = window.outerHeight;

    console.log(`Height: ${height}, Width: ${width}`);
})

let details = document.querySelector('details');

details.addEventListener('toggle', function(e){
    console.log('Its Toggle');
    console.log(e.target.open);
})