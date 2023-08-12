import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './Movie/movieSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    movie: movieSlice
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
