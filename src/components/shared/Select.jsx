// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './Select.css';

const Select = ({ name, value, onChange, onAddOptions }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={styles.select}>
    <option value={name}>Choose {name}</option>
    {onAddOptions()}
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAddOptions: PropTypes.func.isRequired,
};

export default Select;
