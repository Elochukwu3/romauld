import React from "react";
import { CodeSimple, Code, Folder, GithubLogo, Link } from "phosphor-react";
import { projectItems } from "../assets/json";
export default function Projects() {
  return (
    <div className="block py-5">
      <div>
        <p className="flex item-center pt-4 pl-5">
          {" "}
          <CodeSimple size={32} color="#00ffff" />
          <span className="text-2xl text-[#64ffda] px-1">Projects</span>
          <Code size={32} color="#00ffff" />
        </p>
        <div className="flex justify-center h-20 max-sm:justify-end max-sm:pr-5">
          <p className='text-white cursor-pointer after:content-[""] after:duration-1000 after:h-1 after:block after:w-0 after:bg-[#64ffda] hover:after:w-full'>
            View Archive
          </p>
        </div>
      </div>
      <section className="flex justify-center w-full">
        <div className="grid grid-cols-3 w-11/12 gap-x-5 max-lg:grid-cols-2 max-sm:grid-cols-1 h-full gap-y-3.5">
          {projectItems.length &&
            projectItems.map(({ name, details, tool, tool2, tool3, tool5 }) => {
              return (
                <div
                  key={name}
                  className="text-white shadow-md  shadow-[#0f172a] px-7 py-2 h-72 flex flex-col justify-between bg-[#112240] hover:bg-[#10293b] duration-300 hover:-translate-y-2"
                >
                  <div>
                    <nav className="flex justify-between py-4 pb-5">
                      <div className="hover:text-[#64ffda]">
                        <Folder size={30} />
                      </div>
                      <div className="flex items-center">
                        <p className="pr-2">
                          {" "}
                          <Link size={30} />
                        </p>
                        <p className="pl-2 hover:text-[#64ffda]">
                          <GithubLogo size={30} />
                        </p>
                      </div>
                    </nav>
                    <div>
                      <p className="font-bold text-2xl text-[#ddd] hover:text-[#64ffda]">
                        {name}
                      </p>
                      <p className="text-[#9aa5c4]">{details}</p>
                    </div>
                  </div>
                  <footer className="flex justify-around text-[#828cab] pb-2">
                    <span>{tool}</span>
                    <span>{tool2}</span>
                    <span>{tool3}</span>
                    <span>{tool5}</span>
                  </footer>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
