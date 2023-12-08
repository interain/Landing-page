"use client";
import { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { Outfit, Poppins } from "next/font/google";
import Carousel from "./Carosuel";
import DOTS from "vanta/dist/vanta.dots.min";
import Script from "next/script";

interface HeroProps {}

const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});
const outfit400 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});
const outfit300 = Outfit({
  subsets: ["latin"],
  weight: ["300"],
});
const poppins500 = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Hero: FC<HeroProps> = ({}) => {
  const vantaref = useRef(null);
  useEffect(() => {
    DOTS({
      el: "#vanta",
      color: 0xc97bdf,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      backgroundColor: 0x0,
      scaleMobile: 1.0,
      showLines: false,
    });
  }, []);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></Script>
      <div id="vanta" className="bg-black">
        <div className="h-screen flex flex-col items-center justify-center pt-12">
          <div
            className={`${outfit600.className} px-6 flex justify-center flex-col items-center text-center my-auto`}
          >
            <div
              className={`text-white md:text-6xl text-[34px] my-auto md:text-[56px] mb-2`}
            >
              <div>Unlock Your Potential</div>
              <span>with </span>
              <span className="text-purple-400">Interain.</span>
            </div>
            <div
              className={`text-white text-[18px] mt-2 md:text-[24px] my-4 md:mt-[24px] lg:mt-[15px] ${outfit500.className}`}
            >
              India’s 1st AI Driven Soft Skills Training Platform
            </div>
            <div
              className={`text-gray-400 text-[15px] mx-2 md:text-[20px] ${outfit400.className}`}
            >
              To meet and network with India’s future workforce and get
              exclusive access and updates
            </div>
            <button className="bg-white mt-[20px] rounded-full text-[14px] md:text-[16px] text-black hover:bg-gray-300 duration-[300ms] py-3 px-6">
              Join Our Community
            </button>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Hero;
