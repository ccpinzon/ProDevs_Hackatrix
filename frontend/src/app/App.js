import React, { Component } from "react";
import "./sass/main.scss";
import { BasicInfo } from "./components/BasicInfo";
import { Header } from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-md-7">
            <BasicInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
