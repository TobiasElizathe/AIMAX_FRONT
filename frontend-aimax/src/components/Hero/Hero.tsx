import "./Hero.css";
import HeroVideo from "../../assets/hero.mp4";

interface HeroProps {
  refs?: {
    productos: React.RefObject<HTMLDivElement | null>;
    casos: React.RefObject<HTMLDivElement | null>;
    contacto: React.RefObject<HTMLDivElement | null>;
  };
}

export const Hero: React.FC<HeroProps> = ({ refs }) => {
  const handleScroll = (ref?: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            className="btn-primary"
            onClick={() => handleScroll(refs?.productos)}
          >
            Ver Productos
          </button>
          <button
            className="btn-secondary"
            onClick={() => handleScroll(refs?.casos)}
          >
            Ver funciones
          </button>
        </div>
      </div>

      <div className="hero-media">
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
