import 'node-fetch'

function start(){
    debugger
    fetch('http://localhost:8080/api',{
        method: "POST",
        body: ""
    })
} 

start()