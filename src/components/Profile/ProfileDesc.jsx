import React from 'react';
import styles from './ProfileDesc.module.css';

const ProfileDesc = () => {
  return (
    <div className={styles.profile__desc}>
      <p className={styles.profile__text}>
        Perkenalkan nama saya Arvin Paundra Ardana. Saat ini saya berkuliah di Politeknik Negeri Cilacap dan masuk pada jurusan Teknik Informatika pada tahun 2020. Berikut merupakan profile lengkap saya.
      </p>
    </div>
  );
};

export default ProfileDesc;
