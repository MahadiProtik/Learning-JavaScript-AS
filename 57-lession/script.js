

// console.log(value);

function delFunc(){
    let value = confirm('Yes?')

    if(value){
        console.log('yes');
    }
    else{
        console.log('No');
    }
}

delFunc()

function promptFunc(){
    let h1 = document.createElement('h1');
    let text;
    let name = prompt('Enter Your Name: ')

    if(name == null || name == ''){
        text = 'No name Found ' + typeof name;
    } else{
        text = 'Welcome ' + name;
    }

    let textNode = document.createTextNode(text)
    h1.appendChild(textNode);
    document.body.appendChild(h1)
}

promptFunc();