import { RootState } from ".."

export const movieSelector = (state: RootState) => state.movie.list;