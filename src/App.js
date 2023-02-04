import { Route, Routes } from "react-router-dom";
import React from "react";

import { Header } from "components/Header/Header";
import Home from "pages/Home";
import Profile from "pages/Profile";
import { SearchResult } from "pages/SearchResult";
import { Destination } from "pages/Destination/Destination";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:query?" element={<SearchResult />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/destination/:id" element={<Destination />} />
      </Routes>
      <footer className="footer">© Built by Vivian 2023</footer>
    </div>
  );
}
