import React from 'react';
import HeaderDesc from './HeaderDesc';
import HeaderImage from './HeaderImage';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderDesc />
      <HeaderImage />
    </div>
  );
};

export default Header;
