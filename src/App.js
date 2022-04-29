//libraries
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Playground from "pages/playground/Playground";
import Error404 from "pages/errors/Error404/Error404";
import Home from "pages/home/Home";
import Transactions from "pages/transactions/Transactions";
import Buses from "pages/buses/Buses";
import Drivers from "pages/drivers/Drivers";
import Sidebar from "components/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/" element={<Playground />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
