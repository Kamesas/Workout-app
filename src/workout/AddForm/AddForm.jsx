import React, { Component } from "react";
import { connect } from "react-redux";
import { addValue } from "../../store/actions/actions";

class AddForm extends Component {
  state = {
    numberOfTimes: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newValue = this.state.numberOfTimes;
    this.props.addValue(newValue);
    this.setState({ numberOfTimes: "" });
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
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addValue: newValue => dispatch(addValue(newValue))
});

export default connect(
  null,
  mapDispatchToProps
)(AddForm);
