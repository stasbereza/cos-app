// Core
import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Button from 'components/shared/Button';
// Instruments
import styles from './styles.css';

const StartPage = () => (
  <div className={styles.div}>
    <h1>Welcome to CRM system</h1>
    <Link to="/orders">
      <Button text="start" />
    </Link>
  </div>
);

export default StartPage;
