import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculationPage from "./components/Calculation.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CalculationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
