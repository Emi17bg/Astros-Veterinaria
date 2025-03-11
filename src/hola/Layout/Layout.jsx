import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="#">
            <i className="icon bx bx-bug brand-icon"></i>
            <span>AstrosVeterinaria</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection("services")}>Servicios</button></li>
                <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection("professionals")}>Profesionales</button></li>
                <li className="nav-item"><Link className="nav-link" to="/api-data">Adopciones</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
                <li className="nav-item social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            {/* Acerca de */}
            <div className="col-md-4 footer_col">
              <h5>Acerca de</h5>
              <p>
                Somos amantes de los animales y estamos aquí para cuidar de tu mejor amigo. En Astros Veterinaria, ofrecemos atención veterinaria de calidad, servicios preventivos y mucho amor para que tu mascota siempre esté sana y feliz.
              </p>
            </div>

            <div className="col-md-4 footer_col">
              <h5>Enlaces</h5>
              <ul className="footer_links">
                <li><Link className="nav-link" to="/">Inicio</Link></li>
                <li><button className="nav-link" onClick={() => scrollToSection("services")}>Servicios</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection("professionals")}>Profesionales</button></li>
                <li><Link className="nav-link" to="/api-data">Adopciones</Link></li>
                <li><Link className="nav-link" to="/contact">contacto</Link></li>
              </ul>
            </div>

            <div className="col-md-4 footer_col">
              <h5>Contacto</h5>
              <ul className="footer_contact">
                <li><i className="bx bx-phone"></i> (123) 456-7890</li>
                <li><i className="bx bx-envelope"></i> info@astrosveterinaria.com</li>
              </ul>
            </div>
          </div> 

          <div className="footer_bottom">
            <p>&copy; {new Date().getFullYear()} AstrosVeterinaria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;






