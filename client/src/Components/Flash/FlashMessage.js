import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {deleteFlashMessage} from '../../Actions/FlashActions';
import ProgressBar from '../ProgressBar';
export class FlashMessage extends Component { 
  onClick(event){
    //TODO: Change to remove single later
    this.props.deleteFlashMessage(this.props.message.id);
  }
  async componentDidMount(){
    await this.sleep(2000);
    this.onClick(null);
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
        {/* <ProgressBar progress={0} autoIncrement={true} interval={10}/> */}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
