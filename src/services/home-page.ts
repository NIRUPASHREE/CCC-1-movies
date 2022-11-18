import axios from 'axios';

export const getMoviesBySearchKey = (searchKey: string) => {
  //${process.env.REACT_APP_API_KEY}
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=8fa9a5d7460a3c602126d6abdf94f0a9&query=${searchKey}`,
    )
    .then((res) => {
      if (res.status === 200) {
        return res.data.results;
      } else {
        const error = new Error('no response');
        throw error;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
