import React, { useRef } from "react";
import "./OnePage.css";
import { Navbar } from "../components/NavBar/NavBar";
import { Hero } from "../components/Hero/Hero";
import { Productos } from "../components/Products/Products";
import { Beneficios } from "../components/Benefits/Benefits";
import { CasosUso } from "../components/UseCases/UseCases";
import { Socios } from "../components/Testimonios/Socios";
import { Footer } from "../components/Footer/Footer";
import { CasosExito } from "../components/CasosDeExito/CasosExito";

const OnePage: React.FC = () => {
  // Creamos refs para cada sección
  const heroRef = useRef<HTMLDivElement>(null);
  const productosRef = useRef<HTMLDivElement>(null);
  const beneficiosRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  return (
    <div className="main-container">
      {/* Pasamos las refs al Navbar */}
      <Navbar
        refs={{
          inicio: heroRef,
          productos: productosRef,
          beneficios: beneficiosRef,
          casos: casosRef,
          contacto: contactoRef,
        }}
      />
      
      <div ref={heroRef}>
        <Hero
          refs={{
            productos: productosRef,
            casos: casosRef,
            contacto: contactoRef,
          }}
        />
      </div>

      <div ref={productosRef}><Productos /></div>
      <div ref={beneficiosRef}><Beneficios /></div>
      <div ref={casosRef}><CasosUso /></div>
      <div ><Socios /></div>
      <div ><CasosExito /></div>
      <div ref={contactoRef}><Footer /></div>
    </div>
  );
};

export default OnePage;
