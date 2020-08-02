import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPlayListToLibrary } from '../../../../actions/libraryAction';
import Snackbar from '@material-ui/core/Snackbar';

const ActionButtonGroup = ({
  playListId,
  currentPlayList,
  addPlayListToLibrary,
  playListLibrary,
}) => {
  const [IsPlaylistAdded, setIsPlaylistAdded] = useState(false);
  const [open, setOpen] = useState(false);
  const addPlayList = () => {
    const isAdded = isCurrentPlayListAdded();
    if (!isAdded) {
      addPlayListToLibrary({ ...currentPlayList, id: playListId });
      setOpen(true);
    }
  };

  const isCurrentPlayListAdded = () =>
    playListLibrary.filter((item) => item.id === playListId).length > 0;
  const handleClose = (event) => {
    setOpen(false);
  };
  useEffect(() => {
    setIsPlaylistAdded(isCurrentPlayListAdded());
  }, [playListLibrary]);

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
          borderColor: `${IsPlaylistAdded ? '#666' : '#fff'}`,
          color: `${IsPlaylistAdded ? '#666' : '#fff'}`,
        }}
        variant='outlined'
        onClick={addPlayList}
        disabled={IsPlaylistAdded}
      >
        {IsPlaylistAdded ? 'Saved' : 'Add to Library'}
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
  playListLibrary: state.library.playlists,
});
export default connect(mapStateToProps, {
  addPlayListToLibrary,
})(ActionButtonGroup);
