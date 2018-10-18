// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Avatar, toast } from "mdbreact";

// @import Project Components
import { profileGet } from "../../Actions/AuthActions";
import isEmpty from "../../Utils/isEmpty";
import ProductList from "../Products/ProductList";

// @Name ProfilePage
// @Description Provide a page to display user detail
export class ProfilePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profileGet: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      foundHandle: true,
      user: {},
      profile: {
        feedback: []
      },
      products: []
    };
  }

  componentDidMount() {
    let handle = this.props.match.params.handle;
    if (!isEmpty(handle)) {
      this.props
        .profileGet(handle)
        .then(result => {
          this.setState({ ...result.data });
        })
        .catch(axiosError => {
          toast.error(
            "Server Error: No connection to API Server could be made!"
          );
          this.props.history.push("/500");
        });
    }
  }
  // @Name render
  // @Description renders the ProfilePage component
  render() {
    let { profile, user, products } = this.state;
    const { description, feedback } = profile;
    const { avatar, name, handle } = user;

    let feedbackElem = !isEmpty(feedback) ? (
      feedback.map((feedbackItem, i) => {
        return feedbackItem.experience;
      })
    ) : (
      <span>No Feedback yet</span>
    );
    //Returning the component display
    return (
      <Container className="mt-5" fluid>
        <Row className="pt-5 br-primary profile-header">
          <Container>
            <Row>
              <Col md="6" className="py-3">
                <div className="mx-auto">
                  <Avatar
                    tag="img"
                    src={"http:" + avatar}
                    className="rounded-circle z-depth-1 img-fluid mx-auto d-block"
                    alt="Sample avatar"
                  />
                </div>
              </Col>
              <Col md="6" className="mt-5 text-justify">
                {description}
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <h1 className="font-weight-boldmt-4 pt-2 text-center">
                  {name} ({handle})
                </h1>
              </Col>
              <Col md="3" className="offset-md-3 text-right">
                {feedbackElem}
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="profile-body">
          <Container>
            <Row className="mt-2">
              <Col className="text-center">
                <h4>Store Products: </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <ProductList products={{ products }} />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
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
