console.clear();

console.log(window);
console.log(window.location);
console.log(location);

console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);


let locationDiv = document.querySelector('.location-div')

console.log(locationDiv);

let p1 = locationDiv.children[0];
p1.textContent = location.href

let p2 = locationDiv.children[1];
p2.textContent = location.protocol

let p3 = locationDiv.children[2];
p3.textContent = location.hostname

let p4 = locationDiv.children[3];
p4.textContent = location.host

let p5 = locationDiv.children[4];
p5.textContent = location.port


let visitGoogle = document.querySelector('button');

visitGoogle.addEventListener('click', ()=>{
    location.assign('https://google.com')
})