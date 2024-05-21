function func1(){
    console.log('Function One. Its Normal.');
}

func1()

let func2 = ()=>{
    console.log('Function Two. Its arrow.');
}

func2()

function func3(){console.log('Function Three. Its Normal.');}
func3()

let func4 = ()=>{console.log('Its Function Four. Its arrow.');}
func4()

function func5(){return 'Its Function Five. Its normal.'}
console.log(func5());

let func6 = ()=> {return 'Its function Six. Its Arrow.'}

console.log(func6());

let func7 = ()=> 'Its Function Seven. Its arrow'
console.log(func7());




let add1 = (num1, num2)=>{
    return num1 + num2
}
console.log(add1(55, 65));


let add2 = (num1, num2) => num1 +num2;
console.log(add2(25,35));


let display1 = name => name;
console.log(display1('Rahim Khan'));