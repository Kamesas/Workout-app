import React, { Component } from "react";
import { connect } from "react-redux";
import { addValue, addUserValue, isToday } from "../../store/actions/actions";

class AddForm extends Component {
  state = {
    numberOfTimes: "",
    date: "",
    time: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.isToday();

    const email = this.props.auth.email.toLowerCase().replace(/\./g, ",");
    console.log("email", email);

    const newValue = {
      //setChild: this.props.auth.uid,
      setChild: email,
      numberOfTimes: this.state.numberOfTimes,
      date: this.props.getMoment.format("D MM YYYY"),
      time: this.props.getMoment.format("H:mm:ss")
    };

    this.state.numberOfTimes !== ""
      ? this.props.addUserValue(newValue)
      : alert("Введи число!");
    this.setState({ numberOfTimes: "", date: "", time: "" });
  };

  render() {
    const { numberOfTimes } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="numberOfTimes"
          value={numberOfTimes}
          onChange={this.handleChange}
          placeholder="введи кол-во посторений"
        />
        <button onClick={this.handleSubmit}>Добавить</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    getMoment: state.getMoment,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  addValue: newValue => dispatch(addValue(newValue)),
  addUserValue: newValue => dispatch(addUserValue(newValue)),
  isToday: () => dispatch(isToday())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
