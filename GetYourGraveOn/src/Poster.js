import React from 'react'

function Poster (props) {
    let { poster_src, poster_path, id, title} = props.movies;
    poster_src = `https://image.tmdb.org/t/p/w200${poster_path}`
    return (

            

        <div className='test' key={id}>
            <img alt="poster" src={poster_src}></img>
            {title}
        </div>
    )
}

export default Poster;