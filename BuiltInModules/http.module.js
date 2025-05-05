
//Import is done in two ways inside the node js
//1.ES6 module = import http from "http";
//2.CommonJS = const http = require("http");



import http from "http";

const app = http.createServer((req,res) => {

    const name = "Badol";
    const og = "Original Node.js Response";

    res.write(`Hello ${name}, ${og}`);
    res.end();

});
port = 3000



app.listen(port,()=>{
    console.log(`SERVER IS RUN ${port}`)
})


