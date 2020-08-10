import React, { useState } from 'react';
import styles from '../library.module.css';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Typography } from '@material-ui/core/';

const PlaylistCardItem = ({ data, isSong, showTracks, tracks }) => {
  const [IsMouseInside, setIsMouseInside] = useState(false);

  const mouseEnter = () => {
    setIsMouseInside(true);
  };
  const mouseLeave = () => {
    setIsMouseInside(false);
  };
  return (
    <Card
      className={styles.cardItem}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={isSong ? data.album.cover_medium : data.picture}
          title={data.title}
          className={styles.mediaContent}
        />

        <CardContent className={styles.cardContent}>
          <div>
            <Typography
              gutterBottom
              variant='p'
              component='p'
              className={styles.title}
            >
              {data.title}
            </Typography>

            {isSong && (
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className={styles.title}
              >
                - {data.artist.name}
              </Typography>
            )}
            {showTracks && (
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className={styles.title}
              >
                {`(${tracks.length}) songs`}
              </Typography>
            )}
          </div>
          {IsMouseInside && (
            <IconButton
              color='inherit'
              aria-label='Search'
              className={styles.playBtn}
            >
              <PlayCircleOutline
                style={{
                  color: '#1db954',
                  width: 35,
                  height: 35,
                }}
              />
            </IconButton>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaylistCardItem;
