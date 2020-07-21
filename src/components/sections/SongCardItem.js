import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './styles/songCard.module.css';
const SongCardItem = ({ index, large, image, artist, song, clickAction }) => {
  return (
    <div key={index} className={styles.root} onClick={clickAction}>
      <Card className={styles.item}>
        <CardActionArea>
          <CardMedia
            image={image}
            style={{
              zIndex: 10,
              height: large,
            }}
            title='Contemplative Reptile'
          />
          <CardContent className={styles.BottomContent}>
            <Typography gutterBottom variant='h6' component='h6'>
              {artist}
            </Typography>
            <Typography variant='body2' component='p'>
              {song}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SongCardItem;
