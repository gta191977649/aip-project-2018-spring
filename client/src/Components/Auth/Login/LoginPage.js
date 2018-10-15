import React, { Component } from "react";
import { Container, Row, Col, Input, Button } from "mdbreact";
import validator from "validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

import { userLogin } from "../../../Actions/AuthActions";
import isEmpty from "../../../Utils/isEmpty";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      email: "",
      password: "",
      isLoading: true
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  submitHandler(event) {
    event.preventDefault();

    this.setState({ errors: {}, isLoading: true });
    this.props.userLogin(this.state, this.props.history);
    this.setState({ isLoading: false });
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: validator.escape(event.target.value)
    });
  }
  componentDidMount() {
    if (this.props.auth.isLoggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  writeConsole(test) {
    console.log(...test);
  }
  render() {
    //Deconstruct the state
    const { errors, email, password } = this.state;

    //Check to see if there are any input errors
    const emailErrorClass = errors.email ? "invalid" : "";
    const passErrorClass = errors.password ? "invalid" : "";

    //Check to see if there is any errors
    const alertError = !isEmpty(errors) ? "alert alert-danger" : "hidden";

    // Prepare the errors for display
    const errorMessage = errors.message ? errors.message + "\r\n" : "";
    const emailError = errors.email ? errors.email + "\r\n" : "";
    const passwordError = errors.password ? errors.password : "";

    return (
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md="6" className="mx-auto">
            <form className="needs-validation" onSubmit={this.submitHandler}>
              <p className="display-4 h5 text-center mb-4">Sign in</p>
              <div className={alertError} role="alert">
                {errorMessage}
                {emailError}
                {passwordError}
              </div>
              <div className="grey-text">
                <Input
                  label="Type your email"
                  icon="envelope"
                  name="email"
                  group
                  type="email"
                  validate
                  value={email}
                  success="right"
                  onChange={this.updateDetails}
                  required
                  className={emailErrorClass}
                />
                <Input
                  label="Type your password"
                  icon="lock"
                  name="password"
                  group
                  type="password"
                  value={password}
                  validate
                  onChange={this.updateDetails}
                  required
                  className={passErrorClass}
                />
              </div>
              <div className="text-center">
                <Button color="primary" type="submit">
                  Login
                </Button>
              </div>
              <br />
              <hr />
              <div className="text-center">
                <Link to="/register">Click here to register</Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
const mapDispatchToProps = {
  userLogin
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
