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
      profile: {}
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

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    const {} = this.state;
    const { avatar, name, handle } = this.state.user;
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
                    className="rounded-circle z-depth-1 img-fluid mx-auto"
                    alt="Sample avatar"
                  />
                </div>
                <h1 className="font-weight-boldmt-4 pt-2">
                  {name} ({handle})
                </h1>
              </Col>
              <Col md="6">TEST</Col>
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
