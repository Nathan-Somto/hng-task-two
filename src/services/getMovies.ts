import api from "./axiosInstance";
export const getMovies = () =>
  api.get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=1`);
