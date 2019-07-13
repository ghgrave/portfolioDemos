import React from 'react';
import { Link } from 'react-router-dom'; 

// components
// import NavLinks from './NavLinks';

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'

function Home(){
    return (
        <Container fluid={true} id='home_container'>
            <Row>
                <Col>
                    <h1 id='title_container'>Get Your Grave On</h1>
                </Col> 
            </Row>
            
            <Row id='linksRow'>
                <Col xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/tv">TV</Link>
                    </li>
                </Col>
                <Col xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </Col >
                <Col xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </Col>
                <Col xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/sites">Sites</Link>
                    </li>
                </Col>
                <Col  xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/games">Games</Link>
                    </li>
                </Col>
                <Col  xl={2} lg={6} md={12} sm={6}>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Home;
