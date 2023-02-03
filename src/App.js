import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";

import { Route, Routes, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Destination from "./Pages/Destination";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/destination" element={<Destination />} />
      </Routes>
      <footer className="footer">© Built by Vivian 2023</footer>
    </>
  );
}
