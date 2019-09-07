"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
function start() {
    debugger;
    node_fetch_1["default"]('http://localhost:8080/api', {
        method: "POST",
        body: "some data" //,
        // headers: {
        //     "Content-Type":"application/json"
        // }
    });
}
start();
// export default api
