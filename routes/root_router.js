var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('nieuwsFile').articles,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
