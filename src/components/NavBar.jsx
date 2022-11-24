import React,{useState} from 'react';
import Hambuger from "./menu/Hambuger";
import Logo from "./menu/Logo";
import Menu from "./menu/Menu";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const collapse =()=>{
    setOpen(!open)
  }
  return (
    <div>
      <div className="flex items-center justify-between w-100 px-8 py-4 bg-[#101c30]">
        <div>
          {" "}
          <Logo />
        </div>
        <div>
          {" "}
          <Hambuger open={open} close={collapse}/>
        </div>
      </div>
      <>
      <Menu open={open}/>
      </>
    </div>
  );
}
