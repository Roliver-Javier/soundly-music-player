import React, { useContext } from 'react';
import { IconButton, CircularProgress } from '@material-ui/core/';
import {
  PauseCircleFilled,
  PlayCircleFilled,
  Pause,
  PlayArrow,
} from '@material-ui/icons/';
import playerContext from '../../context/playerContext';

const PlayPauseButton = ({ isPlaying, isLoading, minimized }) => {
  const { togglePlaying } = useContext(playerContext);

  const showPlayPause = () => {
    if (isPlaying) {
      if (minimized) {
        return (
          <Pause style={{ fontSize: '3em', opacity: '.8', color: '#fff' }} />
        );
      }
      return <PauseCircleFilled style={{ fontSize: '4em', color: '#fff' }} />;
    } else if (!isPlaying || isLoading) {
      if (minimized) {
        return (
          <PlayArrow
            style={{ fontSize: '3em', opacity: '.8', color: '#fff' }}
          />
        );
      }
      return <PlayCircleFilled style={{ fontSize: '4em', color: '#fff' }} />;
    } else if (isLoading) {
      return <CircularProgress />;
    }
  };

  return (
    <IconButton
      size='small'
      aria-label='Pause'
      disableFocusRipple={true}
      disableRipple={true}
      onClick={() => {
        togglePlaying();
      }}
    >
      {showPlayPause()}
    </IconButton>
  );
};

export default PlayPauseButton;
