// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import styles from './styles.css';

const menu = ['start', 'orders', 'new order'];

const menuItems = menu.map(menuItem => (
  <li key={menuItem} className={styles.list__item}>
    <NavLink
      to={`/${menuItem}`}
      className={styles.link}
      activeClassName={styles.list__item_active}>
      {menuItem}
    </NavLink>
  </li>
));

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>{menuItems}</ul>
  </nav>
);

export default Navbar;
