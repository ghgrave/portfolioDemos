import React from 'react';

import {background_image} from './helpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../src/images/skwerel-logo-1280-shadow.svg';
import OakTree from "../src/images/oakTree.png"
import './Home.css';

background_image.background = `#372449 url(${Background}) center bottom no-repeat`;


function Home() {
  return (
    <Container fluid={true}>
      <Row>
        <Col lg={3} >
          <form id='loginForm' action="">
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder='username' autoComplete='off'/>
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder='password'/>
          </form>
        </Col>
        <Col lg={6} style={background_image}>
          <div className="oakTree_container">
            <img src={OakTree} alt="Oak Tree"/>
          </div>
            <h1>skwerel</h1>
        </Col>
        <Col lg={3} >
          <div className="mediaBox"></div>
          <h3>Movie of the Day</h3>
          <div className="mediaBox"></div>
          <h3>TV Show of the Day</h3>
        </Col>
      </Row>

    </Container>
  );
}

export default Home;
