import React, { Component } from "react";
import "./sass/main.scss";
import { BasicInfo } from "./components/BasicInfo";
import { Header } from "./components/Header";
import { Preferences } from "./components/Preferences";
import { Summary } from "./components/Summary";
import { Observations } from "./components/Observations";
import { Map } from "./components/Map";

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
            <div className="container">
              <BasicInfo />
              <Preferences />
              <Observations />
            </div>
          </div>
          <div className="col-xl-5">
            <div className="container">
              <Map />
              <Summary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
