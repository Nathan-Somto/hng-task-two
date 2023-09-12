import api from "./axiosInstance";
export const searchMovie = (q: string) =>
  api.get(
    `/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1&query=${q}&include_adult=true`
  );
