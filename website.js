const http = require('http');
const url = require('url');
const fs = require('fs')

const port = process.env.PORT || 5000;


const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    console.log(req.url);


    if (req.url == '/') {
        res.end('<h1> this is akaksh ghosh i love to drink coffee</h1>');
        res.statusCode = 200;

    }
    else if (req.url == '/about') {
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
        
        res.statusCode = 200;

    }
    else {
        res.statusCode = 404;
        res.end('not found')
    }
})

server.listen(port, () => {
    console.log('server is listening on port', port);
});