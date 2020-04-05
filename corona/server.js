const express = require("express");
const app = express();

const fs = require("fs");
const csv = require("csv-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
const url = "../../covid-19-data/us-states.csv";
const helperData = require("./helpers"); // array of month names
// const dataSort = require('./helpers')
const d = new Date();
const date = `${helperData.months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}<br>`;

let data = [];
fs.createReadStream(url)
  .pipe(csv())
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
    console.log('Sending data to helpers.js file')
   //  let dataByState = helperData.dataSort(data, true)
  });

app.get("/", (req, res) => {
  // let d = new Date()
  res.render("home", { date });
});

app.get("/sortData", (req, res) => {
  res.redirect(`${req.query.sortBy}`);
});

app.get("/date", (req, res) => {
  res.render("date", { data, date });
});

app.get("/state", (req, res) => {
  res.render("state", { data: helperData.dataSort(data, true, 'state'), date });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
