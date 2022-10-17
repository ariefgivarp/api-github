// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
