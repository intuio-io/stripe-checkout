import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Checkout from "./components/Checkout";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
