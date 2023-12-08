"use client";
import { FC, useRef } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface OfferProps {}

const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});
const outfit300 = Outfit({
  subsets: ["latin"],
  weight: ["300"],
});

interface CardData {
  key: number;
  title: string;
  description: string;
  more: string;
  imageSrc: string;
  bgColor: string;
}

const cardDataArray: CardData[] = [
  {
    key: 1,
    title: "COURSES",
    description: "Learn from AI-driven Course modules",
    more: "Tailored to meet your unique needs and goals based on your perfomance.\nInteract with the bot during courses to resolve doubts.",
    imageSrc: "/offerings/offer_1.png",
    bgColor: "#E4F7FF",
  },
  {
    key: 2,
    title: "PRACTICE",
    description: "Assess your learning through practice sessions",
    more: "Receive an instant progress report and challenge the bot for a retest Receive course suggestions and feedback based on your performance",
    imageSrc: "/offerings/offer_2.png",
    bgColor: "#F8FFCF",
  },
  {
    key: 3,
    title: "JOB BOARD",
    description: "Attend mock interviews and enhance your confidence levels",
    more: "Opportunities gone by do come back to those who try harder",
    imageSrc: "/offerings/offer_3.png",
    bgColor: "#CFFFE5",
  },
  {
    key: 4,
    title: "COMMUNITY",
    description: "Join the discussion of India’s Future workforce",
    more: " Connect with Graduates, Industry Experts, and Fellow Students to Unlock the Secrets of a Successful Career.",
    imageSrc: "/offerings/offer_4.png",
    bgColor: "#FFE8E5",
  },
];

const Offer: FC = () => {
  return (
    <div className="my-[40px]">
      <div
        className={`${outfit600.className} text-[24px] sm:text-[28px] lg:text-[40px] text-center`}
      >
        What we offer at <span className="text-[#A356B9]">Interain?</span>
      </div>

      {cardDataArray.map((cardData, index) => (
        <AnimatedCard key={index} cardData={cardData} />
      ))}
    </div>
  );
};

const AnimatedCard: FC<{ cardData: CardData }> = ({ cardData }) => {
  const isLGScreen = useMediaQuery({ minWidth: 1024 });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "2.5 1"],
  });
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 1],
    [0.9, 1, 1, 0.6]
  );
  const scaleProgressPhone = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [0.7, 1, 1, 0.6]
  );
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
  return (
    <motion.div
      ref={ref}
      style={
        isLGScreen
          ? {
              scale: scaleProgress,
              // opacity: opacityProgress,
              backgroundColor: `${cardData.bgColor}`,
            }
          : {
            scale: scaleProgressPhone,
            backgroundColor: `${cardData.bgColor}`,
          }
      }
      className={`h-full py-5 px-3 md:py-0 md:px-0 md:h-[500px] w-[85%] md:w-[80%] mx-auto rounded-3xl mt-[30px] sm:mt-[30px] md:mt-[60px] md:flex`}
    >
      {cardData.key % 2 == 0 ? (
        <div className="md:w-[50%] my-6 mx-2 md:my-0 flex items-center justify-center">
          <Image
            src={cardData.imageSrc}
            alt={`Card: ${cardData.title}`}
            width={430}
            height={430}
          />
        </div>
      ) : (
        ""
      )}

      <div className="md:w-[50%] flex flex-col justify-center mx-[5%]">
        <div
          className={`text-[#DE2879] text-[16px] md:text-[18px] ${outfit600.className}`}
        >
          {cardData.title}
        </div>
        <div
          className={`${outfit600.className} text-[20px] md:text-[28px] mt-2`}
        >
          {cardData.description}
        </div>
        <div
          className={`${outfit300.className} text-[18px] md:text-[24px] text-[#4e4e4e] mt-4 whitespace-pre-wrap`}
        >
          {cardData.more}
        </div>
      </div>
      {cardData.key % 2 == 1 ? (
        <div className="md:w-[50%] my-6 mx-2 md:my-0 flex items-center justify-center">
          <Image
            src={cardData.imageSrc}
            alt={`Card: ${cardData.title}`}
            width={430}
            height={430}
          />
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Offer;
