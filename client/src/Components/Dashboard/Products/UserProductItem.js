import React from "react";
import { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View
} from "mdbreact";
import { connect } from "react-redux";
import { deleteProduct } from "../../../Actions/ProductAction";
import { addFlashMessage } from "../../../Actions/FlashActions";

class UserProductItem extends Component {
  deleteProduct(id) {
    this.props.deleteProduct(id);
    this.props.parentRemove(id);
    this.props.addFlashMessage({
      type: "success",
      text: "You deleted the product ID: " + id
    });
  }
  triggerParentEdit() {
    this.props.parentEdit(this.props.data);
  }
  render() {
    console.log(this.props.data.img);
    const imgItems = this.props.data.img.map((imgUri, idx) => (
      <CarouselItem itemId={idx + 1} key={idx}>
        <View>
          <img
            className="d-block w-100"
            height="170px"
            src={imgUri}
            alt={imgUri}
          />
        </View>
      </CarouselItem>
    ));
    return (
      <div className="card">
        <Carousel
          activeItem={1}
          length={imgItems.length}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
        >
          <CarouselInner>{imgItems}</CarouselInner>
        </Carousel>
        <div className="card-body">
          <h4 className="card-title">
            <a>{this.props.data.name}</a>
          </h4>
          <p className="card-text">{this.props.data.description}</p>
          <a
            className="btn btn-sm btn-primary float-right"
            onClick={() => {
              this.triggerParentEdit();
            }}
          >
            Manage
          </a>
          <a
            className="btn btn-sm btn-danger float-right"
            onClick={() => {
              this.deleteProduct(this.props.data.id);
            }}
          >
            Delete
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  deleteResponse: state.products.delResponse,
  userID: state.auth.user.id
});

export default connect(
  mapStateToProps,
  { deleteProduct, addFlashMessage }
)(UserProductItem);
