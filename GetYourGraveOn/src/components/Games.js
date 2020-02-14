import React from "react";
import NavLinks from "./NavLinks";
import NavbarComp from "./NavbarComp";

import tunnel from "../assets/images/tunnel.jpg";

// styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Games.css'

function Games() {
  return (
    <Container fluid={true} id="movies_container">
      <Row id="gamesImageRow">
        <Col>
          <h1>Battle Royale</h1>
          <img id="gamesBackgroundImage" src={tunnel} alt="tunnel" />
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col className="games_inlineLinks">
          <NavLinks className="remove" />
          <NavbarComp id="navbarComp" />
        </Col>
      </Row>
    </Container>
  );
}

export default Games;
