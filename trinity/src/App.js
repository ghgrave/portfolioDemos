import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Home from './components/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Home}/>
      </Router>
    </div>
  );
}

export default App;
