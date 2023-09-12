import Home from "../../assets/Home.svg";
import Logout from "../../assets/Logout.svg";
import Calendar from "../../assets/Calendar.svg";
import Projector from "../../assets/Projector.svg";
import Series from "../../assets/Series.svg";
import Menu from "../../assets/Menu.svg";
import TvLogo from "../../assets/tvLogo.svg";
import { useState, useRef, useEffect } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const data = [
    {
      name: "Home",
      image: Home,
    },
    {
      image: Projector,
      name: "Movies",
    },
    {
      image: Series,
      name: "Tv Series",
    },
    {
      image: Calendar,
      name: "Upcoming",
    },
    {
      image: Logout,
      name: "Logout",
    },
  ];
  useEffect(()=>{
    if (divRef) {
        divRef.current?.classList.toggle("animate-slide-in");
    }
  },[showSidebar])
  const toggleSidebar = () => {
        setShowSidebar((prevState) => !prevState);  
  };
  return (
    <nav className={`fixed top-0 left-0 z-[8] md:max-w-fit md:h-screen    ${showSidebar ? 'max-w-fit h-screen' : 'w-full h-12 bg-white'} `}>
      <div
        ref={divRef}
        className={`w-[230px] ${
          showSidebar ? "flex" : "hidden"
        } flex-col md:flex pb-3 bg-white rounded-r-[45px] justify-between  border-r-[1px] h-full border-[rgba(0,0,0,0.3)]`}
      >
        <button className='absolute block  top-3 right-6 text-lg font-semibold text-gray-500 md:hidden' onClick={toggleSidebar}>
            X
        </button>
        <figure className="mb-8 mt-7 px-5 flex items-center text-xl gap-2 text-[#333] font-semibold">
          <img src={TvLogo} className='h-[35px] w-[35px]' />
          <span>MovieBox</span>
        </figure>
        <ul className="flex flex-col gap-3 ">
          {data.slice(0, -1).map((item) => (
            <li
              key={item.name}
              role="navigation"
              className={`flex cursor-pointer hover:opacity-50 items-center gap-2 px-5 ${
                item.name === "Movies"
                  ? " border-r-[3px] border-rose-700 bg-[rgba(190,18,60,0.10)] py-5"
                  : "py-4"
              }`}
            >
              {" "}
              <span>
                {" "}
                <img src={item.image} alt={`${item.name} icon`} />
              </span>{" "}
              <span
                className={`${
                  item.name === "Movies" ? "text-[#BE123C]" : "text-[#666]"
                } font-semibold text-lg`}
              >
                {item.name}
              </span>{" "}
            </li>
          ))}
        </ul>

        <div className="h-[210px] rounded-[20px] w-[170px] mt-4 mx-5 border border-[rgba(190,18,60,0.70)] py-3 px-2 bg-[rgba(248,231,235,0.40)]">
          <p className="text-[rgba(51,51,51,0.80)] text-lg  font-semibold mb-3">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[#666] text-xs font-medium mb-3">
            50k people are playing now
          </p>
          <button className="text-rose-700 hover:opacity-50 bg-[rgba(190,18,60,0.20)] py-2 px-4 rounded-[30px] text-xs font-medium">
            Start Playing
          </button>
        </div>
        <button
          className={`flex cursor-pointer hover:opacity-50 items-center gap-2 mt-2 px-5 py-4 `}
        >
          <span>
            <img src={Logout} alt={`logout icon`} />
          </span>
          <span
            className={`text-[#666] font-semibold text-lg`}>
            Logout
          </span>
        </button>
      </div>
      {/* Hamburger menu */}
      <button className="md:hidden mt-4 pl-2 hover:opacity-50 block max-w-fit" onClick={toggleSidebar}>
        <span>
          <img src={Menu} alt="hamburger menu" className='h-[30px] w-[30px]' />
        </span>
        <span className="sr-only">Menu</span>
      </button>
    </nav>
  );
}
