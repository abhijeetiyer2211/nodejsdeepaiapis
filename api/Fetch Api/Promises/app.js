document.querySelector('.btnText').addEventListener('click', getText);
document.querySelector('.btnJSON').addEventListener('click', getJson);
document.querySelector('.btnExternal').addEventListener('click', getExternal);

function getText(){
    // fetch('text.txt')
    //     .then(function(res){
    //        return res.text();
    //     }).then(function(text){
    //         document.querySelector('.output').innerHTML = text;
    //     });

    ////arrowFunction   
    fetch('text.txt')
        .then(res => res.text())
        .then(data => document.querySelector('.output').innerHTML = data);
}

function getJson(){
    // fetch('Post.json')
    //     .then(function(res){
    //         return res.json();
            
    //     })
    //     .then(function(data){
    //         let output = "";
    //         data.forEach(function(post){
    //             output += `<li>${post.title}</li>`;
    //         });
    //         document.querySelector('.output').innerHTML = output;
    //     });

    ////arrowFunction
    fetch('Post.json')
        .then(res => res.json())
        .then(data => {
            let output = "";
            data.forEach(post => output += `<li>${post.title}</li>`);
            document.querySelector('.output').innerHTML = output; 
        })
}

function getExternal(){
    // fetch('https://api.github.com/users')
    //     .then(function(res){
    //         return res.json();
    //     })
    //     .then(function(data){
    //         output = "";
    //         data.forEach(function(user){
    //             output += `<li>${user.login}</li>`;
    //         });
    //         document.querySelector('.output').innerHTML = output;
    //     });

    ////arrowFunction
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data=> {
            let output = "";
            data.forEach(user=>output += `<li>${user.login}</li>`);
            document.querySelector('.output').innerHTML = output;
        });

    ////using ajax
    // const http = new XMLHttpRequest();
    // http.open('GET','https://api.github.com/users', true);
    // http.onload = function(){
    //     if(http.status === 200){
    //         let users = JSON.parse(http.responseText);
    //         output = "";
    //         users.forEach(function(user){
    //             output += `<li>${user.login}</li>`;
    //         });
    //         document.querySelector('.output').innerHTML = output;
    //     }
    // };
    // http.send();
}