const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const path = console.log(req.url);
  if (path == "black") {
    res.end("Hello nigger");
  } else {
    res.end("OOSKDOKSODK");
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server started");
});
