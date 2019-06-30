import React from 'react';
import { Link } from 'react-router-dom'; 

function Navlinks() {
    return (
        <div>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/sites">Sites</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/archives">Archives</Link></li>
            <li><Link to="/">Graveyard</Link></li>
        </div> 
    )
}

export default Navlinks;