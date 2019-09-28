import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap/";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="light"
          variant="light"
          className="nav1 justify-content-between"
        >
          <div className="container">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="./images/icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {"   "}
              <span className="font-weight-bold">Escolt</span>App
            </Navbar.Brand>
            <Nav.Link className="ml-auto" id="services-link" href="/programmed">
              Servicios Programados
            </Nav.Link>
            <Nav.Link id="empresa" href="#">
              ¿Eres empresa?
            </Nav.Link>
          </div>
        </Navbar>
      </div>
    );
  }
}

export { Header };
