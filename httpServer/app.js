const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("Hello from the home sides");
    } else if(req.url == "/about") {
        res.end("Hello from the about us side")
    } else if(req.url == "/userApp"){
        fs.readFile(`${__dirname}/userApi/userApp.json`, "utf-8", (err, data) => {
            const obj = JSON.parse(data);
            console.log(obj);
        });
        res.end("Request from user API us side");

    } else {
        //to change the status code of the response
        res.writeHead(404);
        res.end("<h1>404 error page content.</h1>")
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log('listen port 3000');
})