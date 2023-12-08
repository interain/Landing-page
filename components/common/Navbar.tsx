"use client";
import { Outfit } from "next/font/google";
import { FC, useEffect, useState } from "react";

const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});
const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

interface navbarProps {}
const Navbar: FC<navbarProps> = ({}) => {
  const [navbar, setNavbar] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navClass = navbarBackground
    ? "bg-opacity-30 text-black firefox:bg-opacity-90"
    : "bg-black text-white";

  const getStartedBtnClass = navbarBackground
    ? "text-black border border-black backdrop-blur-3xl bg-opacity-30 bg-slate-300 hover:bg-black hover:text-white duration-300"
    : "border border-gray-50 backdrop-blur-lg bg-opacity-30  text-white hover:bg-white hover:text-black duration-300";
  return (
    <>
      <nav className={`w-full fixed top-8 z-30 hidden xl:block `}>
        <div
          className={`w-[85%] mx-auto shadow  rounded-full backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 ${navClass} items-center justify-between py-2 flex px-8`}
        >
          <div className={`text-[32px] ${outfit500.className}`}>Interain</div>
          <div
            className=""
          >
            <ul
              className={`items-center justify-center flex space-x-10 ${outfit500.className} text-[16px]`}
            >
              <li className="text-pri-white">
                <a href="#projects">Courses</a>
              </li>
              <li className="text-pri-white">
                <a href="#skills">Practices</a>
              </li>
              <li className="text-pri-white">
                <a href="#contact">Job Board</a>
              </li>
              <li className="text-pri-white">
                <a href="#contact">Community</a>
              </li>
            </ul>
          </div>
          <button className={`${outfit600.className} rounded-full `}>
            <div
              className={`flex flex-col justify-between h-full m-[2px]  px-4 py-2  rounded-full text-[16px] ${getStartedBtnClass}`}
            >
              Get Started
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 ${navClass}  fixed w-full z-30 top-0 block xl:hidden`}
      >
        <div className="flex items-center justify-between py-6 mx-8">
          <a href="#">
            <div className={`text-[32px] ${outfit500.className}`}>Interain</div>
          </a>
          <div className="">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`pb-8 px-8 ${navbar ? "block" : "hidden"}`}>
          <ul
            className={`items-center justify-center space-y-8  ${outfit500.className} text-[16px]`}
          >
            <li className="text-pri-white">
              <a href="#projects">Courses</a>
            </li>
            <li className="text-pri-white">
              <a href="#skills">Practices</a>
            </li>
            <li className="text-pri-white">
              <a href="#contact">Job Board</a>
            </li>
            <li className="text-pri-white">
              <a href="#contact">Community</a>
            </li>
            <button className={`${outfit600.className} rounded-full `}>
              <div
                className={`px-4 py-2 w-full rounded-full text-[16px] ${getStartedBtnClass}`}
              >
                Get Started
              </div>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;