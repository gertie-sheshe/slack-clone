import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../../layout/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Header />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
