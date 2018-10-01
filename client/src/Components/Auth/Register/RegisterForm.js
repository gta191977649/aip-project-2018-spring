import React, { Component } from "react";
import { Input, Button } from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
import validateInput from '../../../Utils/RegisterInputValidator';
import PropTypes from "prop-types";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      name: "",
      email: "",
      confirm: "",
      password: "",
      isLoading: false,
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props
        .userRegister(this.state)
        .then(
          res => {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have sucessfully signed up, now redirecting!'
            }); 
            this.props.history.push('/verify', { auth: res.data}); 
          },
          err => { this.setState({ errors: {message: err.response.data.error.message}, isLoading: false }); }
        );
    }
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: validator.escape(event.target.value)
    });
  }

  isValid(){
    const {errors, isValid } = validateInput(this.state);
    if (!isValid){
      this.setState({ errors });
    }
    return isValid;
  }


  render() {
    const { errors, name, email, confirm, password, isLoading } = this.state;
    const nameErrorClass = errors.name ? "invalid" : "";
    const emailErrorClass = errors.email ? "invalid" : "";
    const confirmErrorClass = errors.confirm ? "invalid" : "";
    const passErrorClass = errors.password ? "invalid" : "";
    const alertError = errors.message ? "alert alert-danger" : "hidden";
    return (
      <form className="needs-validation" onSubmit={this.submitHandler}>
        <p className="display-4 h5 text-center mb-4">Sign up</p>
        <div className={alertError} role="alert">
          {errors.message}
        </div>
        <div className="grey-text">
          <Input
            label="Your name"
            name="name"
            icon="user"
            group
            type="text"
            validate
            error={errors.name}
            value={name}
            onChange={this.updateDetails}
            className={nameErrorClass}
          />
          <Input
            label="Your email"
            icon="envelope"
            name="email"
            group
            type="email"
            validate
            error={errors.email}
            value={email}
            onChange={this.updateDetails}
            className={emailErrorClass}
          />
          <Input
            label="Confirm your email"
            icon="exclamation-triangle"
            name="confirm"
            group
            type="text"
            validate
            error={errors.confirm}
            value={confirm}
            onChange={this.updateDetails}
            className={confirmErrorClass}
          />
          <Input
            label="Your password"
            icon="lock"
            group
            type="password"
            name="password"
            validate
            error={errors.password}
            value={password}
            onChange={this.updateDetails}
            className={passErrorClass}
          />
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
    );
  }
}

RegisterForm.propTypes = {
  userRegister: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
export default withRouter(RegisterForm);
