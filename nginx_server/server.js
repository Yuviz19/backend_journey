const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

const server = http.createServer((req, res) => {
  // req.url === '/' => index.html
  const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url + '.html');
  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeType = {
    // what type of file does the server support
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png'
  }

  const contentType = mimeType[extName] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end('404: File not Found BROOooo...')
      }
      else {
        res.writeHead(500);
        res.end("Server Error");
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`server is listning on port ${port}`);
});
