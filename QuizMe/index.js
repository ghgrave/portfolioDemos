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

app.get('/', (req, res)=>{
    res.render('landing')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))
