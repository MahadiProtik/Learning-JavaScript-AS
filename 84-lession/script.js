

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'Title',
        body: 'Tis is Body',
        userId: 1,
    })
})
// .then(res=>res.json())
.then((res)=>{
    if(!res.ok){
        let message = `Erros is ${res.status}`;
        throw new Error(message);
    }
    return res.json();
    
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


let makeRequest = async (url,  config)=>{
    let res = await fetch(url, config);
    if(!res.ok){
        let message = `Error is: ${res.status}`
        throw new Error(message)
    }
    let data = await res.json();
    return data;
}

let getData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
getData()

let sendData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
        title: 'Title Send',
        body: 'Tis is Body Send',
        userId: 1,
    })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
sendData()

let updateData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
        id: 1,
        title: 'Title Update',
        body: 'Tis is Body Update',
        userId: 1,
    })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
updateData()

let patchData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
       
        title: 'Title Patch',
        
    })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
patchData()

let deleteData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
deleteData()