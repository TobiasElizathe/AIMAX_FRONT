import React from "react";
import "./OnePage.css";
import { Navbar } from "../components/NavBar/NavBar";
import {Hero} from "../components/Hero/Hero";
import {Productos} from "../components/Products/Products";

const OnePage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Productos />
      {/* Aquí luego irán Hero, AboutUs, Products, etc. */}
    </div>
  );
};

export default OnePage;
