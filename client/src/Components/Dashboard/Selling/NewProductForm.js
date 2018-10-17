import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Input, Button, toast, Fa } from "mdbreact";
import Axios from "axios";

import { newProduct } from "../../../Actions/ProductActions";
import { CATEGORIES } from "../../../Utils/Constants";
import isEmpty from "../../../Utils/isEmpty";
import formatMoney from "../../../Utils/formatMoney";
import slugify from "../../../Utils/slugify";

export class NewProductForm extends Component {
  static propTypes = {
    newProduct: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    let initialState = {
      name: "",
      category: "",
      price: "1",
      image: {},
      description: "",
      qty: "1"
    };

    this.state = {
      ...initialState,
      errors: {},
      isLoading: true
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.message) {
        toast.error(nextProps.errors.message);
      }
      this.setState({ errors: nextProps.errors });
    }
  }

  async submitHandler(event) {
    event.preventDefault();

    console.log("submitted");
    this.setState({ isLoading: true });

    //Deconstruct this components state
    const { name, category, price, image, description, qty } = this.state;

    //Create formData object to parse to redux action
    const formData = new FormData();

    //Append Data from component's form.
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image, image.name);
    formData.append("description", description);
    formData.append("qty", qty);

    this.props.newProduct(formData).then(result => {
      toast.success("Created new product");
      this.props.history.push("/dashboard/newproduct"); // TODO: Change this to product detail page
    });

    this.setState({ isLoading: false });
  }

  updateDetails(event) {
    //Boundry on quantity
    if (event.target.name === "qty") {
      let value = event.target.value;
      if (value < 1) {
        event.target.value = "1";
      }
      if (value > 1000) {
        event.target.value = "1000";
      }
    }

    if (event.target.name === "agrees") {
      this.setState({ isLoading: !event.target.checked });
    }

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  fileHandler(event) {
    this.setState({ image: event.target.files[0] }, () => {
      console.log(this.state);
    });
  }

  render() {
    const {
      errors,
      name,
      price,
      description,
      qty,
      image,
      isLoading
    } = this.state;

    //Error Classes
    const nameErrorClass = errors.name ? "invalid" : "";
    const descriptionErrorClass = errors.description ? "invalid" : "";
    const priceErrorClass = errors.price ? "invalid" : "";
    const imageErrorClass = errors.image ? "invalid" : "";
    const qtyErrorClass = errors.qty ? "invalid" : "";

    //Check to see if there is any errors
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

    let categories = CATEGORIES.map((name, i) => (
      <option key={i} value={name}>
        {name}
      </option>
    ));

    return (
      <Row className="">
        <Col md="6" className="mx-auto">
          <form className="needs-validation" onSubmit={this.submitHandler}>
            <p className="display-4 h5 text-center mb-4">New Product</p>
            <div className={alertError} role="alert">
              {printErrors}
            </div>
            <div className="grey-text">
              <Row>
                <Col>
                  <Input
                    label="Product Name (Limit: 40 characters)"
                    name="name"
                    icon="list-alt"
                    group
                    type="text"
                    validate
                    value={name}
                    onChange={this.updateDetails}
                    className={nameErrorClass}
                    required
                  />
                </Col>
              </Row>
              <Input
                label="Product Description (Limit: Min:20 Max 120 characters)"
                name="description"
                icon="file-text"
                group
                type="textarea"
                validate
                value={description}
                onChange={this.updateDetails}
                className={descriptionErrorClass}
                required
              />
              <div className="row">
                <Col>
                  <Input
                    label="Quantity (between 1 and 1000)"
                    name="qty"
                    icon="list"
                    group
                    type="text"
                    validate
                    value={qty}
                    onChange={this.updateDetails}
                    className={qtyErrorClass}
                    required
                  />
                </Col>
                <Col>
                  <Input
                    label="Price ? (e.g (1.00)"
                    name="price"
                    icon="dollar"
                    group
                    type="text"
                    validate
                    value={price}
                    onChange={this.updateDetails}
                    className={priceErrorClass}
                    required
                  />
                </Col>
              </div>
              <div className="md-form form-group">
                <Fa icon="th" className="prefix" />
                <br />
                <br />
                <select
                  className="browser-default custom-select"
                  name="category"
                  id="category"
                  onChange={this.updateDetails}
                  required
                >
                  <option>Select a category</option>
                  {categories}
                </select>
                <label className="text-mute text-sm">
                  Select product category
                </label>
              </div>
              <input
                name="image"
                required
                style={{ display: "none" }}
                className="form-control validate"
                onChange={this.fileHandler}
                type="file"
                ref={imageInput => (this.imageInput = imageInput)}
              />
              <div className="form-inline">
                <Col md="9" className="pl-0">
                  <Input
                    icon="cloud-upload"
                    label="Select an image (Must be PNG or JPG, Max 5 MB)"
                    type="text"
                    className={imageErrorClass + ""}
                    disabled
                    value={image.name}
                  />
                </Col>
                <Col className="text-right pr-0">
                  <Button
                    label="Upload photo"
                    className="m-0 ml-auto btn btn-primary btn-sm align-middle"
                    onClick={() => this.imageInput.click()}
                  >
                    Upload Image
                  </Button>
                </Col>
              </div>
            </div>
            <div className="text-center">
              <Input
                label="Agree to posting terms"
                type="checkbox"
                id="agrees"
                name="agrees"
                onChange={this.updateDetails}
              />
              <Button color="primary" type="submit" disabled={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = {
  newProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductForm);
