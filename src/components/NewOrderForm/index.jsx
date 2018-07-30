// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// shared
import Input from 'components/shared/Input';
import Select from 'components/shared/Select';
import Textarea from 'components/shared/Textarea';
import Button from 'components/shared/Button';
// Instruments
import styles from './styles.css';

const INITIAL_STATE = {
  customer: '',
  mobile: '',
  email: '',
  product: '',
  type: '',
  supplier: '',
  id: '',
  date: '',
  comment: '',
};

const optionsTypeSelect = ['wholesale', 'retail'];

const optionsSupplierSelect = [
  'Mango ltd',
  'Poly ltd',
  'Ajax ltd',
  'Chelsey ltd',
];

export default class NewOrderForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newOrder = {
      ...this.state,
    };

    if (
      this.state.customer === '' ||
      this.state.type === '' ||
      this.state.supplier === '' ||
      this.state.id === '' ||
      this.state.date === ''
    ) {
      alert('You should fill out all requered form fields');
    }

    this.props.onFormSubmit(newOrder);

    alert('The order has been added. Go to the order table.');

    this.setState({ ...INITIAL_STATE });
  };

  createTypeOptions = () =>
    optionsTypeSelect.map(option => <option key={option}>{option}</option>);

  createSupplierOptions = () =>
    optionsSupplierSelect.map(option => <option key={option}>{option}</option>);

  render() {
    const {
      customer,
      mobile,
      email,
      product,
      type,
      supplier,
      id,
      date,
      comment,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h3>Customer information:</h3>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Customer</h4>
          <Input
            name="customer"
            value={customer}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Mobile phone</h4>
          <Input
            name="mobile"
            value={mobile}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>E-mail</h4>
          <Input name="email" value={email} onChange={this.handleInputChange} />
        </div>
        <h3>Order information:</h3>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Product</h4>
          <Input
            name="product"
            value={product}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Type</h4>
          <Select
            name="type"
            value={type}
            onChange={this.handleInputChange}
            onAddOptions={this.createTypeOptions}
          />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Supplier</h4>
          <Select
            name="supplier"
            value={supplier}
            onChange={this.handleInputChange}
            onAddOptions={this.createSupplierOptions}
          />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>ID</h4>
          <Input name="id" value={id} onChange={this.handleInputChange} />
        </div>
        <div className={styles.input__elem}>
          <h4 className={styles.input__title}>Date</h4>
          <Input
            type="date"
            name="date"
            value={date}
            onChange={this.handleInputChange}
          />
        </div>
        <div
          className={styles.input__elem}
          style={{ alignItems: 'flex-start' }}>
          <h4 className={styles.input__title}>Comment</h4>
          <Textarea
            name="comment"
            value={comment}
            rows="5"
            cols="30"
            onChange={this.handleInputChange}
          />
        </div>
        <Button type="submit" text="Save" />
      </form>
    );
  }
}
