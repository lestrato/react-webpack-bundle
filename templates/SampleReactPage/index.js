import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from "./styles.scss";

class SamplePage extends Component {
  render() {
    const { ...attributes } = this.props;

    return (
      "this is a sample page to bootstrap"
    );
  }
}

SamplePage.defaultProps = {};

SamplePage.propTypes = {};

export default SamplePage;
