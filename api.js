"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
function start() {
    node_fetch_1["default"]('http://localhost:8080/api', {
        method: "POST",
        body: "some data"
    });
}
start();
