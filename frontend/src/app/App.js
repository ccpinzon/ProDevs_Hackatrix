import React, { Component } from "react";
import "./sass/main.scss";
import { BasicInfo } from "./components/BasicInfo";
import { Header } from "./components/Header";
import { Preferences } from "./components/Preferences";
import { Summary } from "./components/Summary";

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
          <div className="col-xl-5">
            <div className="container" styles="height: 300px;">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
