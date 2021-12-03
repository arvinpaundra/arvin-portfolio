import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Links from './Links';
import Logo from './Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
    console.log(expand);
  };
  return (
    <div className={styles.navbar}>
      <Logo />
      <Links expand={expandHandler} />
      <Hamburger expand={expandHandler} />
    </div>
  );
};

export default Navbar;
