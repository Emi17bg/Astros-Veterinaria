import React, { useState } from 'react';
import './Carrousel.css';
import Care from '../../assets/Carrousel/Cuidado.png';
import Emergency from '../../assets/Carrousel/Emergencia.png';
import Adoptions from '../../assets/Carrousel/Adopcion.png';
import Test from '../../assets/Carrousel/Family.png';

const SliderSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4); 
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4); 
  };

  const slides = [
    {
      title: 'Cuidado Médico de Calidad para tu Mascota',
      description: 'Ofrecemos servicios veterinarios completos, desde chequeos rutinarios hasta cirugías avanzadas. ¡Tu mascota está en buenas manos!',
      imgSrc: Care,
    },
    {
      title: 'Emergencias 24/7',
      description: 'Estamos disponibles las 24 horas del día, los 7 días de la semana, para cualquier emergencia que pueda surgir. ¡Tu mascota siempre tendrá atención inmediata!',
      imgSrc: Emergency,
    },
    {
      title: 'Adopta y Cambia una Vida',
      description: 'Descubre a nuestros adorables amigos que buscan un hogar. ¡Ven y encuentra a tu nuevo mejor amigo hoy mismo!',
      imgSrc: Adoptions,
    },
    {
      title: 'Historias Felices',
      description: 'Lee las experiencias de nuestros clientes satisfechos y sus mascotas felices. ¡Tu testimonio podría ser el próximo!',
      imgSrc: Test,
    },
  ];

  return (
    <section className="slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={activeIndex === index ? 'active' : ''}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 offset-md-2">
                    <div className="slider_detail-box">
                      <h1 style={{ color: 'black' }}>
                        {slide.title}
                      </h1>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="slider_img-box">
                      <img src={slide.imgSrc} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
};

export default SliderSection;