import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavLinks from './NavLinks'
import Poster from './Poster'

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movies.css'



const url = 'http://localhost:3001/motd';
const movieId = 24428;

function Movies() {

    // const [movieRows, setMovieRows] = useState('');
    const [motd, setMotd] = useState('');

    function getMotd() {
        const link = `${url}/${movieId}`;
        axios.get(link)
        .then(searchResults => {
            var movies = searchResults.data;
            console.log('movies on front end', movies)
            movies.poster_src = `https://image.tmdb.org/t/p/w200${movies.poster_path}`
            // const moviePoster = <div className='test' key={movies.id}>
            //                 <img alt="poster" src={movies.poster_src}></img>
            //                 {movies.title}
            //                 </div>
            const moviePoster = <Poster posterOnly={true} movies={movies}/>
            setMotd(moviePoster);
    
        })
        .catch(err => {
            console.error("Error getting data from back end: ", err)
        })  
    };

    useEffect(() => {
        getMotd();

    }, []);

    return (
        <Container fluid={true} id='movies_container'>
            <Row id='titleImageRow'>
                <Col>
                    <h1>Going to Pieces</h1>
                    <img src="assets/attic.jpg" alt="attic"/>
                </Col>
            </Row>
            <Row id='movieDisplayRow'>
                <Col lg={7}>
                    <Row>
                        <Col>
                            <h3>Movie of the Day</h3>
                            <div id='motd'>
                                {/* <Poster posterOnly={true}/> */}
                                {motd}
                            </div>
                        </Col>
                        <Col>
                            <div id='posterSelected'>

                            </div>
                            <input type="text" placeholder='Enter movie title here...'/>
                        </Col> 
                    </Row>
                    <Row id='movieLinks'>
                        <Col className='inlineLinks' >
                            <NavLinks/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} id='multiPosterDisplay'>
                    <h3>I am the movie poster col</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Movies;