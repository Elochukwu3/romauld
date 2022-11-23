import React,{useState} from 'react';
import  './Ham.css';

function Hambuger() {
    const [open, setOpen] = useState(false);
    
  return (
    <div className={open ? 'hamburger open': 'hamburger'} onClick={()=>setOpen(!open)}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
    </div>
  )
}

export default Hambuger