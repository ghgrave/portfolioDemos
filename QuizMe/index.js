const express = require('express')
const app = express();

const logger = require('morgan')
app.use(logger('dev'))

app.use(express.static('public'))
app.set('view engine', 'ejs')

const keys = require("./config/keys");
const mongoose = require("mongoose");
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Cannot connect to DB", error));

const decks = require('./fakeData')
console.log(decks)

app.get('/', (req, res)=>{
    res.render('landing')
})

app.get('/new/deck', (req, res)=>{
// something
})

app.get('/decks', (req, res) => {
  res.render('decks', {data: decks})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))
