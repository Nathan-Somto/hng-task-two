import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import data from "./dummydata.json";
import SeptemberPoster from "../../assets/September_Shows.jpeg";
import WhiteList from "../../assets/white_list.png";
import List from "../../assets/List.svg";
import Tickets from "../../assets/Tickets.svg";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Loader from "../../components/Loader";
// https://api.themoviedb.org/3/movie/:id?api_key=key&append_to_response=videos
/*
  title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
 */
export default function Movie() {
  const [loading, setIsLoading] = useState(true);
  const { id } = useParams();
  return (
    <>
      <Sidebar />
      <main className="md:ml-[230px] min-h-screen relative w-full mt-12 md:w-[calc(100%-230px)] md:mt-0 pb-9 pt-4 px-[2.5%]">
        {!loading ? (
          <>
            <div className="h-[200px] md:h-[300px] mb-8 rounded-[20px] overflow-hidden lg:h-[450px] w-[80%] mx-auto">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${data?.videos?.results[0]?.key}`}
                width={"100%"}
                height={"100%"}
                light
                playsinline={true}
              />
            </div>
            <section className="flex items-center gap-3 flex-wrap mb-6">
              <h2
                data-title="movie-title"
                className="text-4xl font-semibold text-gray-700"
              >
                {data?.original_title || data?.title || data?.name}
              </h2>
              <p data-testid="movie-release-date">
                {new Date(data?.release_date).toUTCString()}
              </p>
              <p data-testid="movie-runtime">{data?.runtime}m</p>
              <div className="flex flex-wrap gap-3">
                {data?.genres?.map((item) => (
                  <span
                    key={item.id}
                    className="border font-medium border-[#F8E7EB] py-1 px-4 text-rose-700 rounded-[15px] text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </section>
            <section className="flex justify-between  gap-6 flex-wrap">
              <div className="max-w-[600px] w-full flex-shrink-0">
                <p data-testid="movie-overview" className="mt-4">
                  {data?.overview}
                </p>
                <div className="text-[#333] text-xl space-y-3  mt-8">
                  <p>
                    Director :{" "}
                    <span className="text-rose-700">Joseph Kosinski</span>
                  </p>
                  <p>
                    Writers :{" "}
                    <span className="text-rose-700">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p>
                    Stars:{" "}
                    <span className="text-rose-700">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 h-[55px] bg-rose-700 mb-4 justify-center hover:opacity-50 text-white font-medium py-3 px-2 rounded-[10px] text-xl w-full max-w-[360px]">
                  {" "}
                  <span>
                    <img
                      src={Tickets}
                      alt="tickets icon"
                      className="h-[25px] w-[25px] object-contain"
                    />
                  </span>{" "}
                  <span>See Showtimes</span>
                </button>
                <button className="flex items-center gap-2 h-[55px] bg-[rgba(190,18,60,0.10)] border hover:opacity-50 border-rose-700 mb-4 justify-center text-[#333] font-medium py-3 px-2 rounded-[10px] text-xl w-full max-w-[360px]">
                  {" "}
                  <span>
                    <img
                      src={List}
                      alt="list icon"
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </span>{" "}
                  <span>More Watch Options</span>
                </button>
                <figure className="relative  ">
                  <img
                    src={SeptemberPoster}
                    alt="september poster"
                    className="h-[270px] w-[360px] object-cover rounded-lg"
                  />
                  <figcaption className="absolute bottom-0 rounded-b-lg justify-center bg-[rgba(18,18,18,0.5)] backdrop-blur-[2px] text-white font-medium w-full h-10 text-xs flex items-center gap-2">
                    <span>
                      <img
                        src={WhiteList}
                        alt="white list icon"
                        className="h-[18px] w-[18px] object-contain"
                      />
                    </span>
                    <span>
                      The Best Movies and Shows in the month of{" "}
                      {new Date().toLocaleString("default", { month: "long" })}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </section>
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
