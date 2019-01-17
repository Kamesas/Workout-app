import React, { Component } from "react";
import "./App.css";
import AddForm from "./AddForm/AddForm";
import LilstOfValues from "./ListOfValue/LilstOfValues";

class App extends Component {
  state = {
    user: null
  };
  render() {
    return (
      <div className="App">
        <h3>Workout</h3>
        <div>
          Alex
          <AddForm />
          <LilstOfValues />
        </div>
      </div>
    );
  }
}

export default App;
