let div = document.querySelector('div')
let p = document.querySelector('p')

p.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('Text', e.target.id);
});

div.addEventListener('dragover', (e)=>{
    e.preventDefault();
})

div.addEventListener('drop', (e)=>{
    let id = e.dataTransfer.getData('Text')
    div.appendChild(document.getElementById(id))
    e.preventDefault();
})