const express = require('express')
const app = express();
const logger = require('morgan')
const chalk = require('chalk')

app.use(express.static('public'))
app.use(logger('dev'))
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render('landing')
})

app.listen(port, ()=>{
    console.log(`App listening on port ${chalk.red(port)}.`)
})