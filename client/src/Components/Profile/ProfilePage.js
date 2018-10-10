import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import { profileGet } from "../../Actions/AuthActions";
import { isEmpty } from "../../Utils/UtilMethods";

export class ProfilePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profileGet: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      website: "",
      location: "",
      description: "",
      feedback: [],
      foundHandle: true
    };
  }

  componentDidMount() {
    let handle = this.props.match.params.handle;
    if (!isEmpty(handle)) {
      let result = this.props.profileGet(handle);
      console.log(result.data);
    }
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  profileGet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
