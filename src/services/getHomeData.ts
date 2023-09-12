import { getMovies } from "./getMovies";
import { searchMovie } from "./searchMovie";
export const getHomeData = (q: string) => {
    return q ?  searchMovie(q) : getMovies();
}