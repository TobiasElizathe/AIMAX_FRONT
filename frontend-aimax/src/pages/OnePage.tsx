import React from "react";
import "./OnePage.css";
import { Navbar } from "../components/NavBar/NavBar";

const OnePage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      {/* Aquí luego irán Hero, AboutUs, Products, etc. */}
    </div>
  );
};

export default OnePage;
