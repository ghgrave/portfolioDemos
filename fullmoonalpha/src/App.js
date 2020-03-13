import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        {/*<Route path="/movies" component={Movies} />
        <Route path="/tv" component={TV} />
        <Route path="/games" component={Games} />
        <Route path="/books" component={Books} />   
        <Route path="/sites" component={Sites} />   
        <Route path="/reviews" component={Reviews} />   
        <Route path="/archives" component={Archives} /> */}
      </Router>
      <p id="copyright">&copy;gHgraveDesigns 2020</p>
    </div>
  );
}

export default App;
