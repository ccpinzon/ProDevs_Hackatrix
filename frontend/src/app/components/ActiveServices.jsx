import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

const axios = require("axios");

class ActiveService extends Component {
  constructor(props) {
    super();
    this.state = {
      activeServices: [],
      userData: {}
    };
  }

  async componentDidMount() {
    await this.getUserData();
    await this.getActiveServices();
    console.log("inicia");

    console.log(this.state.activeServices);
  }

  async getActiveServices() {
    await axios
      .get(
        `http://us-central1-sentiments-co.cloudfunctions.net/dataEscoltApp?data=activeServices`
      )
      .then(jsonResp => {
        const ret = jsonResp.data;
        this.setState({ activeServices: ret.data });
      });
  }

  async getUserData() {
    await axios
      .get(
        `http://us-central1-sentiments-co.cloudfunctions.net/dataEscoltApp?data=all`
      )
      .then(jsonResp => {
        const ret = jsonResp.data;
        this.setState({ userData: ret });
      });
  }

  render() {
    return (
      <div>
        <div className="row m-5">
          <div className="col-md-2">
            <img
              src="https://maljikakamra.com/admin/control/images/user.png"
              width="100px"
              height="100px"
              className=" img-circle"
            ></img>
          </div>
          <div className="col-md">
            <h3>{this.state.userData.userName}</h3>
            <h5 className="muted-text">{this.state.userData.email}</h5>
            <p>
              <a href="artist.external_urls.spotify" target="_blank">
                Ver
              </a>
            </p>
          </div>
          <div className="col-md-4 text-right">
            <button className="btn btn-outline-primary" name="button">
              Regresar
            </button>
          </div>
        </div>
        <div className="row m-5">
          <h4>Servicios Programados</h4>

          {this.state.activeServices.map(service => (
            <div className="col-md-12 card my-1">
              {service.descType}
              <br></br>
              {service.serviceDate}
              <br></br>
              {service.serviceObservation}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { ActiveService };
