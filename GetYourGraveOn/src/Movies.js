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

    const [movieRows, setMovieRows] = useState('');
    const [motd, setMotd] = useState('');
    // const [searchTerm, setSearchTerm] = useState('');

    function getMotd() {
        const link = `${url}/${movieId}`;
        axios.get(link)
        .then(searchResults => {
            var movies = searchResults.data;
            const moviePoster = <Poster posterOnly={true} movies={movies}/>
            setMotd(moviePoster);
        })
        .catch(err => {
            console.error("Error getting data from back end: ", err)
        })  
    };

    function performSearch(searchTerm) {
        const link = `${url}/multi/${searchTerm}`
        // const url = `https://api.themoviedb.org/3/search/movie?api_key=4de3f13a4cdd05831b95a97d3b3e2da6&query=${searchTerm}`
    
        axios.get(link)
        .then(searchResults => {
          let movies = searchResults.data;
          var movieRows = [];
          movies.forEach((movie) => {
            const movieRow = <Poster posterOnly={true} movies={movie}/> 
            movieRows.push(movieRow)
          })
          setMovieRows(movieRows);
        })
        .catch(error => {
          console.error('Error coming from DB:   ', error)
        })

      }
    
      function searchChangeHandler(event){
        console.log(event.target.value);
        performSearch(event.target.value);
      
      }

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
                                {motd}
                            </div>
                        </Col>
                        <Col>
                            <div id='posterSelected'>

                            </div>
                            <input type="text" onChange={searchChangeHandler} placeholder='Enter movie title here...'/>
                        </Col> 
                    </Row>
                    <Row id='movieLinks'>
                        <Col className='inlineLinks' >
                            <NavLinks/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} id='multiPosterDisplay'>
                    {movieRows}
                </Col>
            </Row>
        </Container>
    )
}

export default Movies;