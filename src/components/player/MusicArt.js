import React, { useEffect, useState, useRef, useContext } from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import styles from './musicArt.module.css';
import playerContext from '../../context/playerContext';
import MusicNote from '@material-ui/icons/MusicNote';

const transition = {
  duration: 1,
};

const pageVariant = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition: { delay: 1, ...transition },
  },
};

const MusicArt = ({ currentSong }) => {
  const { playing } = useContext(playerContext);

  const imageRef = useRef('video-picture');

  useEffect(() => {
    if (playing) {
      getPlayingMotionAnimation();
    } else {
      getStopMotionAnimation();
    }
  }, [playing]);

  const getStopMotionAnimation = () => {
    imageRef.current.classList.remove(styles.avatarPlaying);
    imageRef.current.classList.add(styles.avatarStoping);
  };

  const getPlayingMotionAnimation = () => {
    imageRef.current.classList.add(styles.avatarPlaying);
    imageRef.current.classList.remove(styles.avatarStoping);
  };

  const getAvatar = () => {
    if (currentSong.picture !== '') {
      return (
        <img
          alt='video thumbnail'
          className={`${styles.avatar} ${styles.avatarPlaying}`}
          ref={imageRef}
          src={currentSong.picture}
        />
      );
    } else {
      return (
        <Avatar
          className='searchThumb'
          style={{
            width: '215px',
            height: '215px',
            boxShadow: '#0000008c 1px 3px 8px',
          }}
          ref={imageRef}
        >
          <MusicNote className={styles.icon} />
        </Avatar>
      );
    }
  };
  return (
    <motion.div variants={pageVariant}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{ marginTop: '40px' }}
      >
        <motion.div
          className='box'
          drag
          dragElastic={true}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          {getAvatar()}
        </motion.div>
        <br />
        <Typography
          color='primary'
          variant='h5'
          className='musicArtTitle'
          align='center'
        >
          {currentSong.artist}
        </Typography>
        <Typography color='primary' variant='subtitle1'>
          {currentSong.title}
        </Typography>
        <br />
      </Grid>
    </motion.div>
  );
};

export default MusicArt;
