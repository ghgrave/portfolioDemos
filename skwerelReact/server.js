const express = require('express')
const app = express()

const logger = require('morgan')
const chalk = require('chalk')
const log = console.log

const marvelScraper = require('./utils/marvel')

app.use(logger('dev'))
// marvelScraper.then(data => log(data))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('I am the root route'))

app.get('/user/newsfeed', (req, res)=>{
    marvelScraper
    .then(data => res.json(data))
    .catch(err => res.status(411).json({message: 'Issues getting data from marvel newsfeed.'}))
})

app.listen(PORT, () => log(`App listening on port ${chalk.green(PORT)}`))