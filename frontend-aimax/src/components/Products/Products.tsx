import "./Products.css";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import producto3 from "../../assets/prod1.jpeg";
import producto1 from "../../assets/prod2.png";
import producto2 from "../../assets/prod3.png";

export const Productos = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="productos" id="productos">
    <h2 className="productos-title">Nuestros <span className="gradient">Productos</span></h2>
      <p className="productos-subtitle">
        Descubrí las <span className="highlight">funciones</span> y especificaciones que hacen de AIMAX una solución única para empresas y educación.
        </p>


      <div className="productos-grid">
        {/* Producto 1 */}
        <div
          ref={(el) => { cardsRef.current[0] = el; }}
          data-index={0}
          className={`producto-card ${visibleCards.includes(0) ? "visible" : ""}`}
        >
          <img src={producto1} alt="Funciones de IA para Empresas" />
          <h3>Funciones de IA para Empresas</h3>
          <ul>
            <li><FaCheckCircle className="icon" /> Generación automática de presentaciones</li>
            <li><FaCheckCircle className="icon" /> Diagramas de flujo inteligentes</li>
            <li><FaCheckCircle className="icon" /> Conversión de imagen a video o modelo 3D</li>
            <li><FaCheckCircle className="icon" /> Comandos de voz offline</li>
          </ul>
        </div>

        {/* Producto 2 */}
        <div
          ref={(el) => { cardsRef.current[1] = el; }}
          data-index={1}
          className={`producto-card ${visibleCards.includes(1) ? "visible" : ""}`}
        >
          <img src={producto2} alt="Funciones de IA para Educación" />
          <h3>Funciones de IA para Educación</h3>
          <ul>
            <li><FaCheckCircle className="icon" /> Generación de preguntas por nivel y dificultad</li>
            <li><FaCheckCircle className="icon" /> Reconocimiento de escritura a mano</li>
            <li><FaCheckCircle className="icon" /> Integración con contenido 3D</li>
            <li><FaCheckCircle className="icon" /> Conversión voz-texto y texto-voz</li>
            <li><FaCheckCircle className="icon" /> Traducción multilingüe y reconocimiento de fórmulas</li>
          </ul>
        </div>
          {/* Producto 3 */}
          <div
            ref={(el) => { cardsRef.current[2] = el; }}
            data-index={2}
            className={`producto-card ${visibleCards.includes(2) ? "visible" : ""}`}
          >
            <img src={producto3} alt="Especificaciones Técnicas" />
            <h3>Especificaciones Técnicas</h3>
            <ul>
              <li><FaCheckCircle className="icon" /> <strong>Android</strong>: Versión 14 - 4 GB RAM - 32 GB Almacenamiento - CPU 8 núcleos - GPU 4 núcleos</li>
              <li><FaCheckCircle className="icon" /> <strong>Windows</strong>: Windows 10 - 8 GB RAM - Intel Core i7 - 1TB Almacenamiento</li>
              <li><FaCheckCircle className="icon" /> Manejo simple, seguro y sin necesidad de internet para funciones básicas</li>
            </ul>
          </div>
      </div>
    </section>
  );
};
