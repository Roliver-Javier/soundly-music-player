import React, { useState, useRef, useEffect, useContext } from 'react';
import { withStyles, Grid, Typography, Slider } from '@material-ui/core';

const PrettoSlider = withStyles({
  root: {
    height: 6,
  },
  thumb: {
    height: 16,
    width: 16,
    marginTop: -5.3,
    marginLeft: -8,
    '&::before': {
      content: "''",
      height: 'inherit',
      width: 'inherit',
      position: 'absolute',
      transform: 'scale(1.6)',
      borderRadius: '50px',
      border: '1px solid',
    },
  },
  track: {
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(Slider);

const fmtMSS = (s) => {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
};

const TimelineController = ({ playing, currentSong, handleEnd, reference }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = reference;

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();
  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    toggleAudio();
  }, [playing]);

  return (
    <div style={{ margin: '0 auto', width: '90%' }}>
      <Grid container direction='row' justify='space-between'>
        <Typography variant='body1' color='primary'>
          {fmtMSS(currentTime) + ' / ' + fmtMSS(duration)}
        </Typography>
      </Grid>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type='audio/mpeg'
        preload='true'
        src={currentSong.preview}
      />
      <PrettoSlider
        value={duration ? (currentTime * duration) / duration : 0}
        onChange={handleProgress}
        max={duration ? duration : 0}
        type='range'
        name='progresBar'
        id='prgbar'
      />
    </div>
  );
};

export default TimelineController;
