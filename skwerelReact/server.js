const express = require("express");
const app = express();
// const axios = require('axios')
// const cheerio = require('cheerio')
// const bodyParser = require('body-parser')

const logger = require("morgan");
const chalk = require("chalk");
const log = console.log;

const { marvel } = require("./utils/marvel");
const { marvelDates } = require("./utils/marvel");

app.use(logger("dev"));
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("I am the root route"));

app.get("/user/newsfeed", (req, res, next) => {
  marvel
    .then((data) => res.json(data))
    .catch((err) =>
      res
        .status(411)
        .json({ message: "Issues getting data from marvel newsfeed." })
    );
});


app.listen(PORT, () => log(`App listening on port ${chalk.green(PORT)}`));