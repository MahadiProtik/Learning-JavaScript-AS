try{
    let drescription = 'Hello Description <br>';
    console.log(drescription);
    document.write(drescription)
    console.log(somethingError);
}catch(err){
    console.log('You have a Error');
    document.write('You have a Error <br>')
    console.log('Your Error is: ' + err);
    console.log('Your Error is: ' + err.name);
    console.log('Your Error is: ' + err.message);
    document.write('Your Error is: ' + err);
} finally{
    document.write('<br>Its comes from Finaly')
}


//throw

document.querySelector('#buttonOne').addEventListener('click', function(){
    let num = document.querySelector('#inputOne').value;
    
    try{
        if(num < 5 ){
            throw("Number is too Low")
        } else if(num > 10){
            throw('Number is too High')
        }
    }catch(err){
        console.log(err);
    }
})