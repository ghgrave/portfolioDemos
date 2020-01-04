import React from 'react';
import Background from '../src/images/skwerel-logo-white-1280.png';
import './App.css';

let styles = {
  display: `flex`,
  flexDirection: `column`,
  height: '100vh',
  width: `100%`,
  background: `#02342a url(${Background}) center no-repeat`,
  margin: `0 auto`
}

function App() {
  return (
    <div id="app_container" style={styles}>
      
    </div>
  );
}

export default App;
