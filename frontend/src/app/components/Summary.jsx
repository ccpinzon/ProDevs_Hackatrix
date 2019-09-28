import React, { Component } from "react";
import { ListGroup } from "react-bootstrap/ListGroup";

class Summary extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>Distancia: 10km</ListGroup.Item>
        <ListGroup.Item>Tiempo estimado: 45 minutos</ListGroup.Item>
        <ListGroup.Item>Valor por diatncia: $38.000</ListGroup.Item>
        <ListGroup.Item>Valor por tiempo $10.000</ListGroup.Item>
        <ListGroup.Item>Descuento: 8.000 (cupon 1 vez)</ListGroup.Item>
        <br />
        <ListGroup variant="flush">
          <ListGroup.Item variant="success">Total:40.000</ListGroup.Item>
          <ListGroup.Item variant="warning">Medio de pago</ListGroup.Item>
        </ListGroup>
      </ListGroup>
    );
  }
}

export { Summary };
