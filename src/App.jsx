import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BMICalculator from "./kalkulator/bmi";
//import CicilanBank from "./pages/CicilanBank";
import "bootstrap/dist/css/bootstrap.min.css";
import BmiCalculator from "./kalkulator/bmi";
import CicilanCalculator from "./kalkulator/cicilan_bank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/alert" element={<AlertPage />} /> */}

        <Route path="/" element={<h1>Welcome to Calkulator react</h1>} />
        <Route path="/bmi" element={<BmiCalculator/>} />
        <Route path="/cicilanbank" element={<CicilanCalculator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
