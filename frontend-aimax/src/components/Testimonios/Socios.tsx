import React, { useRef, useState, useEffect } from "react";
import "./Socios.css";

export const Socios: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const socios = [
    "Alejo Granados",
    "Manuel Grabois",
  ];

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100 && !visibleCards.includes(idx)) {
          setVisibleCards((prev) => [...prev, idx]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  return (
    <section className="socios" id="socios">
      <h2>Nuestros Socios</h2>
      <p className="socios-subtitle">Trabajamos juntos para impulsar la innovación y el crecimiento</p>
      <div className="socios-container">
        {socios.map((nombre, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className={`socio-card ${visibleCards.includes(idx) ? "visible" : ""}`}
          >
            <span>{nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
