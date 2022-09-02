// import:
const http = require("http");

// Funtion that will run for every request:
// function rqListener(req, res) {}

// http.createServer(rqListener);

// http.createServer(function (req, res) {
//     console.log(req)
// });

const server = http.createServer((req, res) => {
  console.log(req);
//   process.exit();
});

server.listen(3000);
