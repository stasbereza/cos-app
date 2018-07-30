// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Order from 'components/Order';

const Orders = ({ orders }) => (
  <tbody>
    {orders.map(order => (
      <tr key={order.id}>
        <Order {...order} />
      </tr>
    ))}
  </tbody>
);

Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      customer: PropTypes.string,
      supplier: PropTypes.string,
      completed: PropTypes.string,
      status: PropTypes.string,
    }),
  ),
};

Orders.defaultProps = {
  orders: [],
};

export default Orders;
