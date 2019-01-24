import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchValues,
  fetchAllValues,
  signOut
} from "../../store/actions/actions.js";
import _ from "lodash";

class ListOfValues extends Component {
  state = {
    person: null
  };

  escapeEmailAddress = email => {
    if (!email) return false;

    // Replace '.' (not allowed in a Firebase key) with ',' (not allowed in an email address)
    email = email.toLowerCase();
    email = email.replace(/\./g, ",");
    return email;
  };

  componentDidMount() {
    ///this.props.auth.emailVerified && this.props.fetchAllValues();
    this.props.fetchAllValues();

    //const email = this.props.auth.email.toLowerCase().replace(/\./g, ",");

    if (this.escapeEmailAddress(this.props.auth.email)) {
      this.props.fetchValues(this.escapeEmailAddress(this.props.auth.email));
    }
    // if (this.props.auth.uid && this.props.auth.emailVerified) {
    //   this.props.fetchValues(this.props.auth.uid);
    // } else {
    //   alert("Подтвердите свой email !");
    //   this.props.signOut();
    // }
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
        {/* console.log(_.map(value[1], (value, i) => value)) */};
      </li>
    ));
  };

  render() {
    const { person } = this.state;
    console.log(this.props.allValues[person]);

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
  fetchAllValues: () => dispatch(fetchAllValues()),
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfValues);
