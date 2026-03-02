import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movie);
  return (
    (movies.nowPlayingMovies &&
    <div className='bg-black'>
        <div className='-mt-40 pl-2 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcomming"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>)
  )
}

export default SecondaryContainer