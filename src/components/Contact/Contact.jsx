import React from 'react';
import contents from '../../contents';
import ContactItem from './ContactItem';
import styles from './Contact.module.css';
import ContactImg from './ContactImg';
import Container from '../UI/Container';

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <h3 className={styles.subheading}>
        Stay <span>Connected</span>
      </h3>
      <div className={styles.contact__section}>
        <ContactImg />
        <div className={styles.contact__info}>
          {contents.contacts.map((item) => (
            <ContactItem key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Contact;
