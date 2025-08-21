import React from "react";
import "./OnePage.css";
import { Navbar } from "../components/NavBar/NavBar";
import {Hero} from "../components/Hero/Hero";

const OnePage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      {/* Aquí luego irán Hero, AboutUs, Products, etc. */}
    </div>
  );
};

export default OnePage;
