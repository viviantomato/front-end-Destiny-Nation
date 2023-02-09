import React from "react";
import "./Home.css";
import "../components/Recommendations/Recommendations";
import { Recommendations } from "../components/Recommendations";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Home = () => (
  <div className="home-page">
    <h1>Home</h1>
    <main>
      <section>
        <h2>Trending</h2>
        <Recommendations />
      </section>
      <h2>Contact</h2>
      <EmailIcon> </EmailIcon>
      <p>vivian22lab@gmail.com </p>
      <LocalPhoneIcon> </LocalPhoneIcon>
      <p>206-698-7607 </p>
      <h2> About Us </h2>
      <p> ... </p>
      <p> ... </p>
    </main>
  </div>
);

export default Home;
