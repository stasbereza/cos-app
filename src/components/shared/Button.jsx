// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './Button.css';

const Button = ({ text, type, onClick, disabled }) => {
  const btnCls = disabled ? styles.disabled : styles.button;

  return (
    <button type={type} onClick={onClick} className={btnCls}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
};

export default Button;
