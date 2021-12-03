import React from 'react';
import Typed from 'react-typed';
import contents from '../../contents';
import styles from './HeaderDesc.module.css';

const HeaderDesc = () => {
  return (
    <div className={styles['header-desc']}>
      <h1 className={styles.header__name}>Arvin Paundra Ardana</h1>

      <p className={styles.header__interest}>
        I'm a <Typed strings={contents.typed} typeSpeed={40} backSpeed={50} loop />
      </p>
      <div className={styles.header__cta}>
        <a href={contents.cv} download target="_blank" rel="noreferrer">
          <button className={styles['header__download-cv']}>Download CV</button>
        </a>
        <a href="mailto:arvinpaundra06@gmail.com">
          <button className={styles['header__hire-me']}>Hire Me</button>
        </a>
      </div>
    </div>
  );
};

export default HeaderDesc;
