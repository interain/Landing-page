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
const outfit300 = Outfit({
  subsets: ["latin"],
  weight: ["300"],
});
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

interface SlideProps {
  id: number;
  rev: string;
  name: string;
  img: string;
}

const data: SlideProps[] = [
  {
    id: 1,
    name: "hari",
    img: "/testi.png",
    rev: "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
  },
  {
    id: 2,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },
  {
    id: 3,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },

  {
    id: 4,
    name: "hari",
    img: "/testi.png",
    rev: "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },

  {
    id: 5,
    name: "hari",
    img: "/testi.png",
    rev: "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
  },
  {
    id: 6,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },
  {
    id: 7,
    name: "hari",
    img: "/testi.png",
    rev: "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
  },
  {
    id: 8,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },
  {
    id: 9,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },

  {
    id: 10,
    name: "hari",
    img: "/testi.png",
    rev: "If you want real marketing that works and effective implementation - mobile app's got you covered.",
  },
  {
    id: 11,
    name: "hari",
    img: "/testi.png",
    rev: "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
  },
  {
    id: 12,
    name: "hari",
    img: "/testi.png",
    rev: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
  },
];

const Testimonial = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: false,
    slidesPerRow: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          cssEase: "ease-in-out",
          autoplaySpeed: 10000,
          speed: 10000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[white] h-fi">
      <div
        className={`${outfit700.className} text-black text-center text-[20px] sm:text-[28px] lg:text-[40px]`}
      >
        See What Others in the <span className="text-[#FF733B]">Community</span>{" "}
        Are Saying
      </div>
      <Image
        src="/q.png"
        alt="quotes"
        width={50}
        height={30}
        className="hidden md:block ml-[8%] mt-[20px] mb-10 h-[30px] w-[37px] lg:h-[47px] lg:w-[57px]"
      ></Image>

      <Slider {...settings} ref={sliderRef} className="">
        {data.map((item, index) => (
          <Slide key={index} name={item.name} id={item.id} img={item.img} rev={item.rev} />
        ))}
      </Slider>
    </div>
  );
};

const Slide: FC<SlideProps> = ({ img, name, rev, id }) => {
  return (
    <div
      className={` w-[90%] 
     ${id % 5 === 0 && "bg-[#e4daff]"}
     ${id % 5 === 1 && "bg-[#faffce]"}
     ${id % 5 === 2 && "bg-[#d2f7ff]"}
     ${id % 5 === 3 && "bg-[#d9ffd3]"}
     ${id % 5 === 4 && "bg-[#ffe0db]"}
     
     rounded-lg my-11 relative
     `}
    >
      <Image
        src={img}
        alt="profile"
        height={30}
        width={30}
        className="absolute -top-11 rounded-full w-24 h-24 p-4"
      ></Image>
      <div className={`${outfit400.className} text-[#323232]`}>
        <div className="flex p-2 pt-11">
          <div className="px-2">{rev}</div>
        </div>
        <div className={`${outfit500.className} text-[18px] px-7 pb-2`}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
