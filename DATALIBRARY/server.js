const express = require("express");
const app = express();
const url = require('url')
const casual = require("casual");
const fs = require("fs");
const logger = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const inputControls = require("./utils/input");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("home.ejs", { controls: inputControls });
});

app.post("/randomData", (req, res) => {
  let keys = [];
  let data = [];
  let recordObj = {};
  let ccFlag = '';

  for (key in req.body) {
    key !== "qty" && key !== "fileName" ? keys.push(key) : null;
  }

  let csvWriter = createCsvWriter({
    path: `./CSV/new/${req.body.fileName}.csv`,
    header: keys.map((data) => {
      return { id: data, title: data };
    }),
  });

  for (let i = 0; i < req.body.qty; i++) {
    recordObj = {};
    for (key of keys) {
     if (key === 'card_type'){
       ccFlag = casual[key]
     }
     if (key === 'card_number'){
        recordObj[key] = casual.card_number(ccFlag)
     } else {
      recordObj[key] = casual[key]
     }
      
    }
    casual.define("record", () => {
      return recordObj;
    });
    data.push(casual.record);
  }

  csvWriter.writeRecords(data).then(() => console.log("...Done"));
  console.log(req.files)
  res.render("results.ejs", {data});
});

app.listen(port, () => {
  console.log(`App listening on port ${chalk.yellow(port)}`);
});
