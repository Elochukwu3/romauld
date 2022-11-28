import { useState } from "react";
import { CodeSimple, Code} from "phosphor-react";
import { projectItems } from "../assets/json";
import Mapp from "./Mapp";
import { projectMore } from "../assets/json";
export default function Projects() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="block py-5" id="project">
      <div className="block pt-20">
        <p className="flex item-center pt-4 pl-5">
          {" "}
          <CodeSimple size={32} color="#00ffff" />
          <span className="text-2xl text-[#64ffda] px-1">Projects</span>
          <Code size={32} color="#00ffff" />
        </p>
        <div className="flex justify-center h-20 max-sm:justify-end max-sm:pr-5">
          <p className='text-white cursor-pointer py-2 italic font-mono after:content-[""] after:duration-1000 after:h-1 after:block after:w-0 after:bg-[#64ffda] hover:after:w-full'>
            Some Things I Have Built
          </p>
        </div>
      </div>
      <>
      <Mapp projectItems={projectItems}/>
      </>
      <div className="pt-8">
          {
            showMore ? <Mapp projectItems={projectMore}/> :""
          }
        <div className="w-full flex justify-center h-60 items-center">
        <button onClick={()=>setShowMore(!showMore)} className='w-30 px-2 font-semibold border-2 border-[#64ffda] text-[#64ffda] rounded-md py-3 font-semibold text-lg bg-[#0e2236]'>
          {
            showMore ? "Show Less" : "Show More"
          }
         </button>
        </div>
        </div>
    </div>
  );
}
