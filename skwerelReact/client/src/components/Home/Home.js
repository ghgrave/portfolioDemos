import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Background from "../../images/skwerel-logo-1280-shadow.svg";
import OakTree from "../../images/oakTree.png";
import { background_image } from "../../utils/helpers";
import "./Home.css";

// background_image.background = `#372449 url(${Background}) center bottom no-repeat`;

function Home(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push("/user");
  };
  return (
    <Container fluid={true} id="home_container">
      <Row>
        <Col lg={3}>
          <form id="loginForm" className="text-center" onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              autoComplete="off"
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <Button type="submit" variant="success" className="btn-lg mt-2">
              SUBMIT
            </Button>
          </form>
        </Col>
        <Col
        className='mt-2'
          lg={6}
          style={{
            background_image,
            boxShadow: `0px -1px 16px 12px #000000bf`,
            background: `#372449 url(${Background}) center bottom no-repeat`,
          }}>
          <div className="oakTree_container">
            <img src={OakTree} alt="Oak Tree" />
          </div>
          <h1>skwerel</h1>
        </Col>
        <Col lg={3}>
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
