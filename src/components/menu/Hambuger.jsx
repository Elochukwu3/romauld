
import  './Ham.css';

function Hambuger({open, close}) {
   
    
  return (
    <div className={open ? 'hamburger open': 'hamburger'} onClick={close}>
        <div className=' line bg-[#fff]'></div>
        <div className='line bg-[#fff]'></div>
        <div className='line bg-[#fff]'></div>
    </div>
  )
}

export default Hambuger