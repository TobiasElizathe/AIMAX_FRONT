import React, { useEffect } from "react";
import "./UseCases.css";
import caso1 from "../../assets/educacion.webp";
import caso2 from "../../assets/empresas.webp";
import caso3 from "../../assets/arquitectura.webp";
import caso4 from "../../assets/gobierno.jpeg";

interface CasoUso {
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

export const CasosUso: React.FC = () => {
  const casosDeUso: CasoUso[] = [
    {
      titulo: "Educación interactiva",
      descripcion:
        "Transformá las clases en experiencias dinámicas: generá preguntas automáticas según nivel, integrá modelos 3D o traducción en tiempo real. Las pantallas inteligentes hacen las aulas más participativas, inclusivas y atractivas.",
      imagen: caso1,
      alt: "Icono Educación",
    },
    {
      titulo: "Empresas y reuniones",
      descripcion:
        "Optimizá tus salas de reuniones con presentaciones automáticas, diagramas inteligentes y colaboración en vivo. Equipos alineados, decisiones más rápidas y menos tiempo perdido en lo técnico.",
      imagen: caso2,
      alt: "Icono Empresas",
    },
    {
      titulo: "Arquitectura y diseño",
      descripcion:
        "Convertí imágenes en modelos 3D o videos interactivos y presentá proyectos con impacto visual. Colaborá en tiempo real con clientes y colegas sobre la misma pantalla, evitando malentendidos y errores.",
      imagen: caso3,
      alt: "Icono Arquitectura",
    },
    {
      titulo: "Gobierno y organismos públicos",
      descripcion:
        "Digitalizá audiencias, capacitaciones y procesos administrativos con pizarras inteligentes y reconocimiento de voz/escritura. Mayor eficiencia, seguridad y transparencia en cada paso.",
      imagen: caso4,
      alt: "Icono Gobierno",
    },
  ];

  // 🔥 IntersectionObserver para animación scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elementos = document.querySelectorAll(".caso-uso-row");
    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="casos-uso">
      <h2 className="casos-uso__titulo">
        Casos de Uso de <span className="highlight">AIMAX</span>
      </h2>
      <p className="casos-uso__subtitle">
        Descubrí cómo AIMAX transforma la educación, las empresas, el diseño y el sector público.
      </p>

      {casosDeUso.map((caso, index) => (
        <div
          key={index}
          className={`caso-uso-row ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="caso-uso-img">
            <img src={caso.imagen} alt={caso.alt} />
          </div>
          <div className="caso-uso-texto">
            <h3>{caso.titulo}</h3>
            <p>{caso.descripcion}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
