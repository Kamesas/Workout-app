import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchValues } from "../../store/actions/actions.js";
import _ from "lodash";

class ListOfValues extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchValues();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.values &&
            _.map(this.props.values, (value, i) => (
              <li key={i} id={i}>
                {value.numberOfTimes}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.values
  };
};

const mapDispatchToProps = dispatch => ({
  fetchValues: () => dispatch(fetchValues())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfValues);
