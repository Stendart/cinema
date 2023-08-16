import React, { FC, ReactElement, ReactNode } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';


export interface Slide {
  item: any,
  slideProps: {[key: string] : string | number}
}

interface SliderProps {
  swiperConfig?: SwiperProps,
  slidesList: Slide[]
}

export const Slider: FC<SliderProps> = (props) => {
  const { swiperConfig, slidesList } = props;

  return (
    <Swiper
        {...swiperConfig}
      >
        { slidesList.map(slide =>
            <SwiperSlide
              key={slide.slideProps.Title}
            >
              {
                React.cloneElement(slide.item, {
                  ...slide.slideProps
                })
              }

              {/* <MovieCard
                Poster={movie.Poster} 
                Runtime={movie.Runtime} 
                Title={movie.Title} 
                Year={movie.Year}  
              /> */}
            </SwiperSlide>
          )
        }
      </Swiper>
  )
}
