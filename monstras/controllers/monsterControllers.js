const MonsterModel = require("../models/MonsterModel");

const loadHomePage = (req, res) => {
  res.render("index.ejs");
};

module.exports = { loadHomePage };
