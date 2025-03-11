import { useState } from "react";
import { Form, Button, Modal, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormWithModal() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg border-0" style={{ width: "30rem", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escriba su mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-2"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              style={{
                backgroundColor: "#81ad45",
                borderColor: "#81ad45",
                padding: "10px 30px",
                fontSize: "16px",
                borderRadius: "5px"
              }}
              className="text-white"
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Card>

      {/* Modal con datos ingresados */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#81ad45", color: "white", borderRadius: "5px 5px 0 0" }}
        >
          <Modal.Title>Datos ingresados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nombre:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Mensaje:</strong> {formData.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#81ad45",
              borderColor: "#81ad45",
              borderRadius: "5px"
            }}
            className="text-white"
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default FormWithModal;








  
