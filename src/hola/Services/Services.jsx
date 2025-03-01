import React from "react";
import './Services.css';
import petCareImg from "../../assets/AboutUs.png";
import petHotelImg from "../../assets/AboutUs.png";
import emergencyImg from "../../assets/AboutUs.png";

const ServicesSection = () => {
  return (
    <section className="service_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="custom_heading">
              Our <span>Services</span>
            </h2>
            <div className="container layout_padding2">
              <div className="row justify-content-center">
                <ServiceCard 
                  image={petCareImg} 
                  title="Pet Care" 
                  text="We provide top-notch care for your beloved pets, ensuring their health and happiness."
                />
                <ServiceCard 
                  image={petHotelImg} 
                  title="Pet Hotel" 
                  text="A luxurious and comfortable stay for your pets while you are away."
                />
                <ServiceCard 
                  image={emergencyImg} 
                  title="Emergency" 
                  text="24/7 emergency services to take care of your pet in critical situations."
                />
                <ServiceCard 
                  image={emergencyImg} 
                  title="Emergency" 
                  text="24/7 emergency services to take care of your pet in critical situations."
                />
                <ServiceCard 
                  image={emergencyImg} 
                  title="Emergency" 
                  text="24/7 emergency services to take care of your pet in critical situations."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="col-md-3">
      <div className="img_box">
        <img src={image} alt={title} />
      </div>
      <div className="detail_box">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesSection;
