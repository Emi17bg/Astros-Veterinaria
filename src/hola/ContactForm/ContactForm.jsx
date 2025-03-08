import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Al enviar el formulario se previene el comportamiento por defecto y se muestra el modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-form-container">
      <h1>Contáctanos</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo Electrónico</label>
        <input
          type="email"
          id="correo"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          placeholder="Escribe tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Datos Ingresados</h2>
            <p>
              <strong>Nombre:</strong> {nombre}
            </p>
            <p>
              <strong>Correo Electrónico:</strong> {correo}
            </p>
            <p>
              <strong>Mensaje:</strong> {mensaje}
            </p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;





  
