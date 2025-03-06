import React from 'react';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="#">
              <img src="/perro2.jfif" alt="Logo" />
              <span>AstrosVeterinaria</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
              backgroundImage: "url('/perro2.jfif')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
           }}
           >
            <span className="navbar-toggler-icon"></span>
           </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SOBRE NOSOTROS
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
              <div className="quote_btn-container d-flex justify-content-center">
                {/*AGREGAR LOGOS DE WPP Y LINKEDIN*/}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Layout;
