const express = require('express')
const app = express()

const fs = require('fs')
const csv = require('csv-parser')

app.use(express.static('public'))

const port = process.env.PORT || 3000

const url = '../../covid-19-data/us-states.csv'

app.get('/', (req, res)=>{
   let data = []
   fs.createReadStream(url)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    res.render('home.ejs', {data})
  });
})

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
