const express = require("express");
const app = express();

const fs = require("fs");
const csv = require("csv-parser");

const moment = require('moment')
const now = moment()
const today = now.format("ddd MMM DD, YYYY")
const prevDay = now.subtract(1, 'day').format("YYYY-MM-DD")

console.log(today, prevDay)

app.use(express.static("public"));
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
const url = "../../covid-19-data/us-states.csv";
const helperData = require("./helpers"); // array of month names
// const dataSort = require('./helpers')
// const d = new Date();
// const date = `${d.toDateString()}<br>`;



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
  res.render("home", { date: today });
});

app.get("/sortData", (req, res) => {
  res.redirect(`/${req.query.sortBy}`);
});

app.get("/date", (req, res) => {
  let newData = helperData.dataSort(data, true, 'date', prevDay)
  res.render("date", { date:today,
                      data,
                      totalCases: newData[1], 
                      totalDeaths: newData[2] });
});

app.get("/state", (req, res) => {
  let newData = helperData.dataSort(data, true, 'state', prevDay)
  res.render("state", { date: today,
                        data: newData[0],
                        totalCases: newData[1], 
                        totalDeaths: newData[2]});
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
