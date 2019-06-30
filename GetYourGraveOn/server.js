const express = require('express')
const app = express()
app.use(express.static('public'));

const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const fetch = require('node-fetch');

const port = process.env.PORT || 3001

const endpoint= `https://api.themoviedb.org/3`;
const apiKey = 'api_key=4de3f13a4cdd05831b95a97d3b3e2da6'


app.get('/', (req, res) => {
    res.send('Looks like we are home!')
})

app.get('/motd/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=4de3f13a4cdd05831b95a97d3b3e2da6&query=${title}`;
    let link = `${endpoint}/movie/${movieId}?${apiKey}`
    // let link = `${url}=${title}`
    console.log('On the back end: ', link)
    fetch(link)
    .then(res => {
        return res.json();
    })
    .then(results => {
        console.log('data on back end', results)
        res.send(results)
    })
    .catch(err => {
        res.status(400).send('Error downloading from DB:', err);
    });
})

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
})