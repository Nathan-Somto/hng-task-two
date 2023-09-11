import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import PosterContainer from "../../components/PosterContainer";
import ChevronRight from "../../assets/ChevronRight.svg";
import dummydata from "../../components/Poster/dummydata.json";
import Poster from "../../components/Poster";
import PosterLoading from "../../components/Poster/loading";
import BannerLoading from "../../components/Banner/loading";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
/**
 *
 * @todo replace with actual data fetching logic.
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
   useEffect(()=>{
   const timer = setTimeout(()=>{
      setIsLoading(false);
    },3500)
    return () => clearTimeout(timer);
  },[]);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <BannerLoading />
      ) : (
        <Banner data={dummydata.results.slice(0, 5)} />
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
        <PosterContainer>
          {isLoading
            ? Array(5)
                .fill("")
                .map((_, index) => <PosterLoading key={index} />)
            : dummydata.results
                .slice(0, 10)
                .map((item) => <Poster key={item.id} {...item} />)}
        </PosterContainer>
      </main>
      <Footer />
    </>
  );
}
