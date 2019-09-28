import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

class Summary extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>Distancia: 10km</ListGroup.Item>
        <ListGroup.Item>Tiempo estimado: 45 minutos</ListGroup.Item>
        <ListGroup.Item>Valor por distancia: $38.000</ListGroup.Item>
        <ListGroup.Item>Valor por tiempo $10.000</ListGroup.Item>
        <ListGroup.Item>Descuento: $8.000 (cupon 1 vez)</ListGroup.Item>
        <br />
        <ListGroup variant="flush">
          <ListGroup.Item variant="success">Total: $40.000</ListGroup.Item>
          <form>
            <Form.Group controlId="user">
              <Form.Label>Medio de pago: </Form.Label>
              <Form.Control as="select">
                <option>Efectivo</option>
                <option>Tarjeta</option>
                <option>PayPal</option>
              </Form.Control>
            </Form.Group>
          </form>
        </ListGroup>
      </ListGroup>
    );
  }
}

export { Summary };
