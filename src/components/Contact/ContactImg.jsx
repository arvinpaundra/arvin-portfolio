import React from 'react';
import contents from '../../contents';
import styles from './ContactImg.module.css';

const ContactImg = () => {
  return (
    <div>
      <img className={styles.contact__img} src={contents.stayConnected.img} alt={contents.stayConnected.alt} />
    </div>
  );
};

export default ContactImg;
