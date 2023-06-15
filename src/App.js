import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <About />
        <Service />
      </BrowserRouter>
    </>
  );
}

export default App;
