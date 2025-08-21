import "./Hero.css";
import HeroVideo from "../../assets/hero.mp4"; // o una imagen si preferís
// import HeroImage from "../../assets/hero.png";

export const Hero = () => {
  return (
    <header className="hero" id="inicio">
      <div className="hero-content">
        <h1>
          La nueva generación de{" "}
          <span className="gradient">pantallas interactivas</span> con IA
        </h1>
        <p>
          Transformá tu aula o sala de reuniones con{" "}
          <span className="highlight">tecnología inteligente</span>
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            Ver Productos
          </a>
          <a href="#productos" className="btn-secondary">
            Ver funciones
          </a>
        </div>
      </div>

      <div className="hero-media">
        {/* si querés video */}
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />

        
      </div>
    </header>
  );
};
