const http = require('http');

const PORT = process.env.PORT || 9000;
const server = http.createServer();

server.on('connection', () => {
  console.log(`Connecting...`);
});

server.on('listening', () => {
  console.log(`Listening port ${PORT} ...`);
});

server.on('request', (req, res) => {
  if (req.url == '/stop') server.close();

  res.statusCode = 200;
  res.end('Hello from Node.js by Dmytro Kuts.');
});

server.on('request', (req, res) => {
  console.log(req.method, req.url, res.statusCode);
});

server.on('close', () => {
  console.log('The end.');
});

server.listen(PORT);