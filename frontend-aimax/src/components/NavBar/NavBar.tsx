import "./Navbar.css";
import AIMAX from "../../assets/Captura de pantalla 2025-08-20 174436.png";
import { Link } from "react-router-dom";  // importante usar react-router-dom

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={AIMAX} alt="AIMAX" className="logo" />
  
      </div>

        <div className="navbar-right">
            <ul>
            <li><Link to="#inicio">Inicio</Link></li>
            <li><Link to="#productos">Productos</Link></li>
            <li><Link to="#beneficios">Beneficios</Link></li>
            <li><Link to="#testimonios">Testimonios</Link></li>
            <li><Link to="#contacto">Contacto</Link></li>
            </ul>
            <a href="#contacto" className="cta">Probar</a>
        </div>
    </nav>
  );
};

