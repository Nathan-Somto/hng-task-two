import { useState, useEffect,useMemo } from "react";
import Play from "../../assets/Play.svg";
import Imbd from "../../assets/Imbd.png";
import Tomato from "../../assets/Tomato.png";
import { IMovie } from "../..";
import { BASE_IMG_URL } from "../../services/constants";
type Props = {
  data: Partial<IMovie>[];
};

export default function Banner({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  useEffect(() => {
    setShouldAnimate(true);
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 2100);
    return () => clearTimeout(timer);
  }, [activeIndex]);
  const randomPercentages = useMemo(()=>{
     return Array(5).fill(0).map(() => Math.floor(Math.random() * 100));
  },[])
    
  const textClasses = shouldAnimate ? "animate-slide-in" : "";
  const imageClasses = shouldAnimate ? "animate-zoom-in" : "";
  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden justify-between">
      <div
        className={`z-[7] ml-2 md:ml-6 max-w-[400px] ${textClasses} top-2/4 text-white space-y-3`}
      >
        <h1 className=" font-semibold text-3xl md:text-4xl lg:text-5xl ">
          {data[activeIndex]?.name ||
            data[activeIndex]?.title ||
            data[activeIndex]?.original_title}
        </h1>
        <div className="flex gap-5 items-center text-[12px] font-normal">
          <div className="flex gap-2">
            <img src={Imbd} alt="imbd badge" />
            <p>
              {" "}
              {typeof data[activeIndex]?.vote_average !== 'number' ? '0.0' : ((data[activeIndex]?.vote_average as number) * 10).toFixed(1)} /
              100
            </p>
          </div>
          <div className="gap-2 flex">
            <img src={Tomato} alt="rotten tomato" />
            <p>{randomPercentages[activeIndex]}%</p>
          </div>
        </div>
        <p className="w-3/4 text-[14px] font-medium text-ellipsis">
          {data[activeIndex]?.overview}
        </p>
        <button className="bg-rose-700 uppercase font-semibold rounded-md py-[6px] hover:opacity-70 px-4 items-center flex gap-2">
          <span>
            <img src={Play} alt="play icon" />
          </span>
          <span>Watch Trailer</span>
        </button>
      </div>
      <div className="h-[80px] overflow-hidden absolute md:right-6 right-2 w-[60px] z-[7] items-center flex flex-col gap-2 text-white">
        {new Array(data.length).fill("").map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={` ${
              activeIndex == index
                ? "h-3 w-3 opacity-100"
                : "h-2 w-2 opacity-80"
            } transition-all  duration-200 ease-in rounded-full bg-slate-200`}
          ></button>
        ))}
      </div>
      <figure className="">
        <img
          src={`${BASE_IMG_URL}${data[activeIndex]?.backdrop_path}`}
          className={`absolute ${imageClasses} scale-125 h-full w-full inset-0 object-cover`}
          alt="banner image"
        />
      </figure>
      <div className="absolute z-6 h-full w-full inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.75)]"></div>
    </header>
  );
}
