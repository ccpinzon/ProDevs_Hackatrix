import React, { Component } from "react";
import { ListGroup, Form } from "react-bootstrap";

class Summary extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>Distancia: 10km</ListGroup.Item>
        <ListGroup.Item>Tiempo estimado: 45 minutos</ListGroup.Item>
        <ListGroup.Item>Valor por distancia: $38.000</ListGroup.Item>
        <ListGroup.Item>Valor por tiempo $10.000</ListGroup.Item>
        <ListGroup.Item>Descuento: 8.000 (cupon 1 vez)</ListGroup.Item>
        <ListGroup.Item variant="success">Total:40.000</ListGroup.Item>
        <ListGroup.Item>
          <Form.Group controlId="user">
            <Form.Label htm>Medio de pago </Form.Label>
            <Form.Control as="select">
              <option>Efectivo</option>
              <option>Tarjeta</option>
              <option>PayPal</option>
            </Form.Control>
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export { Summary };
