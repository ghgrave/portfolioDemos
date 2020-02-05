import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks'

// import tvScreen from '../assets/images/tv-screen.png'

// data object
import {tvShow} from '../helpers.js'

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Tv.css';


let tvResults = [];

// let tvResults = tvShow.map((data, i) =>{
//     let youTubeSource = `https://www.youtube.com/embed/${data.id}?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=${data.start}&amp;end=${data.start+15}&amp;loop=1&amp;playlist=fA7GZsJGYBg`;
//     return (
//         <div id='smTvScreen_container'>
//             {/* <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
//             <iframe title={data.showName} className="lg-you-tube" src={youTubeSource} allow="autoplay" frameBorder="0"></iframe>
//         </div> 
//     )
// });
let loadTvShows = (num) => {
    let newTvArr = []
    // let count = tvShow.length;
    for(let i = 0; i< 3; i++){
        let tempNum = Math.floor(Math.random()*num.length)
        newTvArr.push(num[tempNum])
        tvShow.splice(tempNum, 1);
    }
    return tvResults = newTvArr.map((data, i) =>{
        let youTubeSource = `https://www.youtube.com/embed/${data.id}?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=${data.start}&amp;end=${data.start+15}&amp;loop=1&amp;playlist=fA7GZsJGYBg`;
        return (
            <div id='smTvScreen_container'>
                {/* <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
                <iframe title={data.showName} className="lg-you-tube" src={youTubeSource} allow="autoplay" frameBorder="0"></iframe>
            </div> 
        )
    });
    
}


function Tv(){
    loadTvShows(tvShow);
    return (
        <Container fluid={true} id='tv_background'>
            <Row id='tvTitleImageRow'>
                <Col>
                    <h1 >VIDEODROME</h1>
                    <img id='tvBackgroundImage' src="assets/tvRoom.jpg" alt="empty room"/>
                </Col> 
            </Row>
            <Row>
                <Col xl={4} id="remote_container">
                <h1 className='text-center'>TV Guide</h1>
                    <div id='tv-guide'>
                        
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                        <p>Stuff</p>
                    </div>
                    <p>REMOTE</p>
                    <div id="remote">
                        <ul>
                            <NavLinks />
                        </ul>
                    </div>  
                </Col>
                <Col xl={5}  id='tvTest'>
                    <div id="largeTvScreen_container">
                        {/* <img id="largeTvScreen" src="/assets/tv-screen.png" alt="Large TV screen"/> */}
                        {/* <iframe title='LargeTV' className="lg-you-tube" src="https://www.youtube.com/embed/fA7GZsJGYBg?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;start=58&amp;loop=1&amp;playlist=fA7GZsJGYBg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        
                            {/* <iframe title='LargeTV' src="https://giphy.com/embed/Yqn9tE2E00k4U" width="480" height="360" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
                            <iframe title='LargeTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' allow="autoplay" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe>
                        
                    </div>
                </Col>
                <Col xl={3}>
                    {/* <div id='smTvScreen_container'>
                        <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe>
                    </div>   
                    <div id='smTvScreen_container'>
                        <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe>
                    </div> 
                    <div id='smTvScreen_container'>
                        <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe>
                    </div>  */}
                    {tvResults} 
                   
                </Col>
            </Row>
            {/* <Row>
                {tvResults} 
            </Row> */}
        </Container> 
    )
}

export default Tv;