import React from 'react';
import contents from '../../contents';
import style from './HeaderImage.module.css';

const HeaderImage = () => {
  return (
    <div className={style['header-img']}>
      <img className={style['header-img__img']} src={contents.header.img} alt={contents.header.alt} />
    </div>
  );
};

export default HeaderImage;
