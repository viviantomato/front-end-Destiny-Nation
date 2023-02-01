import React from "react";
import "./Home.css";

const Home = () => (
  <div className="home-page">
    <h1>Home</h1>
    <main>
      <h2>Intro / Goal </h2>
      <p> ... </p>
      <p> ... </p>
      <p> ... </p>

      <section className="popular">
        <h2>Popular Recommendations</h2>
        <p> ...sliding ? </p>
        {/* <CardList cards={cardList}  /> */}
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
