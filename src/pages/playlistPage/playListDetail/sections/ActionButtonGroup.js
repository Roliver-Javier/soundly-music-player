import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  addPlayListToLibrary,
  getPlayListLibrary,
  clearCurrentPlaylist,
} from '../../../../actions/libraryAction';
import Snackbar from '@material-ui/core/Snackbar';

const ActionButtonGroup = ({
  playListId,
  currentPlayList,
  currentLibraryPlayList,
  addPlayListToLibrary,
  getPlayListLibrary,
  clearCurrentPlaylist,
}) => {
  const [open, setOpen] = useState(false);
  const addPlayList = () => {
    addPlayListToLibrary({ ...currentPlayList, id: playListId });
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
  };

  useEffect(() => {
    getPlayListLibrary(playListId);
    return () => {
      clearCurrentPlaylist();
    };
  }, []);

  return (
    <Fragment>
      <Button
        style={{ backgroundColor: '#1DB954', color: '#fff' }}
        variant='contained'
      >
        Play
      </Button>

      <Button
        style={{
          borderColor: `${currentLibraryPlayList.isAdded ? '#666' : '#fff'}`,
          color: `${currentLibraryPlayList.isAdded ? '#666' : '#fff'}`,
        }}
        variant='outlined'
        onClick={addPlayList}
        disabled={currentLibraryPlayList.isAdded}
      >
        {currentLibraryPlayList.isAdded ? 'Saved' : 'Add to Library'}
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message='Playlist saved!'
        key={'bottom' + 'right'}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentPlayList: state.playlist.currentPlayList,
  currentLibraryPlayList: state.library.currentPlayList,
  playListLibrary: state.library.playlists,
});
export default connect(mapStateToProps, {
  addPlayListToLibrary,
  getPlayListLibrary,
  clearCurrentPlaylist,
})(ActionButtonGroup);
