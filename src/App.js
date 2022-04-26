//libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Playground from "pages/playground/Playground";
import Error404 from "pages/errors/Error404/Error404";
import Home from "pages/home/Home";
import Transactions from "pages/transactions/Transactions";
import Buses from "pages/buses/Buses";
import Drivers from "pages/drivers/Drivers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/" element={<Playground />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
