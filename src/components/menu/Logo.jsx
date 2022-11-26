import React, {useEffect, useRef} from 'react';


export default function Logo() {
    const eyeOne = useRef('')
    const eyeRotate = (e)=>{
        let eyeX =eyeOne.current.getBoundingClientRect().left + (eyeOne.current.clientWidth / 2)
        let eyeY =eyeOne.current.getBoundingClientRect().top + (eyeOne.current.clientHeight / 2)
        let radian = Math.atan2(e.pageX - eyeX, e.pageY - eyeY);
        let rotate = (radian * (180/ Math.PI) * -1 + 0) + 270
        eyeOne.current.style.transform = `rotate(${rotate}deg)`;
       
    }
    useEffect(() => {
   document.addEventListener("mousemove", eyeRotate)
    
    }, [])
    
  return (
    <div>
        <div className='relative text-sky-400/100'>
            <p className=' border-4 border-[#e9b171] rounded-full max-sm:border-2'>
                <img src="../image/rm.png" alt="" className='w-10' />
            </p>
            <span className=' eye bg-[white]  rounded-full  absolute  bottom-0 left-1/4 top-1.5 flex justify-center items-center min-h-fit'>
                <i className='bg-[black] w-1.5 h-1.5 rounded-full' ref={eyeOne}></i>
            </span>
            
        </div>
    </div>
  )
}
