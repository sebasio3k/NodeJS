// imports:
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   process.exit();

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greeting</title></head>");
    res.write("<body>");
    res.write("<h1>Hi this is a greeting from Node.js Server</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='sumbit'>Create User</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write("<h1>Users list</h1>");
    res.write("<hr>");
    res.write("<br>");
    res.write("<div><ul><li>User 1</li></ul></div>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    // Event listener:
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log("🚀 -> username:", username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
