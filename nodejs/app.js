// imports:
const http = require("http");
const fs = require("fs");

// Funtion that will run for every request:
// function rqListener(req, res) {}

// http.createServer(rqListener);

// http.createServer(function (req, res) {
//     console.log(req)
// });

const server = http.createServer((req, res) => {
  //   process.exit();

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>");
    res.write("<h1>Node.js Server</h1>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'><button type='sumbit'>Send</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // Event listener:
    req.on("data", (chunk) => {
      console.log("🚀 -> file: app.js -> line 37 -> req.on -> chunk", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(
        "🚀 -> file: app.js -> line 42 -> req.on -> parsedBody",
        parsedBody
      );
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  //Main Page:
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body>");
  res.write("<h1>Hello from my Node.js Server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();

  console.log("req.url ->", req.url);
  console.log("req.method ->", req.method);
  console.log("req.headers ->", req.headers);
});

server.listen(4000);
