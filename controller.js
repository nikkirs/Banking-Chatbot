// controller.js
const getMessage = require("./service").getMessage;
var x = [];
var y = [];
exports.ask = (req, res, next) => {
  return getMessage(req.body)
    .then(output => {
      res.status(200);
      x.push(req.body.text);
      y.push(output.result.output.text[0]);
      res.render("index", { input: x, output: y });
    })
    .catch(next);
};
