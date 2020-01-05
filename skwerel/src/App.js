import React from 'react';

import {background_image} from './helpers';
import Background from '../src/images/skwerel-logo-white-1280.png';
import './App.css';

background_image.background = `#372449 url(${Background}) center no-repeat`;

function App() {
  return (
    <div id="app_container" style={background_image}>
      <h1>SKWEREL</h1>
      <form id='loginForm' action="">
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" placeholder='username' autoComplete='off'/>
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" placeholder='password'/>
      </form>
    </div>
  );
}

export default App;
