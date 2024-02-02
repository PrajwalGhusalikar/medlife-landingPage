import { useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <Router>
        {" "}
        <NavBar setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />}></Route>
        </Routes>
        <Features theme={theme} />
        <Pricing theme={theme} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
