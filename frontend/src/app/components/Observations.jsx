import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Observations extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="observations">
            <Form.Label>Anotaciones para el escolta</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export { Observations };
