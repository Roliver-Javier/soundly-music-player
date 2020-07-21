import React, { useRef, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import MusicArt from './MusicArt';
import { IconButton } from '@material-ui/core/';
import { SkipPrevious } from '@material-ui/icons/';
import { SkipNext } from '@material-ui/icons/';
import PlayPauseButton from './PlayPauseButton';
import TimelineController from './TimelineController';
import playerContext from '../../context/playerContext';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
};

const pageVariant = {
  exit: { y: '100%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const MaxMusicArt = () => {
  const audio = useRef('audio_tag');
  const { playing, currentSong, handleEnd } = useContext(playerContext);
  return (
    <motion.div
      variants={pageVariant}
      initial='exit'
      animate='enter'
      exit='exit'
      style={{ backgroundColor: '#000' }}
    >
      <Grid
        container
        direction='column'
        className='main-player-inner'
        justify='center'
        style={{
          height: 'calc(100vh - 46px)',
        }}
      >
        <div className='musicArtContainer'>
          <motion.div
            variants={{
              exit: { x: 100, opacity: 0, transition },
              enter: {
                x: 0,
                opacity: 1,
                transition: { delay: 1, ...transition },
              },
            }}
          >
            <MusicArt currentSong={currentSong} />
          </motion.div>
        </div>

        <TimelineController
          playing={playing}
          currentSong={currentSong}
          handleEnd={handleEnd}
          reference={audio}
        />

        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
          style={{ maxWidth: '290px', height: '80px', margin: '0 auto' }}
        >
          <PreviousButton />
          <PlayPauseButton
            isPlaying={playing}
            isLoading={false}
            minimized={false}
          />
          <NextButton />
        </Grid>
      </Grid>
    </motion.div>
  );
};

const PreviousButton = () => {
  return (
    <IconButton color='primary' aria-label='Pause'>
      <SkipPrevious fontSize='large' />
    </IconButton>
  );
};

const NextButton = () => {
  return (
    <IconButton color='primary' aria-label='Next'>
      <SkipNext fontSize='large' />
    </IconButton>
  );
};

export default MaxMusicArt;
