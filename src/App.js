import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import About from "./components/AboutUs";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [textColor, setTextColor] = useState("#000000");
  const [navColor, setNavColor] = useState("#ffffff");

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "Success");
    }
  };
  const changeBGcolor = (event) => {
    document.body.style.backgroundColor = event.target.value;
  };
  const changeTextcolor = (event) => {
    setTextColor(event.target.value);
  };
  const changeNavcolor = (event) => {
    setNavColor(event.target.value);
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          textColor={textColor}
          navColor={navColor}
          toggleMode={toggleMode}
          changeBGcolor={changeBGcolor}
          changeTextcolor={changeTextcolor}
          changeNavcolor={changeNavcolor}
        />
        <dir style={{ zIndex: "5", top: "48px", right: 0, position: 'absolute' }}>
          <Alert alert={alert} />
        </dir>
        <div className="container my-3"></div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                textColor={textColor}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
