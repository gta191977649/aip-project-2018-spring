import React, { Component } from "react";
import { Input, Button, Col, Card, CardBody, Fa } from "mdbreact";
import { withRouter } from "react-router-dom";
class LandingSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seach: "blank"
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();
    let search = this.state.search ? this.state.search : "";
    this.props.history.push("/search?name=" + search);
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { search } = this.state;
    return (
      <Col md="6" className="mx-auto">
        <Card color="grey">
          <CardBody>
            <form onSubmit={this.submitHandler}>
              <h4 className="subtext-header mt-2 mb-4">
                Looking for something specific?
              </h4>
              <div className="grey-text">
                <Input
                  className="landingsearch"
                  group
                  type="text"
                  label="Search"
                  name="search"
                  value={search}
                  onChange={this.updateDetails}
                  color="grey"
                />
              </div>
              <Button color="primary" type="submit">
                <Fa icon="search" /> Search
              </Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default withRouter(LandingSearchForm);
