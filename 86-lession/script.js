

let makeRequest =async (url, method, data)=>{
    try{
        let result =await $.ajax({
            url: url,
            method: method,
            data: data
        })
        return result;
    } catch(err){
        console.log(err);
    }
}

let getData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
getData()

let createData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'Title',
        body: 'Body',
        section: 'Section',
        userId: 1
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
createData()

let updateData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
        id:1,
        title: 'Title',
        body: 'Body',
        section: 'Section Update',
        userId: 1
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
updateData()