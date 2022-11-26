import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main className="pl-16 max-sm:pl-0">
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
    </div>
  );
}

export default App;
