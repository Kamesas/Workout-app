import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchValues, fetchAllValues } from "../../store/actions/actions.js";
import _ from "lodash";

class ListOfValues extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    this.props.fetchAllValues();

    if (this.props.auth.uid) {
      this.props.fetchValues(this.props.auth.uid);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth.uid !== this.props.auth.uid) {
      this.componentDidMount();
    }
  }

  listPersons = () => {
    return _.map(this.props.allValues, (value, i) => (
      <li key={i} id={i} onClick={() => this.setState({ person: i })}>
        {i}
        {console.log(_.map(value[1], (value, i) => value))};
      </li>
    ));
  };

  render() {
    // console.log(this.props.auth.uid);

    const { person } = this.state;

    return (
      <div>
        {this.listPersons()}
        <ul>
          {this.props.values &&
            _.map(this.props.values, (value, i) => (
              <li key={i} id={i}>
                {value.numberOfTimes}
              </li>
            ))}
          <hr />
          <p>User - 2</p>
          {this.props.allValues &&
            _.map(this.props.allValues[person], (value, i) => (
              <li key={i} id={i}>
                {value.numberOfTimes}
                ---
                {value.setChild}
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
    allValues: state.allValues,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchValues: uid => dispatch(fetchValues(uid)),
  fetchAllValues: () => dispatch(fetchAllValues())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfValues);
