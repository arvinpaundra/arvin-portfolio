import React from 'react';
import ProfileDesc from './ProfileDesc';
import Container from '../UI/Container';
import styles from './Profile.module.css';
import ProfileFilter from './ProfileFilter';

const Profile = () => {
  return (
    <Container className={styles.profile}>
      <h3 className={styles.profile__subheading}>
        <span>Profile</span>
      </h3>
      <ProfileDesc />
      <ProfileFilter />
    </Container>
  );
};

export default Profile;
