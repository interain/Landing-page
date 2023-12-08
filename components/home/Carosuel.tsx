"use client";
import { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Slider from "react-slick";

const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});
const outfit700 = Outfit({
  subsets: ["latin"],
  weight: ["700"],
});
const outfit400 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

interface members {
  src: string;
}

const commMembers: members[] = [
  { src: "/hero/Chase.png" },
  { src: "/hero/Asana.png" },
  { src: "/hero/Google.png" },
  { src: "/hero/Buzzfeed.png" },
  { src: "/hero/Toggl.png" },
  { src: "/hero/Walmart.png" },
];

const Carousel = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000, // Adjust the speed as needed
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplay speed to 0 for continuous scrolling
    cssEase: "linear", // Use linear easing for smooth continuous motion
    centerMode: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center pb-5">
      <div className={`${outfit500.className} text-gray-400 uppercase text-[14px] md:text-[16px] mb-[30px]`}>
        Our community members come from
      </div>
      <div className="w-[60%] mb-[20px]">
        <Slider {...settings} ref={sliderRef} className="rounded-full">
          {commMembers.map((mem, index) => (
            <div key={index} className="">
              <Image
                key={index}
                src={mem.src}
                alt={mem.src}
                width={100}
                height={20}
                className="mx-[10px] my-[10px] hover:opacity-[80%] duration-[300ms]"
              ></Image>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
