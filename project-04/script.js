
let selectFontSize = document.getElementById('selectFontSize')
let selectBGColor = document.getElementById('selectBGColor')
let resetBtn = document.getElementById('resetBtn')
let mainElement = document.querySelector('main')
let setValues = (selectedFontSize, selectedBGColor)=>{
        selectFontSize.value = selectedFontSize
        selectBGColor.value = selectedBGColor

        mainElement.style.fontSize = selectedFontSize
        mainElement.style.backgroundColor = selectedBGColor
}

let initialSetup = ()=>{
    let selectedBGColor = localStorage.getItem('bgColor')
    let selectedFontSize = localStorage.getItem('fontSize')
    if(selectedBGColor && selectedFontSize){
        setValues(selectedFontSize, selectedBGColor)
    }

    if(!selectedBGColor && !selectedFontSize){
        setValues('16px', 'aqua')
    }

    if(!selectedBGColor && selectedFontSize){
        setValues(selectedFontSize, 'aqua')
    }

    if(selectedBGColor && !selectedFontSize){
        setValues('16px', selectedBGColor)
    }
}


let changeFontSize = (event) =>{
    mainElement.style.fontSize = event.target.value;
    localStorage.setItem('fontSize', event.target.value)
}

let changeBGColor = (event) =>{
    mainElement.style.backgroundColor = event.target.value;
    localStorage.setItem('bgColor', event.target.value)
}

let clearLocalStorage = () =>{
    localStorage.removeItem('fontSize')
    localStorage.removeItem('bgColor')
    setValues('16px', 'aqua')
}

selectFontSize.addEventListener('change', changeFontSize)
selectBGColor.addEventListener('change', changeBGColor)
resetBtn.addEventListener('click', clearLocalStorage)

initialSetup()