import React, { Component } from "react";
import { Input, Button } from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
import validateInput from "../../../Utils/LoginInputValidator";
import PropTypes from 'prop-types';

export class LoginForm extends Component {
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

  submitHandler(event) {
    event.preventDefault();
    if(this.isValid()){
      this.setState({ errors: {}, isLoading: true });

      this.props.userLogin(this.state);
      this.setState({isLoading: false });
      this.props.history.push('/'); 
      this.props.addFlashMessage({
        type: 'success',
        text: 'Logged in!'
      });
    }
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: validator.escape(event.target.value)
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors, email, password } = this.state;
    const emailErrorClass = errors.email ? "invalid" : "";
    const passErrorClass = errors.password ? "invalid" : "";
    const alertError = errors.message ? "alert alert-danger" : "hidden";
    return (
      <form className="needs-validation" onSubmit={this.submitHandler}>
        <p className="display-4 h5 text-center mb-4">Sign in</p>
        <div className={alertError} role="alert">
          {errors.message} - Invalid Credentials
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
            error={errors.email}
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
            errors={errors.password}
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
    );
  }
}

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default withRouter(LoginForm);
