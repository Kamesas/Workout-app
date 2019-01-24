import React, { Component } from "react";
import { fire } from "../../config/fbConfig";

class Login extends Component {
  state = { email: "", password: "", userName: "5555" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
        const user = fire.auth().currentUser;
        user.updateProfile({ displayName: this.state.userName }).then(
          function() {
            // Update successful.
          },
          function(error) {
            // An error happened.
          }
        );
      })
      // .then(u => {
      //   console.log(u);
      //   var user = fire.auth().currentUser;

      //   user
      //     .sendEmailVerification()
      //     .then(function() {
      //       console.log("email send");
      //     })
      //     .catch(function(error) {
      //       console.log("email not send !!!!");
      //     });
      // })
      .catch(error => {
        if (
          error.message ===
          "The email address is already in use by another account."
        ) {
          alert("Этот имейл уже используется !");
        } else {
          alert("Ошибка !");
          console.log(error.message);
        }
      });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
