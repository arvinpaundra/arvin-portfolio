import React from 'react';
import styles from './Links.module.css';

const Links = (props) => {
  return (
    <div className={props.expand ? styles.navbar__links : ''}>
      <p>Home</p>
      <p>Profile</p>
      <p>Projects</p>
      <p>Contact Me</p>
    </div>
  );
};

export default Links;
