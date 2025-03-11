import React from "react";
import './Services.css';
import 'boxicons';

const ServicesSection = () => {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h2 className="custom_heading">
              Servicios
            </h2>
            <div className="container layout_padding2">
              <div className="row justify-content-center">
                <ServiceCard 
                  icon="bx-plus-medical" 
                  title="Atención médica general" 
                  text="Chequeos de salud y tratamiento de enfermedades."
                />
                <ServiceCard 
                  icon="bx-pulse" 
                  title="Cirugía veterinaria" 
                  text="Esterilizaciones, castraciones, extracción de tumores y cirugías de emergencia."
                />
                <ServiceCard 
                  icon="bx-first-aid" 
                  title="Diagnóstico por imágenes" 
                  text="Radiografías, ecografías y análisis de laboratorio."
                />
                <ServiceCard 
                  icon="bx-shower" 
                  title="Peluquería y estética" 
                  text="Baños, cortes de pelo, limpieza de oídos y cuidado de uñas para el bienestar de las mascotas."
                />
                <ServiceCard 
                  icon="bx-home-heart" 
                  title="Hotel canino" 
                  text="Servicio de hospedaje cómodo y seguro, con atención y cuidado personalizado."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="col-md-3">
      <div className="img_box">
        <i className={`bx ${icon}`}></i> 
      </div>
      <div className="detail_box">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesSection;