import React from "react";
import "./Profile.css";
import "../Components/Footprint";
import "../Components/Wishlist";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Footprint from "../Components/Footprint";

const Profile = () => (
  <div>
    <h1>Profile ⌨️ </h1>
    <main>
      <h2>Bio 🎴 </h2>
      <TextField id="outlined-basic" label="Who you are" variant="outlined" />

      <Button variant="contained">Connect</Button>
      <Button variant="contained">Message</Button>

      <h2>Footprint 🐾 </h2>
      <Footprint></Footprint>

      <h2>Wishlist ✨ </h2>
    </main>
  </div>
);

export default Profile;
