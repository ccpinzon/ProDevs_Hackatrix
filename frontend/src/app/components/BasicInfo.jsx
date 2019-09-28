import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

class BasicInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
      time: "10:00"
    };
  }

  dateHandler = date => {
    this.setState({
      date
    });
  };

  timeHandler = time => {
    this.setState({
      time
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="user">
            <Form.Label>Servicio para: </Form.Label>
            <Form.Control as="select">
              <option>Mí mismo</option>
              <option>Hija - Andrea</option>
              <option>Pareja - Sara</option>
              <option>Amiga - Paola</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="service">
            <Form.Label>Tipo de servicio: </Form.Label>
            <Form.Control as="select">
              <option>Acompañamiento en ruta</option>
              <option>Escolta</option>
              <option>Vigilancia</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <label htmlFor="date">¿Cuándo? </label>
        <DatePicker
          controlId="id"
          name="date"
          value={this.state.date}
          onChange={this.dateHandler}
        />
        <TimePicker onChange={this.timeHandler} value={this.state.time} />
        <label htmlFor="initial">Punto de inicio: </label>
        <Form.Control type="text" placeholder="Ej. CC. Américas" />{" "}
        <i className="fas fa-search"></i>
        <label htmlFor="initial">Punto final: </label>
        <Form.Control type="text" placeholder="Ej. calle 26 #69a-20" />{" "}
        <i className="fas fa-search"></i>
        <Form.Group controlId="user">
          <Row className="align-middle">
            <Col sm={2}>
              <Form.Label>Recorrido </Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control as="select">
                <option>Sólo ida</option>
                <option>Ida y vuelta</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </div>
    );
  }
}

export { BasicInfo };
