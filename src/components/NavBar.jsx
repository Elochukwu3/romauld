import React, { useState, useEffect } from "react";
import Hambuger from "./menu/Hambuger";
import Logo from "./menu/Logo";
import Menu from "./menu/Menu";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [navSticky, setNavSticky] = useState("");
  const stickyScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10
      ? setNavSticky("fixed -top-5 left-0 z-50 pt-10") 
      : setNavSticky("relative  z-30 ");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyScroll);
console.log(navSticky);
    return () => {
      window.removeEventListener("scroll", stickyScroll);
    };
  });

  
  const collapse = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className={`border-b  border-[#8892b0] flex items-center justify-between w-screen px-8 py-4 bg-[#101c30] ${navSticky}`}
      >
        <div>
          {" "}
          <Logo />
        </div>
        <div>
          {" "}
          <Hambuger open={open} close={collapse} />
        </div>
      </div>
      <>
        <Menu open={open} />
      </>
    </div>
  );
}
