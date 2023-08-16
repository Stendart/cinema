import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { loadNewMovies, loadAllMovies } from '../../api/movies'

export interface Movie {
  Poster: string,
  Runtime?: string,
  Title: string,
  Year?: string
} 

interface MovieState {
  status: 'loading' | 'idle' | 'error',
  newMovies: Movie[],
  allMovies: Movie[]
}

const initialState: MovieState = {
  status: 'idle',
  newMovies: [],
  allMovies: []
}


export const fetchNewMovies = createAsyncThunk(
  'movie/fetchNewMovies',
  async () => {
    const response = await loadNewMovies();
    return response
  }
)

export const fetchAllMovie = createAsyncThunk(
  'movie/fetchAllMovie',
  async () => {
    const responce = await loadAllMovies();
    return responce
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewMovies.pending, (state, action) => {
         state.status = 'loading';
      })
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.newMovies = action.payload;
        state.status = 'idle';
        // state.list.push(action.payload)
      })
      .addCase(fetchNewMovies.rejected, (state) => {
        state.status = 'error';
      })

      .addCase(fetchAllMovie.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        // state.list.push(action.payload)
      })
  },
})

// export const { increment, incrementByAmount } = movieSlice.actions

export default movieSlice.reducer