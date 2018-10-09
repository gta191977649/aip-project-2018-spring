import React, { Component } from "react";
import { NavItem, Button } from "mdbreact";
import { withRouter } from "react-router-dom";
class SearchNavForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seach: "blank"
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();
    let search = this.state.search ? this.state.search : "";
    this.props.history.push("/search?name=" + search);
  }

  updateDetails(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { search } = this.state;
    return (
      <NavItem>
        <form
          className="form-inline md-form mb-0 mt-0"
          onSubmit={this.submitHandler}
        >
          <input
            className="form-control text-white nav-search"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="search"
            value={search}
            onChange={this.updateDetails}
          />
          <Button className="btn-sm" type="submit">
            Search
          </Button>
        </form>
      </NavItem>
    );
  }
}
export default withRouter(SearchNavForm);
