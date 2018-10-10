import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Avatar } from "mdbreact";
//Components
import { profileGet } from "../../Actions/AuthActions";
import { isEmpty } from "../../Utils/UtilMethods";

export class ProfilePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profileGet: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      website: "",
      location: "",
      description: "",
      feedback: [],
      foundHandle: true
    };
  }

  componentDidMount() {
    let handle = this.props.match.params.handle;
    if (!isEmpty(handle)) {
      this.props.profileGet(handle).then(result => {
        console.log(result.data);
      });
    }
  }
  render() {
    return (
      <Container className="mt-5" fluid>
        <Row className="pt-5">
          <Col md="12">
            <Avatar
              tag="img"
              src=""
              className="rounded-circle z-depth-1 img-fluid"
              alt="Sample avatar"
            />
            <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
          </Col>
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
