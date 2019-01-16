import React, { Component } from "react";
import { connect } from "react-redux";
import { addValue, isToday } from "../../store/actions/actions";

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

    const newValue = {
      numberOfTimes: this.state.numberOfTimes,
      date: this.props.getMoment.format("D MM YYYY"),
      time: this.props.getMoment.format("h:mm:ss")
    };
    this.props.addValue(newValue);
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
    getMoment: state.getMoment
  };
};

const mapDispatchToProps = dispatch => ({
  addValue: newValue => dispatch(addValue(newValue)),
  isToday: () => dispatch(isToday())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
