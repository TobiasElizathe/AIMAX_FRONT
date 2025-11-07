import React, { useRef, useState, useEffect } from "react";
import "./CasosExito.css";

type Cliente = {
  nombre: string;
  nota?: string;
};

export const CasosExito: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const clientes: Cliente[] = [
    { nombre: "Terminal6" },
    { nombre: "Molino Dos Hermanos" },
    { nombre: "Escuela Industrial de Santa Fe" },
    { nombre: "Estudio Baravalle & Granados" },
    { nombre: "PROGLOBAL" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight - 100 && !visibleCards.includes(idx)) {
          setVisibleCards((prev) => [...prev, idx]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  return (
    <section className="casos" id="casos-exito" aria-label="Casos de éxito y clientes">
      <h2>Casos de Éxito</h2>
      <p className="casos-subtitle">Instituciones y empresas que confían en AIMAX</p>

      <div className="casos-container">
        {clientes.map((c, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className={`caso-card ${visibleCards.includes(idx) ? "visible" : ""}`}
            role="article"
            aria-labelledby={`caso-title-${idx}`}
          >
            <h3 id={`caso-title-${idx}`} className="caso-nombre">{c.nombre}</h3>
            {c.nota && <p className="caso-nota">{c.nota}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasosExito;
