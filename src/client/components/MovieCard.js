import React from 'react'
import ReadMore from '../util/ReadMore'


function MovieCard(props) {

  const API_IMG = 'https://image.tmdb.org/t/p/w200'

  return (
    <div className='card-container'>
      <div className="poster"> <img src={API_IMG+props.poster} alt='image' /></div>
      <div className="movie-info">
        <h2 className='margin-bottom'>{props.title}</h2>
        <div className="rating-info margin-bottom">
          <p>&#128499;{props.vote_count}</p>
          <p>&#11088;{props.vote_average}</p>
          <p>👤{(props.popularity).toFixed(2)}</p>
        </div>
        
        <button className='margin-bottom watchlist-btn' onClick={props.addFavorite}>Add to watchlist</button>

        <p className='margin-bottom overview'><span className='span-bold'>Overview: </span>
          <ReadMore>
            {props.overview}
          </ReadMore>
        </p>
      </div>
    </div>
  )
}

export default MovieCard
