import React from "react";
import CalendarComp from "../Calendar/Calendar";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { background_image } from "../../utils/helpers";

import "./UserPage.css";

background_image.background = `initial`;

function UserPage() {
  return (
    <Container fluid={true} id="userPage_container">
      <Row>
        <Col lg={3}>
          <h3>Newsfeed</h3>
          <div id="media_container">
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
            <div className="newsBox">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              cupiditate, perspiciatis id perferendis ipsam dolor excepturi
              nostrum animi delectus cum modi inventore laudantium culpa quaerat
              quis ex alias beatae molestias?
            </div>
          </div>
        </Col>
        <Col lg={6} style={background_image}>
          <h1>gHgrave</h1>
          <div id="calendar_container">
            <div id="calendar">
              <CalendarComp />
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
