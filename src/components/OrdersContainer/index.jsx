// Core
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Components
import Orders from 'components/Orders';
// Instruments
import dataBase from 'db';

export default class OrdersContainer extends Component {
  state = {
    orders: [...dataBase.orders],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.orders !== nextProps.onAddOrder) {
      return {
        orders: nextProps.onAddOrder,
      };
    }

    return null;
  }

  render() {
    const { orders } = this.state;

    return <Orders orders={orders} />;
  }
}
