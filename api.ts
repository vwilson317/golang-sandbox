import fetch from 'node-fetch'

function start(){
    fetch('http://localhost:8080/api',{
        method: "POST",
        body: "some data"
    })
} 

start()