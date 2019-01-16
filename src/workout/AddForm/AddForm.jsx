import React, { Component } from "react";

class AddForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="text" placeholder="введи кол-во посторений" />
        <button>Add</button>
      </div>
    );
  }
}

export default AddForm;
