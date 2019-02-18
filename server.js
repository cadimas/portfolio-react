const express = require("express");
const path = require("path");
const emailer = require("./emailer/emailer.js");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendStatus(404);
});

app.post("/submit", function(req, res) {
  let { name, email, phone, message } = req.body;
  emailer.send(name, email, phone, message, err => {
    if (err) {
      res.send("Some error has occured, please try again later.");
    } else {
      res.send("Your message was successfuly delivered!");
    }
  });
});

app.listen(8080, "localhost", () => {
  console.log("Listening on port 9000");
});
