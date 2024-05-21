
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res=>console.log(res.data))
.catch(err =>console.log(err))

axios.post('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Title',
        body: 'BOdy',
        userId: 1
    })
})
.then(res=>console.log(res.data))
.catch(err =>console.log(err))

axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    body: JSON.stringify({
        id: 1,
        title: 'Title update',
        body: 'BOdy',
        userId: 1
    })
})
.then(res=>console.log(res.data))
.catch(err =>console.log(err))

axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    
    body: JSON.stringify({
        id: 1,
        title: 'Title Patch',
        body: 'BOdy',
        userId: 1
    })
})
.then(res=>console.log(res.data))
.catch(err =>console.log(err))

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(res=>console.log(res.data))
.catch(err =>console.log(err))

console.clear()

let makeRequest =async (config)=>{
    return await axios(config)
}

let getData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}
getData()

let createData = ()=>{
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: JSON.stringify({
            title: 'title',
            body: 'Make Request Body',
            userId: 1
        })
    })
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}
createData()

let updateData = ()=>{
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        data: JSON.stringify({
            id: 1,
            title: 'title',
            body: 'Make Request Body Update',
            userId: 1
        })
    })
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}
updateData()