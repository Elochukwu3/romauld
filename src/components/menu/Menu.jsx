import { Timer, X } from "phosphor-react";
import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import CV from "../../assets/curriculum-vitae.pdf";

export default function Menu({ open, close }) {
  return (
    <div>
      <div
        className={
          open
            ? " flex items-center menu-cont fixed z-20  inset-0 bg-[#101c30] w-full h-screen px-12 pt-6"
            : "h-0 overflow-hidden menu-cont"
        }
      >
        <ul className=" text-3xl uppercase text-white w-full">
        <li
        onClick= {close}
            className="py-3 flex justify-end pr-5 cursor pointer text-[#e9b171]"
          >
          <X size={24}/>
          </li>
        <li
        onClick= {close}
            className="py-2.5
            after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
            after:w-0 after:ease-in-out after:duration-1000
            after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
            before:inset-y-0 before:h-full 
            before:w-0 before:ease-in-out before:duration-1000
            before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            <Link to={'#home'} >
            Home
        </Link>
          </li>
          <li
          onClick= {close}
            className="py-2.5 
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
            
            <Link to={'#about'} >
            About
        </Link>
          </li>
          <li
          onClick = {close}
            className="py-2.5 
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
             <Link to={'#project'} >
            Project
        </Link>
          </li>
          <li
          onClick= {close}
            className="py-2.5
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >
             <a href={CV} target="_blank" rel="noreferrer" >
          Resume
        </a>
          </li>
          <li
          onClick= {close}
            className="
          after:content-[''] after:block after:absolute after:inset-y-0 after:h-full 
          after:w-0 after:ease-in-out after:duration-1000
          after:bg-[#ffdead1a] after:z-0 relative after:hover:w-full z-1 before:absolute
          before:inset-y-0 before:h-full 
          before:w-0 before:ease-in-out before:duration-1000
          before:bg-[#daa520b3] before:z-0 before:delay-150  before:hover:w-full z-1"
          >  <Link to={'#contact'} >
          Contact
      </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
