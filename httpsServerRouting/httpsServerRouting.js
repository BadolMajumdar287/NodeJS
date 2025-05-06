const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (parsedUrl.pathname === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(new Date().toString());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(3000, () => {
  console.log('HTTP SERVER IS RUN 3000');
});