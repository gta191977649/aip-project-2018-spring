import React, { Component } from "react";
import { Container, Row, Col, Input, Button, toast } from "mdbreact";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import validator from "validator";

import isEmpty from "../../../Utils/isEmpty";
import { userRegister } from "../../../Actions/AuthActions";

export class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      fname: "",
      lname: "",
      username: "",
      email: "",
      confirm: "",
      password: "",
      passwordConfirm: "",
      isLoading: false
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.message) {
        toast.error(nextProps.errors.message);
      }
      this.setState({ errors: nextProps.errors });
    }
  }
  submitHandler(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userRegister(this.state, this.props.history);
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
  render() {
    //Get the vars from the state (deconstruct)
    const {
      errors,
      username,
      fname,
      lname,
      email,
      confirm,
      password,
      passwordConfirm,
      isLoading
    } = this.state;

    //Check to see if there are any input errors
    const fnameErrorClass = errors.fname ? "invalid" : "";
    const lnameErrorClass = errors.lname ? "invalid" : "";
    const emailErrorClass = errors.email ? "invalid" : "";
    const confirmErrorClass = errors.confirm ? "invalid" : "";
    const passErrorClass = errors.password ? "invalid" : "";
    const passConfErrorClass = errors.passwordConfirm ? "invalid" : "";
    const usernameErrorClass = errors.username ? "invalid" : "";

    ///Check to see if there is any errors
    const alertError = !isEmpty(errors) ? "alert alert-danger" : "hidden";

    //Error Displays
    let printErrors = !isEmpty(errors)
      ? Object.values(errors).map((error, index) => (
          <>
            <span key={index}>{error}</span>
            <br />
          </>
        ))
      : "";
    return (
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md="6" className="mx-auto">
            <form className="needs-validation" onSubmit={this.submitHandler}>
              <p className="display-4 h5 text-center mb-4">Sign up</p>
              <div className={alertError} role="alert">
                {printErrors}
              </div>
              <div className="grey-text">
                <Input
                  label="Pick a username/handle"
                  name="username"
                  icon="user"
                  group
                  type="text"
                  validate
                  value={username}
                  onChange={this.updateDetails}
                  className={usernameErrorClass}
                />
                <Row>
                  <Col md="6">
                    <Input
                      label="Your first name"
                      name="fname"
                      icon="user"
                      group
                      type="text"
                      validate
                      value={fname}
                      onChange={this.updateDetails}
                      className={fnameErrorClass}
                    />
                  </Col>
                  <Col md="6">
                    <Input
                      label="Your last name"
                      name="lname"
                      icon="user"
                      group
                      type="text"
                      validate
                      value={lname}
                      onChange={this.updateDetails}
                      className={lnameErrorClass}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Input
                      label="Your email"
                      icon="envelope"
                      name="email"
                      group
                      type="email"
                      validate
                      value={email}
                      onChange={this.updateDetails}
                      className={emailErrorClass}
                    />
                  </Col>
                  <Col md="6">
                    <Input
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      name="confirm"
                      group
                      type="text"
                      validate
                      value={confirm}
                      onChange={this.updateDetails}
                      className={confirmErrorClass}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Input
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      validate
                      value={password}
                      onChange={this.updateDetails}
                      className={passErrorClass || passConfErrorClass}
                    />
                  </Col>
                  <Col md="6">
                    <Input
                      label="Confirm your password"
                      icon="lock"
                      group
                      type="password"
                      name="passwordConfirm"
                      validate
                      value={passwordConfirm}
                      onChange={this.updateDetails}
                      className={passConfErrorClass}
                    />
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Button color="primary" type="submit" disabled={isLoading}>
                  Register
                </Button>
              </div>
              <br />
              <hr />
              <div className="text-center">
                <Link to="/login">Click here to Login</Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  userRegister: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  userRegister
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPage)
);
