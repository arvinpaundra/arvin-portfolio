import React from 'react';
import styles from './Hamburger.module.css';

const Hamburger = (props) => {
  return (
    <div onClick={props.expand} className={props.expand ? styles.hamburger && styles.active : styles.hamburger}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Hamburger;
