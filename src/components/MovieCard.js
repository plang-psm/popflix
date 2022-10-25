import React from 'react'

function MovieCard(props) {
  return (
    <div className='container'>
      <div className="poster"> <img src={props.poster} alt='image' /></div>
      {/* <p>{props.genre}</p> */}
    </div>
  )
}

export default MovieCard
