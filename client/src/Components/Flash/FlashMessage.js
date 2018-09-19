import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export class FlashMessage extends Component {
  render() {
    const { id, type, text } = this.props.message;

    return (
      <div
        className={classnames("alert text-center", {
          "alert-success": type === "success",
          "alert-danger": type === "error",
          "alert-info": type === "info"
        })}
        role="alert"
      >
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default FlashMessage;
