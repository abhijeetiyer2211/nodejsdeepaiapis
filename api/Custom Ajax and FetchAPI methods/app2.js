const http = new easyHttp();
//get
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// create data
data = {
    name: "John Doe",
    username: "JohnDoe",
    email:"jDoe@gmail.com"    
}

//post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//update
// http.put('https://jsonplaceholder.typicode.com/users/3', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

//delete
// http.delete('https://jsonplaceholder.typicode.com/users/3')
// .then(data => console.log(data))
// .catch(err => console.log(err))