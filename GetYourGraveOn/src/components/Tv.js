import React from 'react';
import NavLinks from './NavLinks'

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Tv.css';


const tvShow = [
    {
        showName: 'Buffy',
        id: '-1v_q6TWAL4',
        start: 112
    },
    {
        showName: 'AHS',
        id: '-9KZr2Vn7CQ',
        start: 50
    },
    {
        showName: 'Supernatural',
        id: 't-775JyzDTk',
        start: 62
    },
    {
        showName: 'Sabrina',
        id: 'd8dLwiT2KOo',
        start: 40
    }
]



let tvResults = tvShow.map((data, i) =>{
    let youTubeSource = `https://www.youtube.com/embed/${data.id}?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=${data.start}&amp;end=${data.start+15}&amp;loop=1&amp;playlist=fA7GZsJGYBg`;
    return (
        <Col xl={3} id='smTvScreen_container'>
            <img className="smallTvScreen" src="/assets/tv-screen.png" alt="tv screen"/>
            <iframe title={data.showName} className="you-tube" src={youTubeSource} allow="autoplay"></iframe>
        </Col>
    )
});

function Tv(){
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
                    <div id='tv-guide'>
                        <h1 className='text-center'>TV Guide</h1>
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
                </Col>
                <Col xl={6}  id='tvTest'>
                    <div id="largeTvScreen_container">
                        <img id="largeTvScreen" src="/assets/tv-screen.png" alt="Large TV screen"/>
                        {/* <iframe title='LargeTV' className="lg-you-tube" src="https://www.youtube.com/embed/fA7GZsJGYBg?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;start=58&amp;loop=1&amp;playlist=fA7GZsJGYBg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        
                            <iframe title='LargeTV' src="https://giphy.com/embed/Yqn9tE2E00k4U" width="480" height="360" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe>
                        
                    </div>
                </Col>
                <Col xl={2}>
                    <div id="remote">
                        <p>REMOTE</p>
                        <ul>
                            <NavLinks />
                        </ul>
                    </div>  
                </Col>
            </Row>
            {/* <Row>
                {tvResults} 
            </Row> */}
        </Container> 
    )
}

export default Tv;