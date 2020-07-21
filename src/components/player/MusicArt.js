import React, { useEffect } from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const MusicArt = ({ currentSong }) => {
  return (
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
        <Avatar
          className='searchThumb'
          style={{
            width: '215px',
            height: '215px',
            boxShadow: '#0000008c 1px 3px 8px',
          }}
          alt='video thumbnail'
          src={currentSong.picture}
        />
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
  );
};

export default MusicArt;
