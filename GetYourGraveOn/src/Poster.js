import React from 'react'

function Poster (props) {
    let displayPoster;
    let { poster_src, poster_path, id, title} = props.movies;
    poster_src = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : 'assets/werewolf-collection-2-002.jpg'
    if(props.posterOnly) {    
        displayPoster = <div className='test'>
                            <img alt="poster" src={poster_src} onClick={props.onClick} key={id} movieid={id}></img>
                        </div>
    } else {
        displayPoster = <div className='test'>
                            <h1>{title}</h1>
                            <img alt="poster" src={poster_src} key={id} ></img>
                        </div>
    }


    return (
        <div>
            {displayPoster} 
        </div>
        
    )
}

export default Poster;