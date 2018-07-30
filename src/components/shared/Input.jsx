// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './Input.css';

const Input = ({ type, name, value, placeholder, onChange }) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={styles.input}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
};

export default Input;
