import { FC } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";

interface FooterProps {}

const poppins400 = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins500 = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});
const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});
const outfit300 = Outfit({
  subsets: ["latin"],
  weight: ["300"],
});

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-black">
      {/* <div className="bg-red-500 sm:bg-slate-500 md:bg-[#101010] lg:bg-red-300 xl:bg-black py-11 flex items-center justify-center"> */}
      <div className="pt-11 flex items-center justify-center">
        <div className="w-[90%] flex items-center justify-center flex-col md:flex-row">
          <div className="">
            <Image
              src={"/Interain_black_bg.png"}
              alt="logo"
              height={179}
              width={179}
              className="mx-auto"
            ></Image>
            <div
              className={`${outfit300.className} text-[16px] text-white w-[80%] mx-auto my-1 text-center`}
            >
              India’s 1st AI Driven Soft Skills Training Platform
            </div>
            <div className="flex w-full items-center mt-4 justify-center">
              <Image
                src={"/socials/youtube.png"}
                alt="twitter"
                width={25}
                height={20}
                className="mx-2"
              ></Image>
              <Image
                src={"/socials/twitter.png"}
                alt="twitter"
                width={24}
                height={10}
                className="mx-2"
              ></Image>
              <Image
                src={"/socials/linkedin.png"}
                alt="twitter"
                width={25}
                height={20}
                className="mx-2"
              ></Image>
              <Image
                src={"/socials/mail.png"}
                alt="twitter"
                width={20}
                height={18}
                className="py-1 mx-2"
              ></Image>
              <Image
                src={"/socials/Instagram.png"}
                alt="twitter"
                width={25}
                className="mx-1"
                height={18}
              ></Image>
            </div>
          </div>
          <div className="flex my-10 md:my-0 md:block lg:flex mx-12 lg:mx-[100px] xl:mx-[150px]">
            <div
              className={`${outfit300.className} text-white min-w-max text-[15px] md:text-[16px]`}
            >
              <div className={`${poppins500.className} text-[16px] mb-4`}>
                Company
              </div>
              <Link href={"/"} className="block mt-1">
                About Us
              </Link>
              <Link href={"/"} className="block mt-1">
                Privacy policy
              </Link>
              <Link href={"/"} className="block mt-1">
                Terms and Conditions
              </Link>
            </div>
            <div
              className={`${outfit300.className} text-white text-[15px] md:text-[16px] min-w-max md:mt-8 lg:mt-0 ml-12 md:ml-0 lg:ml-20 xl:ml-24`}
            >
              <div className={`${poppins500.className} text-[16px] mb-4`}>
                Quick Links
              </div>
              <Link href={"/"} className="block mt-1">
                Courses
              </Link>
              <Link href={"/"} className="block mt-1">
                Mock Test
              </Link>
              <Link href={"/"} className="block mt-1">
                Job Board
              </Link>
              <Link href={"/"} className="block mt-1">
                Community
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-[70%] md:w-[30%]">
            <div
              className={`${outfit300.className} text-white text-[16px] text-center`}
            >
              To meet and network with India’s future workforce and get
              exclusive access and updates
            </div>
            <button
              className={`${outfit600.className} mt-6 mb-12 md:mb-0 bg-white px-6 rounded-full py-2  text-black text-[16px] `}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
      {/* <img
        className="opacity-[1] md:w-[90%] lg:w-[80%] mx-auto"
        src="/footer/interain.png"
      ></img> */}
      <svg
        className="hidden md:block mt-4 md:w-[90%] lg:w-[80%] mx-auto"
        width="100%"
        // height="259"
        viewBox="0 0 1237 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g mask="url(#mask0_594_797)">
          <path
            d="M40.3 51.975C34.6667 51.975 29.9 50.025 26 46.125C22.1 42.225 20.15 37.4583 20.15 31.825C20.15 26.1917 22.1 21.425 26 17.525C29.9 13.625 34.6667 11.675 40.3 11.675C45.7167 11.675 50.2667 13.625 53.95 17.525C57.85 21.425 59.8 26.1917 59.8 31.825C59.8 37.4583 57.85 42.225 53.95 46.125C50.2667 50.025 45.7167 51.975 40.3 51.975ZM54.6 80.9V259H25.025V80.9H54.6ZM191.78 77.65C213.447 77.65 230.997 84.2583 244.43 97.475C257.864 110.475 264.58 129.325 264.58 154.025V259H235.33V158.25C235.33 140.483 230.889 126.942 222.005 117.625C213.122 108.092 200.989 103.325 185.605 103.325C170.005 103.325 157.547 108.2 148.23 117.95C139.13 127.7 134.58 141.892 134.58 160.525V259H105.005V80.9H134.58V106.25C140.43 97.15 148.339 90.1083 158.305 85.125C168.489 80.1417 179.647 77.65 191.78 77.65ZM348.966 105.275V210.25C348.966 218.917 350.808 225.092 354.491 228.775C358.175 232.242 364.566 233.975 373.666 233.975H395.441V259H368.791C352.325 259 339.975 255.208 331.741 247.625C323.508 240.042 319.391 227.583 319.391 210.25V105.275H296.316V80.9H319.391V36.05H348.966V80.9H395.441V105.275H348.966ZM593.775 163.125C593.775 168.758 593.45 174.717 592.8 181H450.45C451.533 198.55 457.492 212.308 468.325 222.275C479.375 232.025 492.7 236.9 508.3 236.9C521.083 236.9 531.7 233.975 540.15 228.125C548.817 222.058 554.883 214.042 558.35 204.075H590.2C585.433 221.192 575.9 235.167 561.6 246C547.3 256.617 529.533 261.925 508.3 261.925C491.4 261.925 476.233 258.133 462.8 250.55C449.583 242.967 439.183 232.242 431.6 218.375C424.017 204.292 420.225 188.042 420.225 169.625C420.225 151.208 423.908 135.067 431.275 121.2C438.642 107.333 448.933 96.7167 462.15 89.35C475.583 81.7667 490.967 77.975 508.3 77.975C525.2 77.975 540.15 81.6583 553.15 89.025C566.15 96.3917 576.117 106.575 583.05 119.575C590.2 132.358 593.775 146.875 593.775 163.125ZM563.225 156.95C563.225 145.683 560.733 136.042 555.75 128.025C550.767 119.792 543.942 113.617 535.275 109.5C526.825 105.167 517.4 103 507 103C492.05 103 479.267 107.767 468.65 117.3C458.25 126.833 452.292 140.05 450.775 156.95H563.225ZM662.388 109.825C667.588 99.6417 674.955 91.7333 684.488 86.1C694.238 80.4667 706.046 77.65 719.913 77.65V108.2H712.113C678.963 108.2 662.388 126.183 662.388 162.15V259H632.813V80.9H662.388V109.825ZM743.003 169.3C743.003 151.1 746.687 135.175 754.053 121.525C761.42 107.658 771.495 96.9333 784.278 89.35C797.278 81.7667 811.687 77.975 827.503 77.975C843.103 77.975 856.645 81.3333 868.128 88.05C879.612 94.7667 888.17 103.217 893.803 113.4V80.9H923.703V259H893.803V225.85C887.953 236.25 879.178 244.917 867.478 251.85C855.995 258.567 842.562 261.925 827.178 261.925C811.362 261.925 797.062 258.025 784.278 250.225C771.495 242.425 761.42 231.483 754.053 217.4C746.687 203.317 743.003 187.283 743.003 169.3ZM893.803 169.625C893.803 156.192 891.095 144.492 885.678 134.525C880.262 124.558 872.895 116.975 863.578 111.775C854.478 106.358 844.403 103.65 833.353 103.65C822.303 103.65 812.228 106.25 803.128 111.45C794.028 116.65 786.77 124.233 781.353 134.2C775.937 144.167 773.228 155.867 773.228 169.3C773.228 182.95 775.937 194.867 781.353 205.05C786.77 215.017 794.028 222.708 803.128 228.125C812.228 233.325 822.303 235.925 833.353 235.925C844.403 235.925 854.478 233.325 863.578 228.125C872.895 222.708 880.262 215.017 885.678 205.05C891.095 194.867 893.803 183.058 893.803 169.625ZM988.957 51.975C983.324 51.975 978.557 50.025 974.657 46.125C970.757 42.225 968.807 37.4583 968.807 31.825C968.807 26.1917 970.757 21.425 974.657 17.525C978.557 13.625 983.324 11.675 988.957 11.675C994.374 11.675 998.924 13.625 1002.61 17.525C1006.51 21.425 1008.46 26.1917 1008.46 31.825C1008.46 37.4583 1006.51 42.225 1002.61 46.125C998.924 50.025 994.374 51.975 988.957 51.975ZM1003.26 80.9V259H973.682V80.9H1003.26ZM1140.44 77.65C1162.1 77.65 1179.65 84.2583 1193.09 97.475C1206.52 110.475 1213.24 129.325 1213.24 154.025V259H1183.99V158.25C1183.99 140.483 1179.55 126.942 1170.66 117.625C1161.78 108.092 1149.65 103.325 1134.26 103.325C1118.66 103.325 1106.2 108.2 1096.89 117.95C1087.79 127.7 1083.24 141.892 1083.24 160.525V259H1053.66V80.9H1083.24V106.25C1089.09 97.15 1097 90.1083 1106.96 85.125C1117.15 80.1417 1128.3 77.65 1140.44 77.65Z"
            fill="#818181"
            fillOpacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

export default Footer;
