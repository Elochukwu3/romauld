import React from "react";
import {
  CodeSimple,
  Code,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Envelope,
  FacebookLogo,
} from "phosphor-react";
import profilImg from "../texture-img/elo.png";

export default function About() {
  return (
    <div className="flex w-full px-10 justify-between items-center max-sm:block max-sm:px-5">
      <div className="flex-1">
        <p className="flex item-center py-4">
          {" "}
          <CodeSimple size={32} color="#00ffff" />
          <span className="text-2xl text-[#64ffda] px-3">About Me</span>
          <Code size={32} color="#00ffff" />
        </p>
        <div className="text-lg max-sm:text-base">
          <p className="text-[#e9b171] py-3">
            I’m a front-end web developer with over a decade of experience. I
            work with agencies across the globe to create high performance &
            rich interactive websites that work across all platforms & devices.
          </p>
          <p className="text-[#64ffda]">
            Although I'm very familiar with using frameworks, my websites are
            primarily hand-coded using HTML5, CSS3, JavaScript & React.
          </p>
          <p className="text-[#e9b171] py-3">
            {" "}
            With a strong emphasis on "Progressive Enhancement", I look for
            creative ways to push the boundaries of website front-end code
            without compromising on browser support and performance.{" "}
          </p>
          <p className="text-[#64ffda] py-3">
            In a quest for always keeping myself updated, I read books and
            attend conferences & meetups.
          </p>
        </div>
        <div className="w-full flex justify-center py-2">
          <button className="w-1/2 font-semibold border-2 border-[#64ffda] py-2 text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0f172a]">
            Resume
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-100 flex justify-center  relative max-sm:mt-10">
          <div className="w-60 border-2 border-[#64ffda] relative">
            <img
              src={profilImg}
              alt="profile"
              className="w-100 z-10 scale-95 origin-center transition duration-150 ease-out hover:scale-100"
            />
          </div>
          <ul className="ph-icons fixed bottom-1.5 right-6 flex flex-col items-center max-sm:hidden">
            <li className="py-2 hover:-translate-y-1 cursor-pointer">
              <GithubLogo size={24} color="#00ffff" />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <LinkedinLogo size={24} color="#00ffff" />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <TwitterLogo size={24} color="#00ffff" />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <Envelope size={24} color="#00ffff" />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <FacebookLogo size={24} color="#00ffff" />
            </li>
            <li className="h-28 w-0.5 bg-[grey] py-2"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
