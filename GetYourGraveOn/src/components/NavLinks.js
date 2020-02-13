import React from 'react';
import { Link } from 'react-router-dom'; 

function Navlinks() {
    return (
        <div>
            <li><Link to="/tv">TV<span className='smallLink'>RIP</span></Link></li>
            <li><Link >Books<span className='smallLink'>RIP</span></Link></li>
            <li><Link to="/movies">Movies</Link></li>
            
            <li><Link >Games<span className='smallLink'>RIP</span></Link></li>
            <li><Link >Sites<span className='smallLink'>RIP</span></Link></li>
            <li><Link >Reviews<span className='smallLink'>RIP</span></Link></li>
            <li><Link >Archives<span className='smallLink'>RIP</span></Link></li>
            <li><Link to="/">Graveyard</Link></li>
            {/* <li><a href="https://monstras.herokuapp.com" target='_blank' rel='noopener noreferrer'>Monstra</a></li> */}
        </div> 
    )
}

export default Navlinks;