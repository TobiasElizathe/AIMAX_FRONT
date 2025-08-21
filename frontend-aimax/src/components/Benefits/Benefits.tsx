import "./Benefits.css";
import foto1 from "../../assets/benef1.webp";
import foto2 from "../../assets/benef2.webp";
import foto3 from "../../assets/benef3.webp";

export const Beneficios = () => {
  return (
    <section className="beneficios" id="beneficios">
      <h2>Beneficios de <span className="highlight">AIMAX</span></h2>
      <p className="beneficios-subtitle">
        Descubrí cómo nuestras pantallas inteligentes generan{" "}
        <span className="highlight">impacto real</span> en tu trabajo y aprendizaje.
      </p>

      <div className="beneficio-row">
        <div className="beneficio-texto">
          <h3>Ahorro de tiempo</h3>
          <p>
            Prepará reuniones y clases en minutos con presentaciones automáticas y herramientas asistidas por IA.
          </p>
        </div>
        <div className="beneficio-img">
          <img src={foto1} alt="Ahorro de tiempo" />
        </div>
      </div>

      <div className="beneficio-row reverse">
        <div className="beneficio-texto">
          <h3>Colaboración mejorada</h3>
          <p>
            Todos los participantes pueden interactuar de forma intuitiva en la pantalla, sin barreras tecnológicas.
          </p>
        </div>
        <div className="beneficio-img">
          <img src={foto2} alt="Colaboración mejorada" />
        </div>
      </div>

      <div className="beneficio-row">
        <div className="beneficio-texto">
          <h3>Mayor impacto visual</h3>
          <p>
            Presentaciones claras y dinámicas que generan más atención y retención en estudiantes y equipos de trabajo.
          </p>
        </div>
        <div className="beneficio-img">
          <img src={foto3} alt="Mayor impacto visual" />
        </div>
      </div>
    </section>
  );
};
