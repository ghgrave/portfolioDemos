import React from 'react'
import './Poster.css'

import werewolfCartoon from '../assets/images/werewolfCartoon.jpg'

function Poster (props) {
    let displayPoster;

    let { poster_src, poster_path, id, title, genres, release_date, overview, imdb_id} = props.movies;
    poster_src = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : werewolfCartoon;
    if(props.posterOnly) {    
        displayPoster = <div className='test'>
                            <img alt={title} title={title} src={poster_src} onClick={props.onClick} key={id} movieid={id}></img>
                        </div>
    } else {
        let imdb_idLink = `https://www.imdb.com/title/${imdb_id}`
        displayPoster =  <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div className="flipper">
                                <div className="front">
                                    <img alt={title} title={title} src={poster_src} key={id} ></img>
                                </div>

                                {/* sets back of flipper card to specific data based on results.Title */}
                                <div className="back movieResults">
                                    <div>
                                        <h3 className="text-center shadow movieDesc">{title}
                                            <br/><a className="text-center small" id="imdb_link" href={imdb_idLink} target="_blank" rel="noopener noreferrer">imdb LINK</a>
                                        </h3>
                                        <p className='movieDesc'>{release_date}</p>
                                        {/* <p>{rated}</p> */}
                                        {genres.map((genre, i) => {
                                            return <p key={i} className='movieDesc genreDesc'>{genre.name}</p>
                                        })}
                                        {/* <p className='movieDesc'>{genres[0].name}</p> */}
                                        {/* <h5 className="text-center shadow">Director(s):</h5> */}
                                        {/* <p>{director}</p> */}
                                        <h5 className="text-center shadow">Plot:</h5>
                                        <p className='movieDesc'>{overview}</p>
                                    </div>
                                {/* ends back of flipper card */}
                                </div>
                            </div>
                        </div>         
    }


    return (
        <div>
            {displayPoster} 
        </div>
        
    )
}

export default Poster;