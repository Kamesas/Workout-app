import React, { Component } from "react";
import "./App.css";
import AddForm from "./AddForm/AddForm";
import LilstOfValues from "./ListOfValue/LilstOfValues";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Workout</h3>
        Alex
        <AddForm />
        <LilstOfValues />
      </div>
    );
  }
}

export default App;
