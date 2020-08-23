
const http = new easyHTTP();

http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
    if(err){
        console.log(`Error ${err}`);
    }
    else{
        console.log(post);
    }
});

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err, post){
//     if(err){
//         console.log(`Error ${err}`);
//     }
//     else{
//         console.log(post);
//     }
// });

let data  = {
    'title' : 'this is a post ',
    'body' : 'this is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err, post){
//     if(err){
//         console.log(`Error ${err}`);
//     }
//     else{
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/4', data, function(err, post){
//     if(err){
//         console.log(`Error ${err}`);
//     }
//     else{
//         console.log(post)
//     }
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/4', data, function(err, post){
//     if(err){
//         console.log(`Error ${err}`);
//     }
//     else{
//         console.log(post);
//     }
// });