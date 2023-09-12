import { Link } from "react-router-dom";
import { IMovie } from "../..";
import { BASE_IMG_URL } from "../../services/constants";
import Imbd from "../../assets/Imbd.png";
import Tomato from "../../assets/Tomato.png";
import genres from "./genres";
import { useEffect, useState } from "react";

type indexes = keyof typeof genres;
export default function Poster({
  name,
  title,
  original_title,
  id,
  poster_path,
  vote_average,
  genre_ids,
  release_date,
}: Partial<IMovie>) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const hasLiked = localStorage.getItem(`${id}`);
    if (hasLiked) {
      setLiked(true);
    }
  }, [id]);
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const hasLiked = localStorage.getItem(`${id}`);
    if (hasLiked) {
      localStorage.removeItem(`${id}`);
    } else {
      localStorage.setItem(`${id}`, "liked");
    }
    setLiked((prevState) => !prevState);
  };
  return (
    <article>
      <Link to={`/movies/${id}`} data-testid="movie-card">
        <figure className="relative rounded-lg h-[350px] overflow-hidden ">
          <button
            onClick={handleLike}
            className={`absolute top-3 right-3 rounded-full h-10 w-10 flex z-2  hover:scale-125 transition-all ease-out duration-250 backdrop-blur-[1px] items-center justify-center ${
              liked
                ? "text-rose-500 bg-[rgba(190,18,60,0.40)]"
                : "text-[#D1D5DB] bg-[rgba(243,244,246,0.5)]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <img
            loading="lazy"
            src={`${BASE_IMG_URL}${poster_path}`}
            alt="movie poster"
            className="h-full object-cover w-full"
            data-testid="movie-poster"
          />
        </figure>
        <div className="space-y-[0.35rem] mt-5">
          <p className="text-gray-400 text-xs font-semibold">
            <span>USA, </span>{" "}
            <span data-testid="movie-release-date">
              {release_date?.split("-")[0]}
            </span>
          </p>
          <h3
            className="text-gray-900 text-lg font-semibold"
            data-testid="movie-title"
          >
            {name || title || original_title}
          </h3>
          <div className="flex gap-5 items-center text-[12px] font-normal">
            <div className="flex gap-2">
              <img src={Imbd} alt="imbd badge" />
              <p> {((vote_average as number) * 10).toFixed(1)} / 100</p>
            </div>
            <div className="gap-2 flex">
              <img src={Tomato} alt="rotten tomato" />
              <p>{Math.floor(Math.random() * 100)}%</p>
            </div>
          </div>
          <div className="space-x-[0.15rem]">
            {genre_ids?.map((id, index) => (
              <span className="text-gray-400 text-xs font-semibold" key={id}>
                {`
                    ${genres[id as indexes]}
                    ${index !== genre_ids.length - 1 ? "," : ""}`}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
