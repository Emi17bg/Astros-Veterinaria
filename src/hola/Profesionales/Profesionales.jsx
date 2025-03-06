import React from "react";
import './Profesionales.css';
import Cirujana from '../../assets/Profesionales/Cirujana.png'; // Ejemplo de imagen

const veterinarios = [
  {
    imagen: Cirujana,
    nombre: "Dr. Gabriel Fernandez",
    descripcion: "Graduado de la Universidad de Buenos Aires, especializado en Medicina General. Con mucha experiencia, brinda atención médica integral y de alta calidad a todos sus pacientes."
  },
  {
    imagen: Cirujana,
    nombre: "Dra. Valeria Gomez",
    descripcion: "Graduada de la Universidad Nacional de La Plata, especializada en Cirugía. Con una destacada trayectoria, es reconocida por su precisión y habilidades excepcionales en el quirófano."
  },
  {
    imagen: Cirujana,
    nombre: "Dra. Valentina Martinez",
    descripcion: "Graduada de la Universidad Nacional de Rosario, especializada en Diagnóstico por Imágenes. Su habilidad para interpretar resultados de imágenes médicas es clave para diagnósticos precisos."
  },
  {
    imagen: Cirujana,
    nombre: "Alejandro Ruiz",
    descripcion: "Graduado de la Universidad Nacional del Litoral, especializado en Peluquería Canina. Su pasión por los animales y su habilidad artística aseguran el mejor cuidado."
  },
  {
    imagen: Cirujana,
    nombre: "Carla Torres",
    descripcion: "Graduada de la Universidad Nacional de Córdoba, especializada en escuelas y guarderías caninas. Experiencia en hotelería y entrenamiento para animales de todo tipo."
  }
];

const ProfesionalesSection = () => {
  return (
    <section className="profesionales_section layout_padding">
      <div className="container">
        <h2 className="custom_heading">Profesionales</h2>
        <div className="profesionales_row">
          {veterinarios.map((veterinario, index) => (
            <div className="profesionales_card" key={index}>
              <div className="profesionales_img_box">
                <img src={veterinario.imagen} alt={veterinario.nombre} className="service_image" />
              </div>
              <div className="detail_box">
                <h6>{veterinario.nombre}</h6>
                <p>{veterinario.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfesionalesSection;


