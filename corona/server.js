const express = require('express')
const app = express()

const fs = require('fs')
const csv = require('csv-parser')

app.use(express.static('public'))
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000
const url = '../../covid-19-data/us-states.csv'
const months = require('./helpers') // array of month names

app.get('/', (req, res)=>{
   let d = new Date()
   res.render('home', {date: 
      `${months.months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}<br>`})
})

app.get('/date', (req, res)=>{
   let data = []
   fs.createReadStream(url)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    res.render('date', {data})
  });
})

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
