import React, { Component } from "react";
import "./sass/main.scss";
import { BasicInfo } from "./components/BasicInfo";
import { Header } from "./components/Header";
import { Preferences } from "./components/Preferences";

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
            <Preferences />
          </div>
          <div className="col-xl-5"></div>
        </div>
      </div>
    );
  }
}

export default App;
