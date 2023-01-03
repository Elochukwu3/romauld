import { GitBranch, Sparkle } from "phosphor-react";
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

    return (
      <>
       {
        loading ? <Loader/> : (
          <section className="w-screen">
          <nav>
            <NavBar />
          </nav>
          <main>
            <div>
              <Home />
            </div>
            <div className={"pl-11 max-md:pl-0 max-sm:pl-0  "}>
              <About />
            </div>
            <>
              <Projects />
            </>
            <Contact />
          </main>
          <footer>
            <div className="hidden max-sm:block max-sm:py-10 max-sm:flex-wrap">
              <Footer />
            </div>
            <hr className="hidden border-b-1 border-[#e9b171] my-3 max-sm:block" />
            <p className="text-center text-white font-mono italic leading-none text-xs hover:text-[#e9b171]">
              Created and designed by Romauld{" "}
            </p>
            <p className="flex justify-center gap-x-10 text-[#fff] font-mono italic py-3">
              <a
                href="https://github.com/Elochukwu3/romauld"
                target="_blank"
                rel="noreferrer"
                className="flex cursor-pointer hover:text-[#e9b171] items-center"
              >
                {" "}
                <GitBranch size={20} />
                <span className="text-xs">45</span>
              </a>
              <a
                href="https://github.com/Elochukwu3/romauld"
                target="_blank"
                className="flex cursor-pointer hover:text-[#e9b171] items-center"
                rel="noreferrer"
              >
                <Sparkle size={20} /> <span className="text-xs">1,000</span>
              </a>
            </p>
          </footer>
        </section>
        )
       }
      </>
    );
  
}

export default App;
