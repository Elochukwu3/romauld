import React from "react";

export default function Menu({open}) {
  return (
    <div >
      <div className={open? " flex items-center menu-cont fixed flex z-11  inset-0 bg-[#101c30] w-full h-screen px-12 pt-6": "h-0 overflow-hidden menu-cont"}>
        <ul className=" text-3xl uppercase text-white w-full">
          <li
            className="py-2.5
            hover:animate-bounce
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            Home
          </li>
          <li
            className="py-2.5 
            hover:animate-bounce
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            Project
          </li>
          <li
            className="py-2.5 
            hover:animate-bounce
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            About
          </li>
          <li
            className="py-2.5 hover:animate-bounce
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            Experience
          </li>
          <li
            className="py-2.5 hover:animate-bounce
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
