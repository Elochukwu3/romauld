
import { Square, Triangle } from 'phosphor-react';
import  './Ham.css';

function Hambuger({open, close}) {
   
    
  return (
    <div className={'text-[#e9b171]'} onClick={close}>
       {
        open ?  <Triangle size={24}/> : <Square size={24}/>
        
       }
    </div>
  )
}

export default Hambuger