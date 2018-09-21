import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {deleteFlashMessage} from '../../Actions/FlashActions';

export class FlashMessage extends Component { 
  onClick(event){
    //TODO: Change to remove single later
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;

    return (
      <div
        className={classnames("alert text-center", {
          "alert-success": type === "success",
          "alert-danger": type === "error",
          "alert-info": type === "info"
        })}
        role="alert"
      >
        <button onClick={this.onClick.bind(this)} className="close">
          &times;
        </button>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
