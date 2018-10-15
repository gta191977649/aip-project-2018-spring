import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Avatar, toast } from "mdbreact";

//Components
import { profileGet } from "../../Actions/AuthActions";
import isEmpty from "../../Utils/isEmpty";

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
      }
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

      console.log(this.state);
    }
  }

  render() {
    const { description, feedback } = this.state.profile;
    const { avatar, name, handle } = this.state.user;

    let feedbackElem = !isEmpty(feedback) ? (
      feedback.map((feedbackItem, i) => {
        return feedbackItem.experience;
      })
    ) : (
      <span>No Feedback yet</span>
    );
    return (
      <Container className="mt-5" fluid>
        <Row className="pt-5 br-primary ">
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

        <Row>
          <Container>
            <Row>
              <Col md="6">Ye Boi</Col>
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
