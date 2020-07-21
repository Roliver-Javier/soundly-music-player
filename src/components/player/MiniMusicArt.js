import React from 'react';
import styles from './miniMusicArt.module.css';
import { Typography } from '@material-ui/core';
import { SkipNext, Close } from '@material-ui/icons';
import PlayPauseButton from './PlayPauseButton';

const MiniMusicArt = ({ playerPause }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.overFlowHidden}>
        <div className={styles.details}>
          <Typography variant='body1'>Cancion 1</Typography>
        </div>
      </div>
      <div className={styles.buttons}>
        <SkipNext />
        <Close />
      </div>

      <div className={styles.miniArtContainer}>
        <div className={styles.mainArt}>
          <img
            className={styles.miniArtImg}
            src='https://cdns-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/500x500-000000-80-0-0.jpg'
            alt='music art'
          />
          <PlayPauseButton
            player={playerPause.player}
            minimized={playerPause.minimized}
            audioState={playerPause.audioState}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniMusicArt;
