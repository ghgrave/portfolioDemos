import React, {useState, useEffect} from 'react';
import axios from 'axios';

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movies.css'

function Movies() {

    const [movieRows, setMovieRows] = useState('');

    useEffect(() => {

        const title = 'Twister';
        const url = 'http://localhost:3001/movies';
        const link = `${url}/${title}`;
        axios.get(link)
        .then(searchResults => {
            var movies = searchResults.data.results;
            var rows = [];
    
            movies.forEach((movie) => {
              
              movie.poster_src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              const movieRow = <div className='test' key={movie.id}>
                                <img alt="poster" src={movie.poster_src}></img>
                                {movie.title}
                                <br/>
                                {movie.overview}
                              </div>
              rows.push(movieRow)
            })

            setMovieRows(rows)
      
        })
        .catch(err => {
            console.error("Error getting data from back end: ", err)
        })  
    });

    return (
        <Container fluid={true} id='movies_container'>
            <Row id='titleImageRow'>
                <Col>
                    <h1>Going to Pieces</h1>
                    <img src="assets/attic.jpg" alt="attic"/>
                </Col>
            </Row>
            <Row id='movieDisplayRow'>
                <Col lg={5}>
                <h3>I am the movie and link col</h3>
                </Col>
                <Col lg={7}>
                <h3>I am the movie poster col</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Movies;