import React from "react";
import './Profesionales.css';
import Cirujana from '../../assets/Profesionales/veterinaria.png'
import Veterinario from '../../assets/Profesionales/veterinario.png'
import Radiologa from '../../assets/Profesionales/radiologa.png'
import Peluquero from '../../assets/Profesionales/peluquero.png'
import Educadora from '../../assets/Profesionales/educadora.png'

const veterinarios = [
  {
    imagen: Veterinario,
    nombre: "Dr. Gabriel Fernandez",
    descripcion: "Graduado de la Universidad de Buenos Aires. Con amplia experiencia, brinda atención integral y de alta calidad a sus pacientes."
  },
  {
    imagen: Cirujana,
    nombre: "Dra. Valeria Gomez",
    descripcion: "Graduada de la Universidad Nacional de La Plata, especializada en Cirugía. Con amplia experiencia, ofrece cuidados quirúrgicos integrales y precisos a sus pacientes."
  },
  {
    imagen: Radiologa,
    nombre: "Dra. Valentina Martinez",
    descripcion: "Graduada de la Universidad Nacional de Rosario. Con experiencia, interpreta estudios médicos con precisión para obtener diagnosticos rápidos."
  },
  {
    imagen: Peluquero,
    nombre: "Alejandro Ruiz",
    descripcion: "Graduado de la Universidad Nacional del Litoral, especializado en Peluquería Canina. Con amplia experiencia, brinda cuidados estéticos y completos a sus clientes."
  },
  {
    imagen: Educadora,
    nombre: "Carla Torres",
    descripcion: "Graduada de la Universidad Nacional de Córdoba, especializada en guarderías caninas. Con amplia experiencia, brinda atención integral y personalizada a sus pacientes."
  }
];


const ProfesionalesSection = () => {
  return (
    <section className="profesionales_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h2 className="custom_heading">Profesionales</h2>
            <div className="container layout_padding2">
              <div className="row profesionales_row">
                {veterinarios.map((veterinario, index) => (
                  <div className="profesionales_card col-md-3" key={index}>
                    <div className="profesionales_img_box">
                      <img
                        src={veterinario.imagen}
                        alt={veterinario.nombre}
                        className="service_image"
                      />
                    </div>
                    <div className="detail_box">
                      <h6>{veterinario.nombre}</h6>
                      <p>{veterinario.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfesionalesSection;

