// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './styles.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Container.defaultProps = {
  children: [],
};

export default Container;
