import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';

import Home from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';

function App(){
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={UserPage} />
            </div>
      </Router>
    )
}

export default App;