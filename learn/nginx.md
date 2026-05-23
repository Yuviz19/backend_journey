# Nginx (engine-X)
- when we (browser) makes a request to some page/app, some computer as to receive this.
- and then send the files back.
- that computer runs a web server software.

- so Nginx
  1. serves websites
  2. reverse Proxy 
    - since sites are usually run on ports, we do not want others to access them directly.
    - so Nginx becomes a public face for our backend.
    - this give 
    1. security 
    2. speed
    3. load balancing
    4. HTTPS support
- *for code refer to the server.js file in nginx_server directory*
- what is the main idea.

Browser Request
      ↓
Node HTTP Server
      ↓
Find Requested File
      ↓
Read File From Disk
      ↓
Send Response Back

## Importing Modules
1. http
  creates the actual web server for request, response and browser communication. 
2. fs is for file system
3. path 
  handles the file path

- then we need to assign a port on which the site is hosted locally.

## Creating the HTTP server
```javascript
const server = http.createServer((req, res) => {});
```
- req - request
- it is contains the urls, headers, method (GET, POST) and Browser Info.

- res is response
- it is what we send back to the browser
eg. res.end("hello") sends "hello" to the browser.

### figuring out the file and path
```javascript
const filePath = path.join(
  __dirname,
  req.url === '/' ? "index.html" : req.url + '.html'
);
```
this decides which file to serve.
- the __dirname is the address where the current file is stored.
- amd the join is used to join the files name.
- this takes care of the linux/MacOS and windows environment.

- in the code, if the req.url is / then we serve the index.html file and otherwise we try to anyother file with the '.html' extension
-
### Extracting the extension
- const extName = String(path.extname(filePath)).toLowerCase();
- this is important as the browser need to know which type of file is it receiving.

### MIME Types
```javascript
const mimeType = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png'
}
```
this is basically a translation dictionary
- when a user wants a file,
- the server gets a request (req.url)
- now the extension is extracted and the MIME dictionary is looked up.
- eg we get the "text/css"
- the server tells the browser content type: text.css
- now it is easier for the browser to understand.

- without the MIME Types the browser has to guess some random bytes.
