import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Input, Button } from "mdbreact";
import validator from "validator";

//Components
import { profileGet, profileUpdate } from "../../../Actions/AuthActions";
import isEmpty from "../../../Utils/isEmpty";

export class ProfileForm extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profileGet: PropTypes.func.isRequired,
    profileUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      _id: "",
      website: "",
      location: "",
      description: "",
      feedback: [],
      foundHandle: true,
      valueChange: false
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }

  componentDidMount() {
    let handle = this.props.auth.user.handle;
    if (!isEmpty(handle)) {
      this.props.profileGet(handle).then(result => {
        this.setState({ ...result.data.profile });
      });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.valueChange === true) {
      this.props.profileUpdate(this.state);
    }
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

    this.setState({ valueChange: true });
    console.log("value changed");
  }

  render() {
    let {
      errors,
      website,
      location,
      description,
      _id,
      valueChange
    } = this.state;
    const websiteErr = errors.website ? "invalid" : "";
    const locationErr = errors.location ? "invalid" : "";
    const descriptionErr = errors.description ? "invalid" : "";
    const alertError = !isEmpty(errors) ? "alert alert-danger" : "hidden";
    return (
      <Row>
        <Col md="6" className="mx-auto">
          <h5 className="my-2 h5 text-center">Edit Profile Details</h5>
          <form className="needs-validation" onSubmit={this.submitHandler}>
            <div className={alertError} role="alert">
              {errors.email ? errors.email : ""}
              {errors.password ? errors.password : ""}
            </div>
            <div className="grey-text">
              <input type="hidden" name="_id" value={_id} />
              <Input
                label="Website:"
                icon="globe"
                name="website"
                group
                type="text"
                validate
                value={validator.unescape(website)}
                success="right"
                onChange={this.updateDetails}
                required
                className={websiteErr}
              />

              <Input
                label="Location:"
                icon="map-marker"
                name="location"
                group
                type="text"
                validate
                value={validator.unescape(location)}
                success="right"
                onChange={this.updateDetails}
                required
                className={locationErr}
              />

              <Input
                label="Description:"
                icon="address-card-o"
                name="description"
                group
                type="text"
                validate
                value={validator.unescape(description)}
                success="right"
                onChange={this.updateDetails}
                required
                className={descriptionErr}
              />
            </div>
            <div className="text-center">
              <Button color="primary" type="submit" disabled={!valueChange}>
                Edit Profile
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  profileGet,
  profileUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
