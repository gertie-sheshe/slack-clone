import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MainContainer>
          <SideBar />
          <Routes>
            <Route path="/" exact element={<div>Olaaa</div>} />
          </Routes>
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  height: 100vh;
`;
