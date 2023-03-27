import "./App.css";
import Electrical from "./components/Electrical";
import IT from "./components/It";
import Mechanical from "./components/Mech";
import HotelManagement from "./components/HotelManagement";
import Medical from "./components/Medical";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/it" element={<IT />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/hm" element={<HotelManagement />} />
        <Route path="/medical" element={<Medical />} />
      </Routes>
    </>
  );
}

export default App;
