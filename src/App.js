import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <nav>
    <NavBar/>
    </nav>
    <main>
      <Home/>
      <>
      <About/></>
    </main>
    </div>
  );
}

export default App;
