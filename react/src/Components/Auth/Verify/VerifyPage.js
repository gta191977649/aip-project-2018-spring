import React, { Component } from "react";
import { userVerify } from "../../../Actions/AuthActions";
import { addFlashMessage } from "../../../Actions/FlashActions";
import { Container, Col, Row } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProgressBar from '../../ProgressBar';
export class VerifyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.location.state,
      progress: 0,
      interval: 10,
    }

    this.autoChange = this.autoChange.bind(this);
  }

  componentDidMount() {
    this.props.addFlashMessage({
      type: "info",
      text: "Verifying your account now."
    });
    this.autoChange();
    console.log(this.state);
  }

  componentUpdated(){
    if(this.state.isLoaded){
      this.props.userVerify(this.state.auth).then(
        res => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You are now verfieid, please login!'
          }); 
          this.props.history.push('/login'); 
        },
        err => { 
          this.props.addFlashMessage({
            type: 'error',
            text: 'There was an error validating please contact an admin!'
          });
        }
      );
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async autoChange() {
    while (this.state.progress < 100) {
      await this.sleep(this.state.interval);
      let oldState = this.state;
      oldState.progress += 1;
      this.setState(oldState);
    }
    this.setState({isLoaded: true});
    this.componentUpdated();
  }

  render() {
    const { progress, interval } = this.state;
    return (
      
      <Container>
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2>Please wait while we verify your account!</h2>
            <ProgressBar progress={progress} autoIncrement={true} interval={interval}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

VerifyPage.propTypes = {
  userVerify: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { userVerify, addFlashMessage }
)(VerifyPage);
