// Core
import React from 'react';
// Components
import Navbar from 'components/Navbar';
// Instruments
import styles from './styles.css';

const Header = () => (
  <header className={styles.header}>
    <Navbar />
  </header>
);

export default Header;
