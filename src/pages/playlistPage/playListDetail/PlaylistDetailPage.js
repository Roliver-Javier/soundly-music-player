import React, { useEffect, Fragment } from 'react';
import styles from './playlistDetail.module.css';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ClearOutlined from '@material-ui/icons/ClearOutlined';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import ActionButtonGroup from './sections/ActionButtonGroup';
import DataGridSongs from './sections/DataGridSongs';
import { getCurrentPlayList } from '../../../actions/playlistAction';
import { getSongsLibrary } from '../../../actions/libraryAction';

const PlayListPage = ({
  currentPlayList,
  getCurrentPlayList,
  getSongsLibrary,
}) => {
  let { id } = useParams();
  const { title, picture, description, tracks, fans } = currentPlayList;

  useEffect(() => {
    window.scrollTo(0, 0);
    getCurrentPlayList(id);
    getSongsLibrary();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.topContent}>
        <div className={styles.topLeftCol}>
          <img src={picture} width='220px' height='220px' />
        </div>

        <div className={styles.topRightCol}>
          <div className={styles.captionText}>
            <Typography variant='caption' display='block' gutterBottom>
              Playlist
            </Typography>

            <SubTitles
              primaryTitle={title}
              tabsTitle={[
                description,
                `${tracks.length} songs`,
                `Followers: ${fans}`,
              ]}
            />

            <div className={styles.actionBtn}>
              <ActionButtonGroup playListId={id} />
            </div>
          </div>
          <div className={styles.closeBtn}>
            <IconButton
              aria-label='close playlist'
              component='span'
              style={{ background: 'none', color: '#fff' }}
            >
              <ClearOutlined />
            </IconButton>
          </div>
        </div>
      </div>

      <div className={styles.bottomContent}>
        <DataGridSongs songs={tracks} />
      </div>
    </div>
  );
};

const SubTitles = ({ primaryTitle, tabsTitle }) => {
  return (
    <Fragment>
      <Typography variant='h3' gutterBottom>
        {primaryTitle}
      </Typography>

      {tabsTitle.map((label, index) => (
        <Typography variant='body2' key={label + index} gutterBottom>
          {label}
        </Typography>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentPlayList: state.playlist.currentPlayList,
});

export default connect(mapStateToProps, {
  getCurrentPlayList,
  getSongsLibrary,
})(PlayListPage);
