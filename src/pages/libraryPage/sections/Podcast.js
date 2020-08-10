import React from 'react';
import { Typography } from '@material-ui/core/';
import styles from './podcast.module.css';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import Button from '@material-ui/core/Button';

const Podcast = () => {
  return (
    <div className={styles.podCast}>
      <SettingsInputAntennaIcon style={{ fontSize: 50, paddingBottom: 20 }} />
      <Typography variant='h5' className={styles.title}>
        Follow your first podcast
      </Typography>
      <Typography variant='subtitle1' className={styles.title}>
        Follow the podcasts you like by hitting the follow button.
      </Typography>
      <Button
        variant='contained'
        style={{ backgroundColor: '#fff', marginTop: 20 }}
      >
        Explore podcasts
      </Button>
    </div>
  );
};

export default Podcast;
