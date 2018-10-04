import  React from 'react';
import {Component} from "react";
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import connect from "react-redux/es/connect/connect";
import {addFlashMessage} from "../../../Actions/FlashActions";

class UserOrderItem extends Component{
  constructor(props) {
    super(props);

  }
  triggerParentEdit(){
    this.props.parentEdit(this.props.data);
  }
  render() {
    return (
      <div className="card">
        <Carousel
          activeItem={1}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
        </Carousel>
        <div className="card-body">
          <h4 className="card-title"><a>{this.props.data.id}</a></h4>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userID:state.auth.user.id
});

export default connect(mapStateToProps,{addFlashMessage})(UserOrderItem);
