import React from 'react';
import contents from '../../contents';
import Container from '../UI/Container';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <Container className={styles.projects}>
      <h3 className={styles.subheading}>
        <span>Projects</span>
      </h3>
      <p className={styles.projects__text}>Berikut merupakan projek sederhana yang saya buat.</p>
      {contents.projects.map((item, index) => (
        <ProjectItem swap={index % 2 === 0 ? 'swap' : ''} key={item.id} img={item.img} alt={item.alt} title={item.title} desc={item.desc} id={item.id} />
      ))}
    </Container>
  );
};

export default Projects;
