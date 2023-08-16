import { mockMovies } from "./mock-data";

import { Movie } from "../store/Movie/movieSlice";

export const loadNewMovies = () => {
  return loadData('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
}

export const loadAllMovies = (): any => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockMovies), 1000)
  })
}

const loadData = (url: string) => {
  return fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((json) => json)
        .catch(err => {
          console.log('err', err);
        });
}