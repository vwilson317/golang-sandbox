import fetch from 'node-fetch'

function start(){
    debugger
    fetch('http://localhost:8080/api',{
        method: "POST",
        body: "some data"//,
        // headers: {
        //     "Content-Type":"application/json"
        // }
    })
} 

start()

// export default api