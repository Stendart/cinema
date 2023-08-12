import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { getMovies } from '../../api/movies'

export interface Movie {
  Poster: string,
  Runtime: string,
  Title: string,
  Year: string
} 

interface MovieState {
  value: number,
  list: Movie[]
}

const initialState: MovieState = {
  value: 0,
  list: []
}


export const fetchMovies = createAsyncThunk(
  'users/fetchMovies',
  async (userId: number, thunkAPI) => {
    const response = await getMovies();
    return response
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        // ToDo добавить прелоадер и обработку ошибок при загрузке
        //  state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('===', action.payload);
        
        state.list.push(action.payload)
      })
      // builder.addCase(loadChart.rejected, (state) => {
      //   state.status = 'failed';
      // });
  },
})

export const { increment, incrementByAmount } = movieSlice.actions

export default movieSlice.reducer