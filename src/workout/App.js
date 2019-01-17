import React, { Component } from "react";
import "./App.css";
import AddForm from "./AddForm/AddForm";
import LilstOfValues from "./ListOfValue/LilstOfValues";
import { fire } from "../config/fbConfig";
import Login from "./Login/Login";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div className="App">
        <h3>Workout</h3>
        {this.state.user ? (
          <div>
            Alex
            <button onClick={this.logout}>Logout</button>
            <AddForm />
            <LilstOfValues />
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
