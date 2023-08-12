

export const getMovies = () => {
  return fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then((response) => {
          return response.json()
        })
        .then((json) => json)
        .catch(err => {
          console.log('err', err);
        });
}

const loadMovie = () => {
  
}