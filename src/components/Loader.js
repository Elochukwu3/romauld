import React from 'react'
import './Loader.css'
export default function Loader() {
  return (
    <div className=' flex justify-center items-center h-screen'>
        <span className='absolute text-[#64ffda] font-semibold'>RM</span>
        <section className="containerLoader">
  <div>
  <div>
    <span className="one h6"></span>
    <span className="two h3"></span>
  </div>
</div>


<div>
  <div>
    <span className="one h1"></span>
    <span className="two h4"></span>
  </div>
</div>


<div>
  <div>
    <span className="one h5"></span>
    <span className="two h2"></span>
  </div>
</div>
</section>
    </div>
  )
}
