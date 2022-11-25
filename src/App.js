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
    </main>
    </div>
  );
}

export default App;
