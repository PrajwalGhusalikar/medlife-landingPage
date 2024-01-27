import Features from "./components/Features";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
