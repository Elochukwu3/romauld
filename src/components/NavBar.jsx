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
        ? setNavSticky(
            "fixed -top-5 left-0 z-50 pt-10 border-b  border-[#e9b171]"
          )
        : setNavSticky("relative  z-30 ");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyScroll);

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
        className={` flex items-center justify-between w-screen px-10 py-4 bg-[#101c30] ${navSticky} max-sm:px-2 nav`}
      >
        <div className="">
          {" "}
          <Logo />
        </div>
        <div className="flex">
          {" "}
          <button
            onClick={() =>
              (window.location = "mailto:oguajuromauld5@gmail.com")
            }
            className="border border-[#e9b171] mx-8 px-1 rounded-sm text-[#e9b171] hover:italic max-sm:mr-3"
          >
            Contact Me
          </button>
          <Hambuger open={open} close={collapse} />
        </div>
      </div>
      <>
        <Menu open={open} close={collapse} />
      </>
    </div>
  );
}
