import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap/";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Navbar.Brand href="#home">
            <span className="font-weight-bold">Ecolt</span>App
          </Navbar.Brand>
          <Nav.Link href="#">¿Eres empresa?</Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export { Header };
