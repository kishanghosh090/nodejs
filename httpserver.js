//build a http server in node js

const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h1> this is akaksh ghosh i love to drink coffee</h1>');
})

server.listen(port, () => {
    console.log('server is listening on port',port);
});