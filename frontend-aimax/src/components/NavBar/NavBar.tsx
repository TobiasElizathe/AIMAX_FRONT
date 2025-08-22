import React from "react";
import "./Navbar.css";
import AIMAX from "../../assets/Captura de pantalla 2025-08-20 174436.png";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  refs?: {
    inicio: React.RefObject<HTMLDivElement | null>;
    productos: React.RefObject<HTMLDivElement | null>;
    beneficios: React.RefObject<HTMLDivElement | null>;
    casos: React.RefObject<HTMLDivElement | null>;
    contacto: React.RefObject<HTMLDivElement | null>;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScroll = (ref?: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={AIMAX} alt="AIMAX" className="logo" />
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        {/* Botón de cerrar SOLO visible en mobile */}
        {menuOpen && (
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>
        )}

        <ul>
          <li onClick={() => handleScroll(refs?.inicio)}>Inicio</li>
          <li onClick={() => handleScroll(refs?.productos)}>Productos</li>
          <li onClick={() => handleScroll(refs?.beneficios)}>Beneficios</li>
          <li onClick={() => handleScroll(refs?.casos)}>Casos de Uso</li>
          <li onClick={() => handleScroll(refs?.contacto)}>Contacto</li>
        </ul>
        <button className="cta" onClick={() => handleScroll(refs?.contacto)}>
          OBTENER
        </button>
      </div>

      {/* Hamburger / X */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};
