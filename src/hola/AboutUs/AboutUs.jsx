import React from "react";
import './AboutUs.css';
import image from '../../assets/AboutUs/AboutUs.png';

const AboutSection = () => {
  return (
    <div className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 img-box">
            <img src={image} alt="Sobre Nosotros" />
          </div>
          <div className="col-md-6 detail-box">
            <h2 className="custom_heading">Sobre nosotros</h2>
            <p>
              Somos una clínica veterinaria familiar dedicada a cuidar a tus mascotas con amor y profesionalismo. Fundada en 2010, nuestro equipo de veterinarios y personal amable se compromete a tratar a cada mascota como si fuera parte de nuestra familia.
              Ofrecemos servicios de consultas, vacunaciones, cirugías y emergencias, utilizando equipamiento moderno para garantizar el mejor cuidado. Además, nos enfocamos en educar a los dueños sobre el cuidado adecuado de sus mascotas.
              Visítanos y conoce a nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
