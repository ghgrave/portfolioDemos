const MonsterModel = require("../models/MonsterModel");

const loadHomePage = (req, res) => {
  res.render("index.ejs")
}

const getMonsters = (req, res) => {
  res.send('Sending monsters')
};

const getRandImage = (req, res) => {
  res.send("Sending a random image")
};


module.exports = { loadHomePage, getMonsters, getRandImage };
