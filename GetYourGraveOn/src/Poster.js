import React from 'react'

function Poster (props) {
    let displayPoster;
    let { poster_src, poster_path, id, title} = props.movies;
    poster_src = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : 'assets/werewolf-collection-2-002.jpg'
    console.log(props.posterOnly);
    if(props.posterOnly) {
        displayPoster = <div className='test' key={id}>
                            <img alt="poster" src={poster_src}></img>
                        </div>
    } else {
        displayPoster = "Hello!!!!"
    }
    return (
        <div>
            {displayPoster} 
        </div>
        
    )
}

export default Poster;