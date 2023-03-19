import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import WatchlistCard from '../components/WatchlistCard';

const API_KEY = process.env.REACT_APP_API_KEY;

function MovieHome() {
  const [movieData, setMovieData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [watchlist, setWatchlist] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Fetch movies.
  // async function fetchMovies(input) {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
  //   );
  //   const data = await res.json();
  //   if (data.results) {
  //     // Passing data into an array of custom objects.
  //     setMovieData(
  //       data.results.map((movie) => {
  //         return {
  //           key: movie.id,
  //           id: movie.id,
  //           poster: movie.poster_path,
  //           backdrop: movie.backdrop_path,
  //           title: movie.title,
  //           vote_average: movie.vote_average,
  //           vote_count: movie.vote_count,
  //           popularity: movie.popularity,
  //           overview: movie.overview,
  //           release_date: movie.release_date,
  //           added: false,
  //         };
  //       })
  //     );
  //   }
  // }

  // // Toggles the home page and watchlist.
  // const handleWatchlist = () => {
  //   setWatchlist((prevState) => !prevState);
  // };

  // // Fetches the movies with the users input.
  // useEffect(() => {
  //   fetchMovies(searchInput);
  // }, [searchInput]);

  // // Grabs the movies stored in local storage.
  // let watchlistMovies = JSON.parse(localStorage.getItem('movies')) || [];

  // // Adds favorite movies to the watchlist.
  // const addFavorite = (movie) => {
  //   let duplicate = watchlistMovies.some((element) => element.id === movie.id);
  //   if (duplicate) {
  //     alert('Duplication');
  //   } else {
  //     movie.added = true;
  //     watchlistMovies.unshift(movie);
  //     localStorage.setItem('movies', JSON.stringify(watchlistMovies));
  //   }
  // };

  // // Removes movies from the favorites watchlist.
  // const removeFavorite = (movie) => {
  //   let filteredFavorites = watchlistMovies.filter((item) => item != movie);
  //   movie.added = false;
  //   setFavorites(filteredFavorites);
  //   localStorage.setItem('movies', JSON.stringify(filteredFavorites));
  // };

  // // Renders movies upon search.
  // const movieElements = movieData.map((movie) => {
  //   return (
  //     <MovieCard
  //       key={movie.id}
  //       id={movie.id}
  //       poster={movie.poster}
  //       backdrop={movie.backdrop}
  //       title={movie.title}
  //       vote_average={movie.vote_average}
  //       vote_count={movie.vote_count}
  //       popularity={movie.popularity}
  //       overview={movie.overview}
  //       release_date={movie.release_date}
  //       addFavorite={() => addFavorite(movie)}
  //       added={movie.added}
  //     />
  //   );
  // });

  // // Renders watchlist movies.
  // const watchlistElements = watchlistMovies.map((movie) => {
  //   return (
  //     <WatchlistCard
  //       key={movie.id}
  //       id={movie.id}
  //       poster={movie.poster}
  //       backdrop={movie.backdrop}
  //       title={movie.title}
  //       vote_average={movie.vote_average}
  //       vote_count={movie.vote_count}
  //       popularity={movie.popularity}
  //       overview={movie.overview}
  //       release_date={movie.release_date}
  //       removeFavorite={() => removeFavorite(movie)}
  //       added={movie.added}
  //     />
  //   );
  // });
  return (
    <div>HOME</div>
    // <div className='container'>
    //   {/* Search bar + button */}
    //   {watchlist === false ? (
    //     <div className='searchbar'>
    //       <input
    //         type='search'
    //         placeholder='Search movies'
    //         onChange={(event) => setSearchInput(event.target.value)}
    //       />
    //     </div>
    //   ) : (
    //     <h1 className='watchlist-header'>Watchlist</h1>
    //   )}

    //   {/* Cards of info */}
    //   {watchlist === false ? movieElements : watchlistElements}

    //   {/* Footer */}
    // </div>
  );
}

export default MovieHome;
