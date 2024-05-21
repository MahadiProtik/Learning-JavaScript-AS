console.clear()
// console.log(window.XMLHttpRequest);

let makeRequest = (method, url, data)=>{
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = ()=>{
        data = xhr.response;
        // console.log(data);
        console.log(JSON.parse(data));
    }

    xhr.onerror = ()=> console.log('Error is here.....');

    xhr.send(JSON.stringify(data))
    })
}


let getData = ()=>{
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts') 
    .then((res)=> console.log(res))
}
getData()

let sendData = ()=>{
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }) 
}
sendData()

let updateData = ()=>{
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'Hello Foo',
        body: 'Hello Bar',
        userId: 1,
    }) 
}
updateData()

let updateSingleData = ()=>{
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Title Changed',
        
    }) 
}
updateSingleData()

let deleteData = ()=>{
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1') 
}
deleteData()