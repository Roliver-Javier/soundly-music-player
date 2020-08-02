import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './styles/songCard.module.css';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { addSongToLibrary } from '../../actions/libraryAction';
import { connect } from 'react-redux';

const SongCardItem = ({
  index,
  large,
  image,
  artist,
  song,
  clickAction,
  addSongToLibrary,
}) => {
  const addToFavorite = () => {
    addSongToLibrary(song);
    alert('SE AGREGO A TU LIBRERIA');
  };

  return (
    <div key={index} className={styles.root}>
      <Card className={styles.item}>
        <CardActionArea>
          <CardMedia
            onClick={clickAction}
            image={image}
            style={{
              zIndex: 10,
              height: large,
            }}
            title='Contemplative Reptile'
          />
          <CardContent className={styles.BottomContent}>
            <div className={styles.colDescription}>
              <Typography gutterBottom variant='h6' component='h6'>
                {artist}
              </Typography>
              <Typography variant='body2' component='p'>
                {song}
              </Typography>
            </div>
            <div className={styles.colIcon}>
              <IconButton size='large'>
                <Add onClick={addToFavorite} style={{ color: '#fff' }} />
              </IconButton>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default connect(null, {
  addSongToLibrary,
})(SongCardItem);
