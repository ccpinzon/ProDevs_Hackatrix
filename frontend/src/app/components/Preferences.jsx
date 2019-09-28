import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

class Preferences extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-1">
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="col-sm-3">
            <h5 id="title-preferencies">Preferencias</h5>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="weapon"
                />
                <label className="custom-control-label" htmlFor="weapon">
                  Arma
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <Form.Group controlId="weaponType">
                <div className="row">
                  <div className="col-sm-6">
                    <Form.Label>Tipo de armas: </Form.Label>
                  </div>
                  <div className="col-sm-6">
                    <Form.Control as="select">
                      <option>No letales</option>
                      <option>Fuego</option>
                    </Form.Control>
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>
          <Form>
            <Row>
              <Col sm={2}>
                <label htmlFor="quantity">Cantidad escoltas</label>
              </Col>
              <Col sm={6}>
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
              <Row className="mt-2">
                <Col sm={2}>
                  <Form.Label>Vehículo: </Form.Label>
                </Col>
                <Col sm={6}>
                  <Form.Control as="select">
                    <option>Sin Vehículo</option>
                    <option>Moto</option>
                    <option>Carro</option>
                    <option>Bicicleta</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="level">
              <Row>
                <Col sm={2}>
                  <Form.Label>Experiencia: </Form.Label>
                </Col>
                <Col sm={6}>
                  <Form.Control as="select">
                    <option>Principiante</option>
                    <option>Medio</option>
                    <option>Experto</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </form>
      </div>
    );
  }
}

export { Preferences };
