import React from "react";

export default function About() {
  return (
    <div className="flex w-full px-10  max-sm:block px-5">
      <div className="flex-1">
        {/* <CodeSimple size={32} color="#00ffff" /><span>About</span><Code size={32} color="#00ffff" /> */}
       <div className="text-lg mx-sm:text-base">
        <p className="text-[#e9b171] py-3">
        I’m a front-end web developer with over a decade of experience. I work
        with agencies across the globe to create high performance & rich
        interactive websites that work across all platforms & devices.    
        </p> 
        <p className="text-[#64ffda]">
        Although
        I'm very familiar with using frameworks, my websites are primarily
        hand-coded using HTML5, CSS3, JavaScript & React.
        </p>
      <p className="text-[#e9b171] py-3">   With a strong emphasis
        on "Progressive Enhancement", I look for creative ways to push the
        boundaries of website front-end code without compromising on browser
        support and performance. </p>
        <p className="text-[#64ffda] py-3">In a quest for always keeping myself updated, I
        read books and attend conferences & meetups.</p>
        </div>
        <button>CV</button>
      </div>
      <div className="flex-1">

      </div>
    </div>
  );
}
