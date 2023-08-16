import { RootState } from ".."

export const newMoviesSelector = (state: RootState) => state.movie.newMovies;
export const allMoviesSelector = (state: RootState) => state.movie.allMovies;