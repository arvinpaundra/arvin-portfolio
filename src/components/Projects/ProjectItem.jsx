import React from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <div className={styles.project__item}>
      <img className={`${styles.project__img} ${props.id % 2 === 0 ? styles.swap : ''}`} src={props.img} alt={props.alt} />
      <div className={styles.project__desc}>
        <h3 className={styles['project__desc-title']}>{props.title}</h3>
        <p className={styles['projrcts__desc-text']}>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
