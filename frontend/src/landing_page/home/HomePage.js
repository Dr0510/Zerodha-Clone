import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Eduction from "./Eduction";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccount />
    </>
  );
}

export default Homepage;
