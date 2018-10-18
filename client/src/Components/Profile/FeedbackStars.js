// @import NPM Modules
import React, { Component } from "react";
import { Fa } from "mdbreact";
// @Name FeedbackItem
// @Description Provides a little display to show important information of one feedback
export default class FeedbackItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positiveCount: 0,
      neutrualCount: 0,
      negativeCount: 0
    };
  }

  componentDidMount() {
    let posCount = 0;
    let neutrualCount = 0;
    let negativeCount = 0;
    this.props.feedback.map();
  }

  render() {
    let star = <Fa icon="star" />;
    let halfStar = <Fa icon="star-half-full" />;
    let emptyStar = <Fa icon="star-o" />;

    return <div />;
  }
}
