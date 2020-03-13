import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/full_moon.png';

function Landing() {
  return (
    <div className="App">
      <nav>

      </nav>
      <header id='App_header'>
        <img src={logo} id="moon_image" alt="full moon" />
        <h1>full moon <Link to="/home">alpha</Link></h1>
      </header>
      <footer>
      {/* <p id="copyright">&copy;gHgraveDesigns 2020</p> */}
      </footer>
    </div>
  );
}

export default Landing;
