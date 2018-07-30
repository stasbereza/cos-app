// Core
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Container from 'components/Container';
import Header from 'components/Header';
import HomePage from 'components/HomePage';
import StartPage from 'components/StartPage';
import OrdersTable from 'components/OrdersTable';
import OrdersContainer from 'components/OrdersContainer';
import NewOrderForm from 'components/NewOrderForm';
// Instruments
import { hot } from 'react-hot-loader';
import dataBase from 'db';
import './styles.css';

class App extends Component {
  state = {
    orders: [...dataBase.orders],
  };

  addOrder = ({ date, id, type, customer, supplier }) => {
    this.setState(state => ({
      orders: [
        {
          date,
          id,
          type,
          customer,
          supplier,
        },
        ...state.orders,
      ],
    }));
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/start" component={StartPage} />
            <Route
              path="/orders"
              render={props => (
                <OrdersTable>
                  <OrdersContainer {...props} onAddOrder={orders} />
                </OrdersTable>
              )}
            />
            <Route
              path="/new order"
              render={props => (
                <NewOrderForm {...props} onFormSubmit={this.addOrder} />
              )}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default hot(module)(App);
