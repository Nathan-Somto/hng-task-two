import api from "./axiosInstance";

export const getMovie = (id: string) =>
  api.get(
    `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`
  );
