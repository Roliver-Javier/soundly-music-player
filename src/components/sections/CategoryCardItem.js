import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles/categoryCard.module.css';

const CategoryCardItem = ({ index, large, image, title, size }) => {
  return (
    <div key={index} className={styles.root}>
      <Avatar alt='Remy Sharp' src={image} className={styles.media} />
      <div className={styles.BottomContent}>
        <Typography
          gutterBottom
          variant='h6'
          className={styles.title}
          component='h6'
        >
          {title}
        </Typography>
        <Typography variant='body2' component='p'>
          {'(' + size + ')'} songs
        </Typography>
      </div>
    </div>
  );
};

export default CategoryCardItem;
