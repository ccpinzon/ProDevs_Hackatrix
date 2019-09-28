import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

class Preferences extends Component {
  render() {
    return (
      <div>
        <i class="fas fa-caret-down"></i>
        <h5>Preferencias</h5>
        <form>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="weapon" />
            <label class="custom-control-label" for="weapon">
              Arma
            </label>
          </div>
          <Form.Group controlId="weaponType">
            <Form.Label>Tipo de armas: </Form.Label>
            <Form.Control as="select">
              <option>No letales</option>
              <option>Fuego</option>
            </Form.Control>
          </Form.Group>
          <Form>
            <Row>
              <Col>
                <label htmlFor="quantity">Cantidad escoltas</label>
              </Col>
              <Col>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  min="1"
                  max="10"
                ></input>
              </Col>
            </Row>
            <Form.Group controlId="vehicle">
              <Form.Label>Vehículo: </Form.Label>
              <Form.Control as="select">
                <option>Sin Vehículo</option>
                <option>Moto</option>
                <option>Carro</option>
                <option>Bicicleta</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="level">
              <Form.Label>Experiencia: </Form.Label>
              <Form.Control as="select">
                <option>Principiante</option>
                <option>Medio</option>
                <option>Experto</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </form>
      </div>
    );
  }
}

export { Preferences };
