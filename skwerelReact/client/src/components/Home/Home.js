import React, { useEffect, useState } from "react";
import axios from "axios";
import DATA from "../../config/config";
// import MOVIE_END from "../../config/config";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Background from "../../images/skwerel-logo-1280-shadow.svg";
import OakTree from "../../images/oakTree.png";
import { background_image } from "../../utils/data/helpers";
import "./Home.css";

// background_image.background = `#372449 url(${Background}) center bottom no-repeat`;

function Home(props) {

  const [motd, setMotd] = useState({});
  const [tvotd, setTvotd] = useState({});

  function randMovie() {
    axios
      .get(`${DATA.MOVIE_URL}/now_playing?api_key=${DATA.CONFIG.TMDB_KEY}`)
      .then((movieResults) => {
        let movie =
          movieResults.data.results[
            Math.floor(Math.random() * movieResults.data.results.length)
          ];
          let poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        setMotd({...movie, poster});
      })
      .catch((err) => console.log("Error getting MOTD: ", err));
  }

  function randTv() {
    axios
      .get(`${DATA.TV_URL}/popular?api_key=${DATA.CONFIG.TMDB_KEY}`)
      .then((tvResults) => {
        let tv =
          tvResults.data.results[
            Math.floor(Math.random() * tvResults.data.results.length)
          ];
          let poster = `https://image.tmdb.org/t/p/w200${tv.poster_path}`
        setTvotd({...tv, poster});
      })
      .catch((err) => console.log("Error getting TVOTD: ", err));
  }

  useEffect(() => {
    randMovie();
    randTv()
  }, []);

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
          className="mt-2"
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
          <div className="mediaBox">
            <img src={motd.poster} alt={motd.title} />
            </div>
          <h3>Movie</h3>
          <div className="mediaBox">
          <img src={tvotd.poster} alt={tvotd.name} />
          </div>
          <h3>TV Show</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
