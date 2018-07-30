// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './Textarea.css';

const Textarea = ({ name, value, placeholder, onChange, rows, cols }) => (
  <textarea
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    rows={rows}
    cols={cols}
    className={styles.textarea}
  />
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  rows: '',
  cols: '',
};

export default Textarea;
