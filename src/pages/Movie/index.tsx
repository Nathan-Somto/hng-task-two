import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import SeptemberPoster from "../../assets/September_Shows.jpeg";
import WhiteList from "../../assets/white_list.png";
import List from "../../assets/List.svg";
import Tickets from "../../assets/Tickets.svg";
import ReactPlayer from "react-player/youtube";
import Loader from "../../components/Loader";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../services/getMovie";
// https://api.themoviedb.org/3/movie/:id?api_key=key&append_to_response=videos
/*
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
 */
export default function Movie() {
  const { id } = useParams();
  const {
    data: result,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovie(id as string),
  });
  if (error) {
    console.error("error message >> ", (error as unknown as Error)?.message);
  }
  return (
    <>
      <Sidebar />
      <main className="md:ml-[230px] min-h-screen relative w-full mt-12 md:w-[calc(100%-230px)]  pb-9 px-[2.5%]">
        {!isLoading ? (
          isError ? (
            <section className="grid h-screen place-items-center">
              <p className="text-2xl font-semibold text-rose-700">
                Oops, something went wrong!
              </p>
            </section>
          ) : (
            <>
              <div className="h-[200px] md:h-[300px] mb-8 rounded-[20px] overflow-hidden lg:h-[450px] w-full">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${result?.data?.videos?.results[0]?.key}`}
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
                  {result?.data?.original_title ||
                    result?.data?.title ||
                    result?.data?.name}
                </h2>
                <p data-testid="movie-release-date">
                  {new Date(result?.data?.release_date).toUTCString()}
                </p>
                <p data-testid="movie-runtime">{result?.data?.runtime}m</p>
                <div className="flex flex-wrap gap-3">
                  {result?.data?.genres?.map(
                    (item: { id: string; name: string }) => (
                      <span
                        key={item.id}
                        className="border font-medium border-[#F8E7EB] py-1 px-4 text-rose-700 rounded-[15px] text-sm"
                      >
                        {item.name}
                      </span>
                    )
                  )}
                </div>
              </section>
              <section className="flex justify-between  gap-6 flex-wrap">
                <div className="max-w-[600px] w-full flex-shrink-0">
                  <p data-testid="movie-overview" className="mt-4 text-md lg:text-lg">
                    {result?.data?.overview}
                  </p>
                  <div className="text-[#333] text-md sm:text-xl space-y-3  mt-8">
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
                        {new Date().toLocaleString("default", {
                          month: "long",
                        })}
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </>
          )
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
