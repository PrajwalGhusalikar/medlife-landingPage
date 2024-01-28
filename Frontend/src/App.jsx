import Features from "./components/Features";
import Footer from "./components/Footer";
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
      <Footer/>
    </div>
  );
}

export default App;
