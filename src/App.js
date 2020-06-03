import React, { Component } from "react";
import Display from "./Components/display";
import Forlder from "./Components/folder";
import "./App.css";

class App extends Component {
  render() {
    return (
        <>
          <Display />
          <Forlder />
        </>
    );
  }
}

export default App;
