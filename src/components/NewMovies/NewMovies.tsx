import React, { useState, useEffect } from 'react'

import { MovieCard } from '../MovieCard/MovieCard';
import './NewMovies.css'

import { getMovies } from '../../api/movies';

import { RootState, useAppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, fetchMovies, Movie } from '../../store/Movie/movieSlice';


// преобразование ключей объекта Movie к нижниму регистру
const prepareMoviesDataHelper = (movies: any[]) => {
  const preparedMovies = movies.reduce<Movie[]>((acc, val) => {
    let m = {} as Movie;

    for(let key in val) {
      const k = key.toLowerCase() as keyof Movie
      m[k] = val[key];
    }

    return [...acc, m];
  }, [])

  return preparedMovies;
}


export const NewMovies = () => {
  const movies = useSelector((state: RootState) => state.movie.list)
  const dispatch = useAppDispatch()

  // const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // getMovieList();
    dispatch(fetchMovies(1))
  }, []);

  // const getMovieList = async () => {
  //   const movies = await getMovies();
  //   const prepareMovies: Movie[] = prepareMoviesDataHelper(movies);

  //   setMovies(prepareMovies);
  // }

  console.log('movies', movies);

  return (
    <div className='new-movies'>
      { movies.map(movie =>
          <MovieCard
            key={movie.Title}
            Poster={movie.Poster} 
            Runtime={movie.Runtime} 
            Title={movie.Title} 
            Year={movie.Year}  
          />
        )
      }
    </div>
  )
}
