import React, { useState } from "react";
import NavLinks from "./NavLinks";

// data object
import { tvShow } from "../helpers.js";

// styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Tv.css";

function Tv() {
  let newTvArr = [];
  let loadTvShows = (num, flag) => {
    let count = tvShow.length;
    for (let i = 0; i < count; i++) {
      let tempNum = Math.floor(Math.random() * num.length);
      newTvArr.push(num[tempNum]);
      tvShow.splice(tempNum, 1);
    }
    let playlistArr = newTvArr;
    newTvArr = flag ? newTvArr.slice(0, 3) : newTvArr;
    return newTvArr.map((data, i) => {
      let playlistId = (i === playlistArr.length-1) ? 0 : playlistArr.length-(i+1);
      let youTubeSource = `https://www.youtube.com/embed/${
        data.id
      }?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=${
        data.start
      }&amp;end=${data.start + 15}&amp;loop=1&amp;playlist=${playlistArr[playlistId].id}`;
      return (
        <div id="smTvScreen_container" key={data.id}>
          {/* <iframe title='smallTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
          <iframe
            data_id={data.id}
            title={data.showName}
            className="lg-you-tube"
            src={youTubeSource}
            allow="autoplay"
            frameBorder="0"></iframe>
        </div>
      );
    });
  };

  let loadTvGuide = data => {
    let newData = loadTvShows(data, false);
    let displayTime = new Date();
    let hourDisplay = displayTime.getHours();
    let minDisplay = 0;
    return newData.map((tvData, i) => {
      minDisplay = (displayTime.getMinutes() + 30 * i) % 60 < 31 ? "30" : "00";
      console.log(tvData.props.children.props);
      let { title, data_id } = tvData.props.children.props;
      return (
        <p>
          {(hourDisplay + i) % 12 === 0 ? 12 : (hourDisplay + i) % 12}:
          {minDisplay}
          {(hourDisplay + i) % 24 > 11 ? "pm" : "am"}
          <span
            data_id={data_id}
            data_title={title}
            class="tvShowTitles"
            onClick={clickTest}>
            {title}
          </span>
        </p>
      );
    });
  };

  const clickTest = e => {
    console.log(e.target.children);
    let youTubeSource = `https://www.youtube.com/embed/${e.target.getAttribute(
      "data_id"
    )}?autoplay=1&amp;controls=0&amp;showinfo=0`;
    setLgScreen(youTubeSource);
    setTvTitle(e.target.getAttribute("data_title"));
  };

  const [tvGuide, setTvGuide] = useState(loadTvGuide(tvShow));
  const [tvShows, setTvShows] = useState(loadTvShows(tvShow, true));
  const [tvTitle, setTvTitle] = useState("");
  const [lgScreen, setLgScreen] = useState(
    "https://giphy.com/embed/Yqn9tE2E00k4U"
  );

  return (
    <Container fluid={true} id="tv_background">
      <Row id="tvTitleImageRow">
        <Col>
          <h1>VIDEODROME</h1>
          <img
            id="tvBackgroundImage"
            src="assets/tvRoom.jpg"
            alt="empty room"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={4} id="remote_container">
          <h1 className="text-center">TV Guide</h1>
          <div id="tv-guide">{tvGuide}</div>
          <p>REMOTE</p>
          <div id="remote">
            <ul>
              <NavLinks />
            </ul>
          </div>
        </Col>
        <Col xl={5} id="tvTest">
          {/* <h3>{tvTitle}</h3> */}
          <div id="largeTvScreen_container">
          <h3 id='tvTitle'>{tvTitle}</h3>
            {/* <img id="largeTvScreen" src="/assets/tv-screen.png" alt="Large TV screen"/> */}
            {/* <iframe title='LargeTV' className="lg-you-tube" src="https://www.youtube.com/embed/fA7GZsJGYBg?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;start=58&amp;loop=1&amp;playlist=fA7GZsJGYBg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* <iframe title='LargeTV' src="https://giphy.com/embed/Yqn9tE2E00k4U" width="480" height="360" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
            {/* <iframe title='LargeTV' src="https://www.youtube.com/embed/d8dLwiT2KOo?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' allow="autoplay" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
            {/* <iframe title='LargeTV' src="https://www.youtube.com/embed/?autoplay=1&amp;controls=0&amp;showinfo=0&amp;start=40&amp;end=55&amp;loop=1&amp" width='50%' height='10vh' allow="autoplay" frameBorder="0" className="giphy-embed lg-you-tube" allowFullScreen></iframe> */}
            <iframe
              title="LargeTV"
              src={lgScreen}
              allow="autoplay"
              frameBorder="0"
              className="giphy-embed lg-you-tube"
              allowFullScreen></iframe>
          </div>
        </Col>
        <Col xl={3}>{tvShows}</Col>
      </Row>
      {/* <Row>
                {tvResults} 
            </Row> */}
    </Container>
  );
}

export default Tv;
