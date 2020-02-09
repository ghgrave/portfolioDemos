import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavLinks from './NavLinks'
import NavbarComp from './NavbarComp'
import Poster from './Poster'

import { motdIds } from '../helpers'
import {CONFIG} from '../config'
import atticImage from '../assets/images/attic.jpg'
import countdown from '../assets/images/countdown.gif'

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movies.css'

const endpoint= `https://api.themoviedb.org/3`;
const apiKey = `api_key=${CONFIG.TMDB_KEY}`

function Movies() {
    const [movieRows, setMovieRows] = useState(<img src={countdown} alt="counting down gif"
                                                    style={{margin: 0, width: '100%', height: '50vh', outline: 'none'}}/>);
    const [motd, setMotd] = useState('');
    const [selectedPoster, setSelectedPoster] = useState(<h1 id='comingSoon'>Coming Soon</h1>);
    const [placeholderText, setPlaceholdertext] = useState('Enter movie title here...');

    function getMotd() {
        let d = new Date();
        const link = `${endpoint}/movie/${motdIds[d.getDate()-1]}?${apiKey}`
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
        const link = `${endpoint}/movie/${id}?${apiKey}`
        axios.get(link)
        .then(searchResults => {
            setSelectedPoster(<Poster posterOnly={false} movies={searchResults.data}/>);
        })
        .catch(err => {
            console.error("Error getting data from back end from flip movie: ", err)
        })  
    };

    function performSearch(searchTerm) {
        const link = `${endpoint}/search/movie?${apiKey}&query=${searchTerm}`
       
        axios.get(link)
        .then(searchResults => {
          let movies = searchResults.data.results;
          var movieRows = [];
          movies.forEach((movie) => {
            // only returns movies that are classified as horror, thriller, scifi
            movie.genre_ids.forEach(num => {
                if(num === 27 || (num === 23 && num === 878)) {
                    const movieRow = <Poster key={movie.id} posterOnly={true} movies={movie} onClick={addToDisplay}/> 
                    movieRows.push(movieRow)
                }
            })
          })
          movieRows.length > 0 ? setMovieRows(movieRows) : setMovieRows(<h1 className='noMatch'>No Matches Found</h1>);
        })
        .catch(error => {
          console.error('Perform search Error coming from backend search:   ', error)
        })
      }

      function addToDisplay(event) {
        getFlipPoster(event.target.getAttribute('movieid'));
      }
    
      function searchChangeHandler(event){
            performSearch(event.target.value);   
      }

    //   function clearInput(event) {
    //       console.log(event.key)
    //       console.log(event.target.value)
    //     setPlaceholdertext('Enter movie title here...');
    //   }

    useEffect(() => {
        getMotd();
    }, []);

    return (
        <Container fluid={true} id='movies_container'>
            <Row id='titleImageRow'>
                <Col>
                    <h1>Going to Pieces</h1>
                    <img src={atticImage} alt="attic"/>
                </Col>
            </Row>
            <Row id='movieDisplayRow'>
                <Col xl={4} sm={12}>
                    <div id='motd'>
                        {motd}
                    </div>
                    <p id='bloodbath'>Today's Bloodbath</p>
                </Col>
                <Col xl={4} sm={12} id='multiPosterDisplay'>
                    {movieRows} 
                </Col> 
                <Col xl={4} sm={12} id='test'>
                    <div id='posterSelected'>
                        {selectedPoster}
                    </div>
                    <input type="text" onChange={searchChangeHandler}  placeholder={placeholderText}/>
                    {/* <span className='cross'  aria-labelledby='skull and crossbones' onClick={clearInput}>&#9760;</span>; */}
                </Col>
            </Row>
            <Row id='movieLinks'>
                <Col className='inlineLinks' >
                    <NavLinks className='remove'/>
                    <NavbarComp id='navbarComp'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Movies;