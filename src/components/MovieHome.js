import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';

// fetch(`http://www.omdbapi.com/?s=${searchVal}&apikey=a88330ab&plot=short&page=1`)
function MovieHome() {
const [movieData, setMovieData] = useState([]);
const [searchInput, setSearchInput] = useState('');

// Fetch movies
async function fetchMovies(input) {
    const res = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=a88330ab&plot=full&page=1-100`);
    const data = await res.json();
    // console.log(data);
    if(data.Search) {
        // displayMovies(data.Search);
        setMovieData( data.Search.map((movie) => {
            return {
                    key: movie.imdbID,
                    id: movie.imdbID,
                    poster: movie.Poster,      
                    title: movie.Title,
                    type: movie.Type,
                    year: movie.Year,
                    imbdID: movie.imdbID,
                 }
            }));
    }
}

// async function displayMovies(data) {
//     for (let movie of data) {
//         // let imdb = movie.imdb;
//         // const res2 = await fetch(`http://www.omdbapi.com/?i=${imdb}&apikey=a88330ab`);
//         // const details = await res2.json();
//         setMovieData( 
//             // data.Search.map((movie) => {
//             // return 
//             {
//                 id: movie.imdbID,
//                 poster: movie.Poster,      
//                 title: movie.Title,
//                 type: movie.Type,
//                 year: movie.Year, 
//                 imbdID: movie.imdbID
//                 // runtime: details.runtime,
//                 // rating: details.imdbRating,
//                 // genre: details.genre,
//                 // plot: details.plot
//             })
//         // }
//         // ))
//     }
// }

useEffect(() => {
    fetchMovies(searchInput)
}, [searchInput])

const movieElements = movieData.map(movie => {
    return (
        <MovieCard 
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            type={movie.type}
            year={movie.year}
            imdbID={movie.imdbID}
            // runtime={movie.runtime}
            // rating={movie.rating}
            // genre={movie.rating}
            // plot={movie.plot}
        /> 
    )
}) 

  return (
    <div className='container'>
        {/* Header */}
        <div className="header">
            <h1>Title</h1>
            <h3>Watchlist</h3>
        </div>
        {/* Search bar + button */}
        <div className="searchbar">
        <input 
            type='search' 
            placeholder='Search movies'
            onChange={(event) => setSearchInput(event.target.value)}
        />
        </div>

        {/* Cards of info */}
        {searchInput.length > 0 ? movieElements : <p>Nothing</p>}

        {/* Footer */}
        
    </div>
  )
}

export default MovieHome
