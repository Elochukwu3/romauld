

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  
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
        </>
       
      </main>
      <footer className="hidden max-sm:block max-sm:py-10">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
