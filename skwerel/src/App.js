import React from 'react';

import {background_image} from './helpers';
import Background from '../src/images/skwerel-logo-white-1280.png';
import './App.css';

background_image.background = `#02342a url(${Background}) center no-repeat`;

function App() {
  return (
    <div id="app_container" style={background_image}>
      
    </div>
  );
}

export default App;
