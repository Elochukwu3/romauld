
import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main className="pl-16 max-md:pl-0 max-sm:pl-0">
        <>
          <Home />
        </>
        <>
          <About />
        </>
        <>
        <Projects/>
        <div>
          {
            showMore ? <Projects/> :""
          }
        <div className="w-full flex justify-center">
        <button onClick={()=>setShowMore(!showMore)} className='p-4 bg-[#0e2236] border-2 border-[#e17148]'>
          {
            showMore ? "showLess" : "showMore"
          }
         </button>
        </div>
        </div>
        </>
      </main>
    </div>
  );
}

export default App;
