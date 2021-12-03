import React, { useState } from 'react';
import styles from './ProfileFilter.module.css';
import ProfileList from './ProfileList';
import Myself from './Myself/Myself';
import Education from './Educations/Education';

const ProfileFilter = () => {
  const [selected, setSelected] = useState('myself');

  const listProfile = [
    { id: 'myself', name: 'Tentang saya' },
    { id: 'hobby', name: 'Hobi' },
    { id: 'education', name: 'Riwayat pendidikan' },
  ];

  const selectedHandler = (id) => {
    setSelected(id);
  };

  return (
    <div>
      <ul className={styles['profile-filter']}>
        {listProfile.map((item) => (
          <ProfileList key={item.id} name={item.name} active={selected === item.id} onSelected={selectedHandler} id={item.id} />
        ))}
      </ul>
      <div>
        {selected === 'myself' ? <Myself /> : <div></div>}
        {selected === 'education' ? <Education /> : <div></div>}
      </div>
    </div>
  );
};

export default ProfileFilter;
