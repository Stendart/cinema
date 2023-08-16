import React from 'react'

import { Slider } from '../../components/Slider/Slider'
import { NewMovies } from '../../components/NewMovies/NewMovies'
import { AllMovies } from '../../components/AllMovies/AllMovies'

import './MainPage.css'

export const MainPage = () => {
  
  return (
    <div className='main-page'>
      <div className="main-page__slider">
        {/* <Slider /> */}
      </div>
        <div className="main-page__new-movie">
          <NewMovies />
        </div>
        <div className="main-page__all-movie">
          <AllMovies />
        </div>
    </div>
  )
}
