require("dotenv").config();
const express = require("express");
var app = express();

const bodyParser = require("body-parser"),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
  parameterLimit: DEFAULT_PARAMETER_LIMIT,
  limit: DEFAULT_BODY_SIZE_LIMIT
});

const ask = require("./controller").ask;
app.use(bodyParser.json(bodyParserJsonConfig()));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) =>
  res.render("index", { input: ["I want Help"], output: ["hello"] })
);
app.post("/ask", ask);

app.listen(3000, () => console.log("Listening on port 3000"));
