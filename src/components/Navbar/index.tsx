import { Link, useSearchParams } from "react-router-dom";
import tvLogo from "../../assets/tvLogo.svg";
import Menu from "../../assets/Menu.svg";
import Search from "../../assets/search.svg";
import { useState,useEffect } from "react";
export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({q:value});
    setValue('');
  };
  useEffect(()=>{ 
    function blurEffect() {
    if (window.scrollY > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  document.addEventListener("scroll", blurEffect);
  return () => {
    document.removeEventListener("scroll", blurEffect);
  };
}, []);
  return (
    <nav className=
    {`fixed inset-0 z-20 text-white w-full h-20 px-2 transition-all ease-in duration-300 md:px-6 ${show?'backdrop-blur-lg bg-[rgba(0,0,0,0.5)] ':'bg-transparent'} flex items-center justify-between`}>
      <Link to="/">
        <figure className='inline-flex items-center font-semibold gap-2'>
          <img src={tvLogo} alt="site logo" className='w-[40px] self-center flex-shrink-0 h-[40px]' />
          <p className='sm:text-lg  text-md '>Movie Box</p>
        </figure>
      </Link>
      <form
        onSubmit={onSubmit}
        className="relative max-w-[600px]  min-w-[200px] w-[50%]  border-[2px] border-gray-300 rounded-md"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="search"
          aria-label="search"
          name="search"
          placeholder="What do you want to watch?"
          className=" placeholder:text-white placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base outline-none flex-1 py-2 pr-[1rem] pl-[0.625rem]  w-[calc(100%-20px)] flex-shrink-0  text-white flex bg-transparent"
        />
        <button type="submit" className="m-[0.625rem] absolute right-0 inset-y-0 my-auto  w-4">
          <figure>
            <img src={Search} className='w-full' />
          </figure>
        </button>
      </form>
      <button className="sm:inline-flex hidden items-center font-semibold gap-4 ">
        <span className="hidden sm:inline">Sign in</span>
        <figure className='hover:scale-125 transition-all ease-out duration-250'>
          <img src={Menu} alt="menu" className='w-[35px] h-[35px] flex-shrink-0' />
        </figure>
      </button>
    </nav>
  );
}
