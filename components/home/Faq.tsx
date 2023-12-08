"use client";
import { FC, useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
interface FaqProps {}

interface FAQItem {
  k: number;
  q: string;
  ans: string;
}

const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

const outfit400 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Faq: FC<FaqProps> = ({}) => {
  const [open, setOpen] = useState<number | -1>(-1);
  const data: FAQItem[] = [
    {
      k: 0,
      q: "How can I get started with your personalized interview bot?",
      ans: "To get started, simply contact our sales team, and we'll guide you through the onboarding process, customization, and training to ensure a successful implementation.",
    },
    {
      k: 1,
      q: "Is the bot customizable for different industries and roles?",
      ans: "To get started, simply contact our sales team, and we'll guide you through the onboarding process, customization, and training to ensure a successful implementation.",
    },
    {
      k: 2,
      q: " What languages does the bot support?",
      ans: "To get started, simply contact our sales team, and we'll guide you through the onboarding process, customization, and training to ensure a successful implementation.",
    },
    {
      k: 3,
      q: "What kind of support and training do you offer to clients?",
      ans: "To get started, simply contact our sales team, and we'll guide you through the onboarding process, customization, and training to ensure a successful implementation.",
    },
    {
      k: 4,
      q: "How do candidates interact with the interview bot?",
      ans: "To get started, simply contact our sales team, and we'll guide you through the onboarding process, customization, and training to ensure a successful implementation.",
    },
  ];
  return (
    <>
      <div
        className={`${outfit600.className} text-[24px] sm:text-[28px] lg:text-[40px] text-center mb-[40px] mt-[20px]`}
      >
        Frequently Asked Questions
      </div>
      <div className="grid lg:grid-cols-2 lg:h-[550px] xl:h-[420px]">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.preventDefault();
                {
                  open === item.k ? setOpen(-1) : setOpen(item.k);
                }
              }}
              className="shadow-md hover:shadow-lg duration-[300ms] rounded-lg text-black px-[15px] md:px-[20px] py-[15px] md:py-[30px] mb-6 hover:cursor-pointer"
            >
              <div
                className={`${outfit500.className} hover:cursor-pointer text-[16px]`}
              >
                <span className="mr-[20px]">
                  {open === item.k ? (
                    <Image
                      src={"/faq/minus.png"}
                      alt="plus"
                      height={15}
                      width={15}
                      className={"inline duration-[300ms] w-[15px]"}
                    ></Image>
                  ) : (
                    <Image
                      src={"/faq/plus.png"}
                      alt="plus"
                      height={15}
                      width={15}
                      className={"inline duration-[300ms] w-[15px]"}
                    ></Image>
                  )}
                </span>
                {item.q}
                {open === item.k && (
                  <div
                    className={`${outfit400.className} ml-[35px] text-gray-500 mt-[10px] mb-[5px] text-[15px] `}
                    id="link1"
                  >
                    {item.ans}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {data.slice(3, 6).map((item, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.preventDefault();
                {
                  open === item.k ? setOpen(-1) : setOpen(item.k);
                }
              }}
              className="shadow-md hover:shadow-lg duration-[300ms] rounded-lg text-black px-[15px] md:px-[20px] py-[15px]  md:py-[30px] mb-6 hover:cursor-pointer"
            >
              <div
                className={`${outfit500.className} hover:cursor-pointer text-[16px]`}
              >
                <span className="mr-[20px]">
                  {open === item.k ? (
                    <Image
                      src={"/faq/minus.png"}
                      alt="plus"
                      height={15}
                      width={15}
                      className={"inline duration-[300ms] w-[15px]"}
                    ></Image>
                  ) : (
                    <Image
                      src={"/faq/plus.png"}
                      alt="plus"
                      height={15}
                      width={15}
                      className={"inline duration-[300ms] w-[15px]"}
                    ></Image>
                  )}
                </span>
                {item.q}
                {open === item.k && (
                  <div
                    className={`${outfit400.className} ml-[35px] text-gray-500 mt-[10px] mb-[5px] text-[15px] `}
                    id="link1"
                  >
                    {item.ans}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
