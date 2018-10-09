import React, { Component } from "react";
import { Col, Card, Fa } from "mdbreact";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, name, link } = this.props;
    return (
      <Col lg="3" md="6" className="mb-lg-0 my-2">
        <Card collection className="z-depth-1-half">
          <div className="view zoom">
            <img src={image} className="img-fluid" alt="" />
            <div className="stripe dark">
              <a href={link}>
                <p>
                  {name} <Fa icon="angle-right" />
                </p>
              </a>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
