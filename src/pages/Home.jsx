import Veggie from "../components/Veggie";
import Popular from "../components/Populars";
import React from "react";

function Home() {
  return (
    <div id="home-wrapper">
      <Popular />
      <Veggie />
    </div>
  );
}

export default Home;
