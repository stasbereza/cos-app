// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './styles.css';

const OrdersTable = ({ children }) => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>date</th>
          <th>name</th>
          <th>id</th>
          <th>type</th>
          <th>customer</th>
          <th>supplier</th>
          <th>completed</th>
          <th>status</th>
        </tr>
      </thead>
      {children}
    </table>
  );

OrdersTable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

OrdersTable.defaultProps = {
  children: {},
};

export default OrdersTable;
