import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import MusicArt from './MusicArt';
import { IconButton } from '@material-ui/core/';
import { SkipPrevious } from '@material-ui/icons/';
import { SkipNext } from '@material-ui/icons/';
import PlayPauseButton from './PlayPauseButton';
import TimelineController from './TimelineController';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
};

const pageVariant = {
  exit: { y: '90%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const MaxMusicArt = ({ playing, currentSong }) => {
  const audio = useRef('audio_tag');
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
          <MusicArt currentSong={currentSong} />
        </div>

        <TimelineController reference={audio} />

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

const mapStateToProps = (state) => ({
  playing: state.playlist.playing,
  currentSong: state.playlist.currentSong,
});
export default connect(mapStateToProps, null)(MaxMusicArt);
