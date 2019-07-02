import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavLinks from './NavLinks'
import Poster from './Poster'

import { motdIds } from './helpers'

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movies.css'


const url = 'http://localhost:3001/motd';
// const movieId = 136;

function Movies() {
    const [movieRows, setMovieRows] = useState('');
    const [motd, setMotd] = useState('');
    const [selectedPoster, setSelectedPoster] = useState(<h1 id='comingSoon'>Coming Soon</h1>);
    // const [searchTerm, setSearchTerm] = useState('');

    function getMotd() {
        let d = new Date();
        const link = `${url}/${motdIds[d.getDate()-1]}`;
        axios.get(link)
        .then(searchResults => {
            var movies = searchResults.data;
            const moviePoster = <Poster posterOnly={true} movies={movies} onClick={addToDisplay}/>
            setMotd(moviePoster);
        })
        .catch(err => {
            console.error("Error getting data from back end: ", err)
        })  
    };

    function getFlipPoster(id) {
        const link = `${url}/flip/${id}`;
        axios.get(link)
        .then(searchResults => {
            setSelectedPoster(<Poster posterOnly={false} movies={searchResults.data}/>);
        })
        .catch(err => {
            console.error("Error getting data from back end fro flip movie: ", err)
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
            // only returns movies that are classified as horror, thriller, scifi
            movie.genre_ids.forEach(num => {
                if(num === 27 || num === 23 || num === 878) {
                    const movieRow = <Poster key={movie.id} posterOnly={true} movies={movie} onClick={addToDisplay}/> 
                    movieRows.push(movieRow)
                }
            })
          })
          movieRows.length > 0 ? setMovieRows(movieRows) : setMovieRows(<h1 className='noMatch'>No Matches Found</h1>);
        })
        .catch(error => {
          console.error('Error coming from DB:   ', error)
        })
      }

      function addToDisplay(event) {
        getFlipPoster(event.target.getAttribute('movieid'));
      }
    
      function searchChangeHandler(event){
        performSearch(event.target.value);
          
      }

      function clearInput() {

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
                <Col lg={8}>
                    <Row>
                        <Col>
                            
                            <div id='motd'>
                                {motd}
                            </div>
                            <p>Today's Bloodbath</p>
                        </Col>
                        <Col id='multiPosterDisplay'>
                            {movieRows} 
                        </Col> 
                    </Row>
                    <Row id='movieLinks'>
                        <Col className='inlineLinks' >
                            <NavLinks/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} >
                    <div id='posterSelected'>
                        {selectedPoster}
                    </div>
                    <input type="text" onChange={searchChangeHandler} placeholder='Enter movie title here...'/>
                    <span className='cross'  aria-labelledby='skull and crossbones' onClick={clearInput}>&#9760;</span>;

                </Col>
            </Row>
        </Container>
    )
}

export default Movies;