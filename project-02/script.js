// let posts = [
//     {
//         title: 'This is Title 1',
//         body: 'This is Body 1',
//     },
//     {
//         title: 'This is Title 2',
//         body: 'This is Body 2',
//     },
//     {
//         title: 'This is Title 3',
//         body: 'This is Body 3',
//     },
//     {
//         title: 'This is Title 4',
//         body: 'This is Body 4',
//     },
//     {
//         title: 'This is Title 5',
//         body: 'This is Body 5',
//     },
//     {
//         title: 'This is Title 6',
//         body: 'This is Body 6',
//     },
//     {
//         title: 'This is Title 7',
//         body: 'This is Body 7',
//     },
//     {
//         title: 'This is Title 8',
//         body: 'This is Body 8',
//     },
// ]


//fetch Data

let fetchData = async (config)=>{
    try{
        let res = await axios(config);
        return res.data;
    } catch(error){
        throw Error('Data is not Fetched....');
    }
    
}



// console.log(axios);

        // <div class="post">
        //     <h4 class="post-title">Post Title</h4>
        //     <p class="post-body">Post Description 1</p>
        // </div>

 let postsElement = document.querySelector('.posts')

 let loadAllData =async ()=>{
    let posts = await fetchData('https://jsonplaceholder.typicode.com/posts')
    posts.map((post) =>{
        let postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = 
        `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `
        postsElement.appendChild(postElement)
    })
   
 }

 loadAllData()