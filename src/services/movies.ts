import axios from "axios";

const URL = "https://super-nset.herokuapp.com/movies/";

const getMovies = () => axios.get(`${URL}`);

const movieDetail = (id: string) => axios.get(`${URL}${id}`);

const searchMovies = (searchString: string) =>
  axios.get(`${URL}search?search=${searchString}`);

export { getMovies, searchMovies, movieDetail };
