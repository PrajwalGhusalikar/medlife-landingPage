import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Features />
        <Pricing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
