import React, { Component } from "react";
import { Fa } from "mdbreact";
export default class FeedbackItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: "",
      option_described: 0,
      option_communication: 0,
      option_postage: 0,
      comments: ""
    };
  }

  componentDidMount() {
    this.setState({ ...this.props.feedback });
  }

  render() {
    let star = <Fa icon="star" />;
    let halfStar = <Fa icon="star-half-full" />;
    let emptyStar = <Fa icon="star-o" />;

    return <div />;
  }
}
