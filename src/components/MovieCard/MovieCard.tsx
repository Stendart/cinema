import React, { FC } from 'react'

import { increment, Movie } from '../../store/Movie/movieSlice';
import './MovieCard.css'

// interface MovieCardProps {
//   poster: string,
//   runtime: string,
//   title: string,
//   year: string
// }

interface MovieCardProps extends Movie {}



export const MovieCard: FC<MovieCardProps> = (props) => {
  
  return (
    <div className='movie-card'>
      <div className="movie-card__img-wrap">
        <img src={props.Poster} alt="" className="movie-card__img" />
      </div>

      <div className="movie-card__title">
        { props.Title }
      </div>
      
    </div>
  )
}
