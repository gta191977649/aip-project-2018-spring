import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'
export class DashboardPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            renderCompoment: "",
        }
    }
    componentWillMount() {
        this.onNavClick(1);
    }
    onNavClick(id) {
        console.log("clicked ",id)
        switch (id) {
            case 1:
                this.setState({renderCompoment:<div>User Profile</div>})
        }

    }

  render() {
    return (
        <div className="container">
          <div className="row mt-5">
              <div className="col-md-3">
                  <ListGroup>
                      <ListGroupItem active onClick={() => {this.onNavClick(1)}}>Profile</ListGroupItem>
                      <ListGroupItem hover onClick={() => {this.onNavClick(2)}}>My Sell items</ListGroupItem>
                      <ListGroupItem hover onClick={() => {this.onNavClick(3)}}>My Orders</ListGroupItem>
                  </ListGroup>
              </div>
              <div className="col-md-9">
                <h1>Dashboard</h1>
                  {this.state.renderCompoment}
              </div>
          </div>
        </div>
    )

  }
}

export default DashboardPage
