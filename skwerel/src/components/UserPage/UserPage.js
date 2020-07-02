import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {background_image} from '../../utils/helpers';

import './UserPage.css'

background_image.background = `initial`;

function UserPage(){
    return(
        <Container fluid={true} id='userPage_container'>
      <Row>
        <Col lg={3} >
          
        </Col>
        <Col lg={6} style={background_image}>
            <h1>UserPage</h1>
        </Col>
        <Col lg={3} >
          <div className="mediaBox"></div>
          <h3>Movie of the Day</h3>
          <div className="mediaBox"></div>
          <h3>TV Show of the Day</h3>
        </Col>
      </Row>

    </Container>
    )
}

export default UserPage;