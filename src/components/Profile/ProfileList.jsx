import React from 'react';
import styles from './ProfileList.module.css';

const ProfileList = (props) => {
  return (
    <li className={props.active ? styles.active : ''} onClick={() => props.onSelected(props.id)}>
      {props.name}
    </li>
  );
};

export default ProfileList;
