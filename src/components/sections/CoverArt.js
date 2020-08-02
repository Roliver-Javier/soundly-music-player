import React, { Fragment, useEffect, useState } from 'react';
import styles from './styles/coverArt.module.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getAlbum } from '../../apis/QueryApi';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PropTypes from 'prop-types';

const CoverArt = ({
  image,
  showAlbum,
  showActionBtn,
  albumId,
  artist,
  title,
  description,
}) => {
  const [albumTracks, setAlbumTracks] = useState([]);

  useEffect(() => {
    if (showAlbum) {
      getAlbum(albumId).then((res) => {
        const limitedAlbumTracks = res.data.tracks.data.slice(0, 8);
        setAlbumTracks(limitedAlbumTracks);
      });
    }
  }, [albumId, showAlbum]);

  const AlbumnList = () => {
    return (
      <div className={styles.songs}>
        {albumTracks.length > 1 && (
          <div className={styles.albums}>
            <List className={styles.songList}>
              {albumTracks.map((track, index) => (
                <ListItem key={index} className={styles.song} button divider>
                  <ListItemAvatar
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar>
                      <PlayCircleOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={track.title}
                    className={styles.title}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </div>
    );
  };

  const ActionBtns = () => {
    return (
      <div className={styles.colBottom}>
        <Button size='small' variant='contained' className={styles.btnSubs}>
          <Typography variant='caption' display='block' gutterBottom>
            Play
          </Typography>
        </Button>
        <Button size='small' variant='outlined' className={styles.outlineBtn}>
          <Typography variant='caption' display='block' gutterBottom>
            Follow
          </Typography>
        </Button>
      </div>
    );
  };
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '80vh',
          }}
        >
          <div className={styles.bottomContainer}>
            <Typography style={{ color: '#fff' }} variant='h4' gutterBottom>
              {artist && `${artist} - `}
              {title}
            </Typography>

            <Typography style={{ color: '#fff' }} variant='body2' gutterBottom>
              {description}
            </Typography>

            {showActionBtn && <ActionBtns />}
          </div>
        </div>

        {showAlbum && <AlbumnList />}
      </div>
    </Fragment>
  );
};
CoverArt.propTypes = {
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showAlbum: PropTypes.bool.isRequired,
  showActionBtn: PropTypes.bool.isRequired,
};
export default CoverArt;
