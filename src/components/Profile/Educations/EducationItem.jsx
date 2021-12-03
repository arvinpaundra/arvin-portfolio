import React from 'react';
import styles from './EducationItem.module.css';

const EducationItem = (props) => {
  return (
    <div className={styles.edu__item}>
      <div className={styles.edu__image}>
        <img src={props.img} alt={props.alt} />
        <div className={styles.overlay}></div>
        <div className={styles.edu__info}>
          <p>{props.year}</p>
          <h5>{props.school}</h5>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
