import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { MovieCard } from '../MovieCard/MovieCard';
import { Slider, Slide } from '../Slider/Slider';
import './NewMovies.css'

import { useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'

import { fetchNewMovies, fetchAllMovie } from '../../store/Movie/movieSlice';
import { newMoviesSelector, allMoviesSelector } from '../../store/Movie/movieSelector';


export const NewMovies = () => {
  const newMovies = useSelector(newMoviesSelector)
  // const allMovies = useSelector(allMoviesSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNewMovies())
    dispatch(fetchAllMovie())
  }, []);

  console.log('movies', newMovies);
  // console.log('allMovies', allMovies);

  const sliderList: Slide[] = newMovies.map(movie => {
    return {
      item: MovieCard,
      slideProps: movie
    }
  })
  

  return (
    <div className='new-movies'>
      <h3>New Movies</h3>
      <Slider slidesList={sliderList} />

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
      >
        { newMovies.map(movie =>
            <SwiperSlide
              key={movie.Title}
            >
              <MovieCard
                Poster={movie.Poster} 
                Runtime={movie.Runtime} 
                Title={movie.Title} 
                Year={movie.Year}  
              />
            </SwiperSlide>
          )
        }
      </Swiper>
      
    </div>
  )
}
