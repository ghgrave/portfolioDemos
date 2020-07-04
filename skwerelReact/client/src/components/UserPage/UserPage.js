import React, { useState, useEffect } from "react";
import CalendarComp from "../Calendar/Calendar";
import { Link } from "react-router-dom";
import axios from "axios";

import DATA from "../../utils/data/fakeData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { background_image } from "../../utils/data/helpers";
import "./UserPage.css";

background_image.background = `initial`;

function UserPage() {
  const [events, setEvents] = useState([]);
  const [newsfeed, setNewsfeed] = useState([]);

  useEffect(() => {
    console.log(DATA.data);
    setEvents(DATA.data);
  }, []);

  useEffect(() => {
    axios
      .get("/user/newsfeed")
      .then((response) => {
       
        const displayNewsfeed = response.data.map((data, index) => {
          return (
            <div key={index} className="newsBox">
              <a  href={data.link} target='_blank'>{data.title}</a>
            </div>
          );
        });
        setNewsfeed(displayNewsfeed) 
      })
      .catch();
  }, []);

  return (
    <Container fluid={true} id="userPage_container">
      <Row>
        <Col lg={3}>
          <h3>Newsfeed</h3>
          <div id="media_container">
            {newsfeed}
          </div>
        </Col>
        <Col lg={6} style={background_image}>
          <h1>gHgrave</h1>
          <div id="calendar_container">
            <div id="calendar">
              <CalendarComp events={events} />
            </div>
          </div>
          {/* <h4 className="mt-1">Upcoming:</h4>
          <div className="mt-1" id="upcoming_container">
            <div id="upcoming"></div>
          </div> */}
        </Col>
        <Col lg={3}>
          <h3>
            <Link to="#">Movies</Link> | <Link to="#">Tv</Link>
          </h3>
          <div id="media_container">
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
            <div className="mediaBox"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPage;
