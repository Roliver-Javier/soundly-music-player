import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPlayListToLibrary } from '../../../../actions/libraryAction';

const ActionButtonGroup = ({
  playListId,
  currentPlayList,
  addPlayListToLibrary,
  playListLibrary,
}) => {
  const addPlayList = () => {
    addPlayListToLibrary({ ...currentPlayList, id: playListId });
    alert('SE AGREGO A TU LIBRERIA');
  };

  useEffect(() => {
    console.log('PRUEBA', playListLibrary);
  }, [playListLibrary]);

  return (
    <Fragment>
      <Button
        style={{ backgroundColor: '#1DB954', color: '#fff' }}
        variant='contained'
      >
        Play
      </Button>
      {!currentPlayList.isPlaylistAdded && (
        <Button
          style={{ borderColor: '#fff', color: '#fff' }}
          variant='outlined'
          onClick={addPlayList}
        >
          Add to Library
        </Button>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentPlayList: state.playlist.currentPlayList,
  playListLibrary: state.library.playlists,
});
export default connect(mapStateToProps, { addPlayListToLibrary })(
  ActionButtonGroup
);
