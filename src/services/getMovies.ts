import api from "./axiosInstance";
export const getMovies = () =>
  api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=1`);
