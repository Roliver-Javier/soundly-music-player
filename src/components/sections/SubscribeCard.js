import React from 'react';
import styles from './styles/subscribe.module.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SubscribeCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Get 3 months Premium for just $5.99</p>
      <Button size='small' variant='outlined' className={styles.btnSubs}>
        <Typography variant='caption' display='block' gutterBottom>
          <small>Subscribe</small>
        </Typography>
      </Button>
    </div>
  );
};

export default SubscribeCard;
