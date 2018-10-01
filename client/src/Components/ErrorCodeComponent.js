import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ErrorCodeComponent extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions">
                <a
                  href="/"
                  class="btn btn-primary btn-lg"
                >
                  <span class="glyphicon glyphicon-home" />
                  Take Me Home
                </a>
                <a
                  href="/"
                  class="btn btn-default btn-lg"
                >
                  <span class="glyphicon glyphicon-envelope" /> Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorCodeComponent);
