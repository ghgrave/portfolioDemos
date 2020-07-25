const express = require('express')
const app = express()

const log = console.log
const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV !== 'production'){
    const logger = require('morgan')
    const chalk = require('chalk')
    app.use(logger('dev'))
    app.listen(PORT, () => log(`App listening on port ${chalk.green(PORT)}`))
} else {
    app.listen(PORT)
}

app.get('/', (req, res) => res.send('I am the root route'))

