import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import MoviesContainer from "../../components/MoviesContainer";
import ChevronRight from "../../assets/ChevronRight.svg";
import dummydata from "../../components/MovieCard/dummydata.json";
import MovieCard from "../../components/MovieCard";
import MovieLoading from "../../components/MovieCard/loading";
import BannerLoading from "../../components/Banner/loading";
import Footer from "../../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../../services/getHomeData";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();
  const {
    isLoading,
    data: results,
    error,
    isError,
  } = useQuery({
    queryKey: ["home", searchParams.get('q')],
    queryFn: () => getHomeData(searchParams.get("q") ?? ""),
  });
  if (isError) {
    console.error("err message >> ", (error as unknown as Error)?.message);
  }
  if(isError){
    return (
      <section className="h-screen w-full bg-white grid place-items-center">
      <p className="text-3xl font-semibold text-rose-700">
        Oops, something went wrong!
      </p>
    </section>
  
    )
  }
  return (
    <>
      <Navbar />
      {isLoading ? (
        <BannerLoading />
      ) : (
        <Banner data={results?.data?.results?.slice(0, 5)} />
      )}
      <main className="px-[5%] mt-10">
        <section className="flex justify-between">
          <h3 className="text-4xl text-black font-semibold">Featured Movies</h3>
          <button className="text-rose-700 text-lg flex items-center gap-2 group">
            <span>See more</span>
            <img
              src={ChevronRight}
              alt="chevron right"
              className="group-hover:translate-x-1 ease-out duration-200 transition-all"
            />
          </button>
        </section>
        <MoviesContainer>
          {isLoading ? (
            Array(5)
              .fill("")
              .map((_, index) => <MovieLoading key={index} />)
          ) : (
            (results?.data as unknown as typeof dummydata)?.results
              ?.slice(0, 10)
              .map((item) => <MovieCard key={item.id} {...item} />)
          )}
        </MoviesContainer>
        {searchParams.get("q") &&
          results?.data?.results?.length === 0 &&
          !isLoading && (
            <section>
              <p className="text-gray-500 text-2xl font-semibold text-center">
                No movie in our massive box matches{" "}
                <span className="text-rose-700">{searchParams.get("q")}</span>
              </p>
            </section>
          )}
      </main>
      <Footer />
    </>
  );
}
