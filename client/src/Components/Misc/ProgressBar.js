import React, { Component } from "react";
import PropTypes from "prop-types";
export class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.progress,
      autoIncrement: this.props.autoIncrement,
      interval: this.props.interval,
      isLoaded: (this.props.progress>=100)
    };
    this.autoChange = this.autoChange.bind(this);
  }

  componentDidMount() {
    if (this.state.autoIncrement) {
      this.autoChange();
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
    this.setState({isLoaded: true, autoIncrement: false});
  }

  render() {
    const { progress } = this.state;
    return (
      <div className="progress" style={{ height: 10 + "px" }}>
        <div
          className="progress-bar"
          style={{ width: progress + "%", height: 10 + "px" }}
          onChange={this.updateProgress}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  autoIncrement: PropTypes.bool.isRequired
};

export default ProgressBar;
