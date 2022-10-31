import React from 'react'
import ReadMore from '../components/ReadMore'

function WatchlistCard(props) {
    const API_IMG = 'https://image.tmdb.org/t/p/w200'

    return (
      <div className='card-container'>
        <div className="poster"> <img src={API_IMG+props.poster} alt='image' /></div>
        <div className="movie-info">
          <h2 className='margin-bottom'>{props.title}</h2>
          <div className="rating-info margin-bottom">
            <span className='span-bold'>Rating:</span>
            <p>{props.vote_count}</p>
            <p>&#11088;{props.vote_average}</p>
            <p>{props.popularity}</p>
          </div>
          
          <button className='margin-bottom watchlist-btn' onClick={props.removeFavorite}>Remove from watchlist</button>
  
          <p className='margin-bottom overview'><span className='span-bold'>Overview: </span>
            <ReadMore>
              {props.overview}
            </ReadMore>
          </p>
        </div>
      </div>
    )
  }

export default WatchlistCard
