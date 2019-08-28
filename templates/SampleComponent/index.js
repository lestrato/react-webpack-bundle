import React, { Component } from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from "./styles.scss";

class SampleComponent extends Component {
  render() {
    const { ...attributes } = this.props;

    return (
      "this is a sample component to bootstrap"
    );
  }
}

SampleComponent.defaultProps = {};

SampleComponent.propTypes = {};

export default SampleComponent;
