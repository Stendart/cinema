import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../store'
import { allMoviesSelector } from '../../store/Movie/movieSelector'
import { fetchAllMovie } from '../../store/Movie/movieSlice'

import { MovieCard } from '../MovieCard/MovieCard'

export const AllMovies = () => {
  const dispatch = useAppDispatch();
  const allMovie = useSelector(allMoviesSelector);

  useEffect(() => {
    dispatch(fetchAllMovie);
  }, [])

  console.log('allMovie123', allMovie);
  

  return (
    <div>
      { allMovie.map(movie => <MovieCard key={movie.Title} Poster={movie.Poster} Title={movie.Title} />) }
    </div>
  )
}
