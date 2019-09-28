import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
const axios = require('axios');



class Summary extends Component {
  constructor(props) {
    super();
    this.state = {
      payMethods: [],
      sumaryInfo: {}
    };
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })
  }

  async  componentDidMount(){

    // await this.getUserData();
    await this.getSummary();
    // console.log("inicia");
    //
    // console.log(this.state.activeServices);
  }

  async getSummary(){
    await axios.get(`http://us-central1-sentiments-co.cloudfunctions.net/dataEscoltApp?data=summary`)
      .then(jsonResp => {
        var ret = jsonResp.data.data;
        // console.log(ret)
        this.setState({sumaryInfo:ret})
      });
  }

  render() {
    return (
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item>Distancia: {this.state.sumaryInfo.distance}</ListGroup.Item>
          <ListGroup.Item>Tiempo estimado: {this.state.sumaryInfo.estimatedTime}</ListGroup.Item>
          <ListGroup.Item>Valor por distancia:  {new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(this.state.sumaryInfo.distanceValue)}</ListGroup.Item>
          <ListGroup.Item>Valor por tiempo:  {new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(this.state.sumaryInfo.timeValue)}</ListGroup.Item>
          <ListGroup.Item>Descuento:  {new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(this.state.sumaryInfo.discount)} (cupon 1 vez)</ListGroup.Item>
          <br />
          <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total: {new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(this.state.sumaryInfo.invoiceValue)}</ListGroup.Item>
            <form>
              <Form.Group controlId="user">
                <Form.Label className="my-2">Medio de pago: </Form.Label>
                <Form.Control as="select">
                  <option>Efectivo</option>
                  <option>
                    Tarjeta de Credito (Visa XXXXXXXXXXX456)
                  </option>
                  <option>Tarjeta de Credito (Visa XXXXXXXXXXX321)</option>
                  <option>PayPal (dguti25@gmail.com)</option>
                </Form.Control>
              </Form.Group>
            </form>
          </ListGroup>
        </ListGroup>
      </div>
    );
  }
}

export { Summary };
