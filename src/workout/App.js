import React, { Component } from "react";
import "./App.css";
import AddForm from "./AddForm/AddForm";
import LilstOfValues from "./ListOfValue/LilstOfValues";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { fetchUser, signOut } from "../store/actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  logout = () => {
    this.props.signOut();
  };

  render() {
    // console.log(this.props.auth);
    return (
      <div className="App">
        <h3>Workout</h3>
        {this.props.auth ? (
          <div>
            {this.props.auth.email}
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

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
