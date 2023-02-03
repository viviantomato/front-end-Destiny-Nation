import React from "react";
import "./Home.css";
import "../components/Recommendations";
import Recommendations from "../components/Recommendations";

const Home = () => (
  <div className="home-page">
    <h1>Home</h1>
    <main>
      <h2>Intro / Goal </h2>
      <p> ... </p>

      <section>
        <h2>Trending</h2>
        <Recommendations></Recommendations>

        {/* ??? logic on what to show */}
      </section>

      <h2>Contact</h2>
      <ul> Email </ul>
      <ul> Phone </ul>

      <h2> About Us </h2>
      <p> ... </p>
      <p> ... </p>
    </main>
  </div>
);

export default Home;
