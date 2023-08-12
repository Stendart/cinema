import React from 'react'

import { Slider } from '../../components/Slider/Slider'
import { NewMovies } from '../../components/NewMovies/NewMovies'

export const MainPage = () => {
  // Тут будут запросы на получение новинок и всякого, что нужно для главной стр.
  // в фильмоотеке будет запросн а сисок фильмов
  return (
    <div className='main-page'>
      <div className="main-page__slider">
        <Slider />
      </div>
        <div className="main-page__new-movie">
          <NewMovies />
        </div>
    </div>
  )
}
