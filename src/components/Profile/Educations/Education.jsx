import React from 'react';
import contents from '../../../contents';
import styles from './Education.module.css';
import EducationItem from './EducationItem';

const Education = () => {
  return (
    <div className={styles.about__education}>
      {contents.profile.education.map((item) => (
        <EducationItem key={item.id} img={item.img} alt={item.alt} year={item.year} school={item.school} />
      ))}
    </div>
  );
};

export default Education;
