// const http = require("http");

const express = require("express");

// Express application object:
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware!");
  next(); // allows the request to continue the next middleware in line
});

app.use("/", (req, res, next) => {
  console.log("in another middleware!");
  // ...
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
