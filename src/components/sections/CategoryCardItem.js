import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles/categoryCard.module.css';
import { useHistory } from 'react-router-dom';

const CategoryCardItem = ({ index, image, title, size, playlistCode }) => {
  let history = useHistory();
  const goToArtisProfile = () => {
    history.push(`/playlist/${playlistCode}`);
  };
  return (
    <div key={index} className={styles.root} onClick={goToArtisProfile}>
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
