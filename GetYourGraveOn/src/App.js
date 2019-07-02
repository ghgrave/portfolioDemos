import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Movies from './Movies'
import Home from './Home'

function App() {
  return (
    <div className="App">
      
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} /> 
          {/* <Route path="/tv" component={TV} />
          <Route path="/games" component={Games} />   
          <Route path="/books" component={Books} />   
          <Route path="/sites" component={Sites} />   
          <Route path="/reviews" component={Reviews} />   
          <Route path="/archives" component={Archives} /> 
          <Route path="/ticTacDeath" component={TicTacDeath} />
          <Route path="/hangman" component={Hangman} />
          <Route path="/whackZombie" component={WhackZombie} />
          <Route path="/ghostFinder" component={GhostFinder} />
          <Route path="/soulMatch" component={SoulMatch} />
          <Route path="/franksLab" component={FranksLab} /> */}
      </Router>
    </div>
  );
}

export default App;
