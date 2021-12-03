import React from 'react';
import contents from '../../../contents';
import styles from './Myself.module.css';

const Myself = () => {
  return (
    <div className={styles.myself__wrapper}>
      <img src={contents.profile.tentangSaya.img} alt={contents.profile.tentangSaya.alt} />
      <div className={styles.myself__info}>
        <p>
          <span>Nama Lengkap :</span> {contents.profile.tentangSaya.namaLengkap}
        </p>
        <p>
          <span>Alamat :</span> {contents.profile.tentangSaya.alamat}
        </p>
        <p>
          <span>Status :</span> {contents.profile.tentangSaya.status}
        </p>
        <p>
          <span>Matakuliah Favorit :</span> {contents.profile.tentangSaya.matkulFavorit}
        </p>
      </div>
    </div>
  );
};

export default Myself;
