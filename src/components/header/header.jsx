import React from 'react';
import styles from './header.module.css';

const Header = ({ count, left }) => (
  <div>
    <h1>Shopping List</h1>
    <span className={styles.count}>
      {count - left} / {count} items left
    </span>
  </div>
);

export default Header;
<h1>Header</h1>;
