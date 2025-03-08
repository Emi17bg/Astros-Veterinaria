import React, { useState } from 'react';
import './Layout.css'; 

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sobre nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profesionales
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Adopciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacto
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
            {/* Columna Acerca de */}
            <div className="col-md-4">
              <h5>Acerca de</h5>
              <p>
              Somos amantes de los animales y estamos aquí para cuidar de tu mejor amigo. En Astros veterinaira, ofrecemos atención veterinaria de calidad, servicios preventivos y mucho amor para que tu mascota siempre esté sana y feliz.
              </p>
            </div>
            {/* Columna Enlaces */}
            <div className="col-md-4">
              <h5>Enlaces</h5>
              <ul className="footer_links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Profesionales</a></li>
                <li><a href="#">Adopciones</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            {/* Columna Contacto */}
            <div className="col-md-4">
              <h5>Contacto</h5>
              <ul className="footer_contact">
                <li><i className="bx bx-phone"></i> (123) 456-7890</li>
                <li><i className="bx bx-envelope"></i> info@astrosveterinaria.com</li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <p>
              &copy; {new Date().getFullYear()} AstrosVeterinaria. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Layout;



