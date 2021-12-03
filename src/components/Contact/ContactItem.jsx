import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = (props) => {
  return (
    <div className={styles['contact-item']}>
      <img className={styles['contact-item__img']} src={props.img} alt={props.alt} />
      <p className={styles['contact-item__text']}>{props.text}</p>
    </div>
  );
};

export default ContactItem;
