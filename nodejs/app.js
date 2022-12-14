const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Parser:
app.use(bodyParser.urlencoded({ extended: false }));

//Serving files statically:
app.use(express.static(path.join(__dirname, "public")));

// app.use(adminRoutes, shopRoutes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404-not-found.html"));
});

app.listen(3001);
