import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "mdbreact";

export class FlashMessage extends Component {
  componentDidMount() {
    const { type, text } = this.props.message;
    if (type === "error") {
      toast.error({ text });
    }
    if (type === "info") {
      toast.info({ text });
    }
    if (type === "warn") {
      toast.warn({ text });
    }
    if (type === "success") {
      toast.success({ text });
    }
  }
  render() {
    return (
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={5000}
      />
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default FlashMessage;
