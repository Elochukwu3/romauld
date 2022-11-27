import React from "react";
import {
  CodeSimple,
  Code,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Envelope,
  WhatsappLogo,
} from "phosphor-react";
import profilImg from "../texture-img/elo.png";
import CV from "../assets/Cv.pdf";
import Technogology from "./Technogology";

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
            I’m a front-end web developer with over a year of experience. I work
            with agencies across the globe to create high performance & rich
            interactive websites that work across all platforms & devices.
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
        <p className="pl-1 space-y-0 text-slate-400 break-normal py-2 underline underline-offset-1 ">
          Here are other technologies I work with:
        </p>
        <div className="flex gap-x-1 w-full mb-5">
          <Technogology
            name1={"Git"}
            name2={"GitHub"}
            name3={"React"}
            name4={"Three.Js"}
          />
          <Technogology
            name1={"Tailwind CSS"}
            name2={"Sass"}
            name3={"Semantic Ui"}
            name4={"Bootstrap"}
          />
          <Technogology
            name1={"CorelDraw"}
            name2={"WordPress"}
            name3={"Microsoft"}
            name4={"Html"}
          />
        </div>
        <div className="w-full flex justify-center py-2 mt-7">
          <a href={CV} target="_blank" rel="noreferrer" className="w-1/2">
            <button className="w-full font-semibold border-2 border-[#64ffda] py-2 text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0f172a]">
              Resume
            </button>
          </a>
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
              <a
                href="https://github.com/Elochukwu3/"
                target={"_blank"}
                rel="noreferrer"
              >
                <GithubLogo size={24} color="#00ffff" />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/romauld-elochukwu/"
                target={"_blank"}
                rel="noreferrer"
              >
                <LinkedinLogo size={24} color="#00ffff" />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <a
                href="https://twitter.com/Romauld_J"
                target={"_blank"}
                rel="noreferrer"
              >
                <TwitterLogo size={24} color="#00ffff" />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <a
                href="mailto:oguajuromauld5@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <Envelope size={24} color="#00ffff" />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer">
              <a
                href="https://wa.me/+2348132531639"
                target={"_blank"}
                rel="noreferrer"
              >
                <WhatsappLogo size={24} color="#00ffff" />
              </a>
            </li>
            <li className="h-24 w-0.5 bg-[grey] py-2"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
