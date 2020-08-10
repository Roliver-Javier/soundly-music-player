import React, { useState, useEffect } from 'react';
import { withStyles, Grid, Typography, Slider } from '@material-ui/core';
import { togglePlaying } from '../../actions/playlistAction';
import { connect } from 'react-redux';

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

const TimelineController = ({
  reference,
  playing,
  currentSong,
  togglePlaying,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = reference;

  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / duration;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    if (playing) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playing, audio]);

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
        onEnded={togglePlaying}
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

const mapStateToProps = (state) => ({
  playing: state.playlist.playing,
  currentSong: state.playlist.currentSong,
});

export default connect(mapStateToProps, {
  togglePlaying,
})(TimelineController);
