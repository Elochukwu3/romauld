
import  './Ham.css';

function Hambuger({open, close}) {
   
    
  return (
    <div className={open ? 'hamburger open': 'hamburger'} onClick={close}>
        
        <div className=' line bg-[#e9b171]'></div>
        <div className=' line bg-[#e9b171]'></div>
        <div className=' line bg-[#e9b171]'></div>
    </div>
  )
}

export default Hambuger