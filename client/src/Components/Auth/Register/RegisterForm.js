import React, { Component } from "react";
import { Input, Button } from "mdbreact";
import { Link } from "react-router-dom";
import validator from "validator";
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
      isLoading: false
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.valid) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userRegister(this.state);
    }

    console.log(this.props.result);
  };

  updateDetails(event) {
    if (this.isValid(event.target)) {
      this.setState({
        [event.target.name]: validator.escape(event.target.value)
      });
    }
  }

  isValid(target) {
    if (target != null) {
      let value = validator.escape(target.value);

      switch (target.name) {
        case "username":
          return validator.isEmail("" + validator.escape(value));
        case "password":
          return validator.isLength(validator.escape(value), {
            min: 8,
            max: 24
          });

        case "confirm":
          let emailIsValid = validator.isEmail(value);
          return validator.equals(value, this.state.username) && emailIsValid;

        case "name":
          return validator.isAlphanumeric(value);

        default:
          return false;
      }
    } else {
      return false;
    }
  }

  render() {
    const { errors, name, email, confirm, password, isLoading } = this.state;
    return (
      <form
        className="needs-validation"
        onSubmit={this.submitHandler}
        noValidate
      >
        <p className="display-4 h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <Input
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error={errors.name}
            success="right"
            value={name}
            onChange={this.updateDetails}
          />
          <Input
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error={errors.email}
            success="right"
            value={email}
            onChange={this.updateDetails}
          />
          <Input
            label="Confirm your email"
            icon="exclamation-triangle"
            group
            type="text"
            validate
            error={errors.confirm}
            success="right"
            value={confirm}
            onChange={this.updateDetails}
          />
          <Input
            label="Your password"
            icon="lock"
            group
            type="password"
            validate
            error={errors.password}
            value={password}
            onChange={this.updateDetails("password")}
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
  userRegister: PropTypes.func.isRequire
};

export default (RegisterForm);
