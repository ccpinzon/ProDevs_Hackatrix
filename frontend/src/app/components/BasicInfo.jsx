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
        <i className="fas fa-caret-down"></i>
        <h5 className="info_title">Información Básica</h5>
        <Form>
          <Form.Group controlId="user">
            <div className="row justify-content-center align-self-center">
              <div className="col-sm-3">
                <Form.Label>Servicio para: </Form.Label>
              </div>
              <div className="col-sm-9">
                <Form.Control as="select">
                  <option>Mí mismo</option>
                  <option>Hija - Andrea</option>
                  <option>Pareja - Sara</option>
                  <option>Amiga - Paola</option>
                </Form.Control>
              </div>
            </div>
          </Form.Group>

          <Form.Group controlId="service">
            <div className="row">
              <div className="col-sm-3">
                <Form.Label>Tipo de servicio: </Form.Label>
              </div>
              <div className="col-sm-9">
                <Form.Control as="select">
                  <option>Acompañamiento en ruta</option>
                  <option>Escolta</option>
                  <option>Vigilancia</option>
                </Form.Control>
              </div>
            </div>
          </Form.Group>
        </Form>
        <div className="row my-1">
          <div className="col-sm-3">
            <label htmlFor="date">¿Cuándo? </label>
          </div>
          <div className="col-sm-9">
            <DatePicker
              controlId="id"
              name="date"
              value={this.state.date}
              onChange={this.dateHandler}
            />
            <TimePicker onChange={this.timeHandler} value={this.state.time} />
          </div>
        </div>
        <div className="row my-1">
          <div className="col-sm-3">
            <label htmlFor="initial">Punto de inicio: </label>
          </div>
          <div className="col-sm-8">
            <Form.Control type="text" placeholder="Ej. CC. Américas" />
          </div>
          <div className="col-sm-1">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-sm-3">
            <label htmlFor="initial">Punto final: </label>
          </div>
          <div className="col-sm-8">
            <Form.Control type="text" placeholder="Ej. calle 26 #69a-20" />{" "}
          </div>
          <div className="col-sm-1">
            <i className="fas fa-search"></i>
          </div>
        </div>
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
