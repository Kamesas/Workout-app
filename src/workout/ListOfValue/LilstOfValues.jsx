import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchValues } from "../../store/actions/actions.js";
import _ from "lodash";

class ListOfValues extends Component {
  state = {};

  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.fetchValues(this.props.auth.uid);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth.uid !== this.props.auth.uid) {
      this.componentDidMount();
    }
  }

  render() {
    //console.log(this.props.auth.uid);

    return (
      <div>
        <ul>
          {this.props.values &&
            _.map(this.props.values, (value, i) => (
              <li key={i} id={i}>
                {value.numberOfTimes}
                {`---- ${value.setChild} + ${this.props.auth.uid}`}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.values,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchValues: uid => dispatch(fetchValues(uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfValues);
