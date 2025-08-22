import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css"

export const Footer: React.FC = () => {
  return (
    <section className="contacto-footer">
      <div className="contacto">
        <h2>Contactanos</h2>

        <div className="contacto-redes">
          <a
            href="https://wa.me/61412879776"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/aimax_interactive/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            <FaInstagram /> Instagram
          </a>
            <a
            href="https://mail.google.com/mail/?view=cm&to=aimaxpantallasinteractivas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            >
            📧 Email
            </a>

        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AIMAX. Todos los derechos reservados.</p>
        <p>Rosario, Argentina</p>
      </footer>
    </section>
  );
};
