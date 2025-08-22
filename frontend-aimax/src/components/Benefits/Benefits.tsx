import "./Benefits.css";
import foto1 from "../../assets/benef1.webp";
import foto2 from "../../assets/benef2.webp";
import foto3 from "../../assets/benef3.webp";
import { useEffect, useRef, useState } from "react";

interface Beneficio {
  titulo: string;
  texto: string;
  img: string;
  reverse: boolean;
}

export const Beneficios: React.FC = () => {
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      rowsRef.current.forEach((row, idx) => {
        if (!row) return;
        const top = row.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100 && !visibleRows.includes(idx)) {
          setVisibleRows((prev) => [...prev, idx]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para cargar los que ya están en viewport

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleRows]);

  const beneficioData: Beneficio[] = [
    {
      titulo: "Ahorro de tiempo",
      texto: "Prepará reuniones y clases en minutos con presentaciones automáticas y herramientas asistidas por IA.",
      img: foto1,
      reverse: false,
    },
    {
      titulo: "Colaboración mejorada",
      texto: "Todos los participantes pueden interactuar de forma intuitiva en la pantalla, sin barreras tecnológicas.",
      img: foto2,
      reverse: true,
    },
    {
      titulo: "Mayor impacto visual",
      texto: "Presentaciones claras y dinámicas que generan más atención y retención en estudiantes y equipos de trabajo.",
      img: foto3,
      reverse: false,
    },
  ];

  return (
    <section className="beneficios" id="beneficios">
      <h2>
        Beneficios de <span className="highlight">AIMAX</span>
      </h2>
      <p className="beneficios-subtitle">
        Descubrí cómo nuestras pantallas inteligentes generan{" "}
        <span className="highlight">impacto real</span> en tu trabajo y aprendizaje.
      </p>

      {beneficioData.map((b, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) rowsRef.current[idx] = el;
          }}
          className={`beneficio-row ${b.reverse ? "reverse" : ""} ${
            visibleRows.includes(idx) ? "visible" : ""
          }`}
        >
          <div className="beneficio-texto">
            <h3>{b.titulo}</h3>
            <p>{b.texto}</p>
          </div>
          <div className="beneficio-img">
            <img src={b.img} alt={b.titulo} />
          </div>
        </div>
      ))}
    </section>
  );
};
