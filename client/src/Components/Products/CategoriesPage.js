import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CATEGORIES } from "../../Utils/Constants";
export class CategoriesPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let categories = CATEGORIES.map(name => (
      <a href={"/categories/" + name} className="mr-5">
        {name}
      </a>
    ));
    return <div>{categories}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
