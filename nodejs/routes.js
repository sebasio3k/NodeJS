// imports:
const fs = require("fs");

const requestHandler = (req, res) => {
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
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
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
};

// Exports:
// module.exports = requestHandler;

// Multiple exports:
module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};

// module.exports.handler = requestHandler;
// module.exports.someText = 'hi hello';

// exports.handler = requestHandler;
// exports.someText = 'hi hello';
