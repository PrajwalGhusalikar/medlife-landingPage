import { useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./Pages/Chat";
import Signin from "./Pages/Signin";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  let [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <Router>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <Home theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <Features theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <NavBar setTheme={setTheme} theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  <Pricing theme={theme} />{" "}
                </PrivateRoute>
                <PrivateRoute>
                  <Chatbot/>{" "}
                </PrivateRoute>
                <PrivateRoute>
                  {" "}
                  <Footer />{" "}
                </PrivateRoute>
              </>
            }
          ></Route>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
