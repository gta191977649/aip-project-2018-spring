import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Row, Col, Button, Container, toast } from "mdbreact";

import convertCentsToDollars from "../../Utils/convertCentsToDollars";
import isEmpty from "../../Utils/isEmpty";
import { createOrder } from "../../Actions/OrderActions";

export class CheckoutPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    createOrder: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.message) {
        toast.error(nextProps.errors.message);
      }
      this.setState({ errors: nextProps.errors });
    }
  }
  async checkout(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    if (!this.props.auth.isLoggedIn) {
      this.setState({ error: "You need to be logged in!" });
    } else {
      this.props.createOrder(this.props.cart, this.props.history);
    }
    this.setState({ isLoading: false });
  }

  render() {
    const { cart } = this.props;
    const { errors, isLoading } = this.state;

    let items = cart.items.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{item.item.name}</td>
        <td>{item.qty}</td>
        <td>${convertCentsToDollars(item.item.price)}</td>
      </tr>
    ));

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
      <Container className="mt-custom">
        <Row>
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price Per Unit</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr />
            <span className="float-left">
              Total: ${convertCentsToDollars(cart.cost)}
            </span>
            <span className="float-right">
              <Button onClick={e => this.checkout(e)} disabled={isLoading}>
                Confirm Purchase
              </Button>
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth
});

const mapDispatchToProps = {
  createOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
