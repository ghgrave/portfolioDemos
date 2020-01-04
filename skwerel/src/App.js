import React from 'react';
import Background from '../src/images/skwerel-logo-white-1280.png';
import './App.css';

let styles = {
  height: '94vh',
  width: `97%`,
  background: `#02342a url(${Background}) center center no-repeat`,
  margin: `0 auto`,
  border: '1.5em ridge #551717'
}

function App() {
  return (
    <div id="app_container" style={styles}>
      
    </div>
  );
}

export default App;
