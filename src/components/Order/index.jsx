// Core
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './styles.css';

const Order = ({
  date,
  name,
  id,
  type,
  customer,
  supplier,
  completed,
  status,
}) => {
  const statusCls = () => {
    if (status === 'done') {
      return styles.done;
    } else if (status === 'confirm') {
      return styles.confirm;
    } else if (status === 'expired') {
      return styles.expired;
    } else if (status === 'failed') {
      return styles.failed;
    }

    return styles.status;
  };

  return (
    <Fragment>
      <td>{date}</td>
      <td>{name}</td>
      <td>{id}</td>
      <td>{type}</td>
      <td>{customer}</td>
      <td>{supplier}</td>
      <td>{completed}</td>
      <td className={statusCls()}>{status}</td>
    </Fragment>
  );
};

Order.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  customer: PropTypes.string,
  supplier: PropTypes.string,
  completed: PropTypes.string,
  status: PropTypes.string,
};

Order.defaultProps = {
  id: '',
  date: '',
  name: '',
  type: '',
  customer: '',
  supplier: '',
  completed: '',
  status: '',
};

export default Order;
