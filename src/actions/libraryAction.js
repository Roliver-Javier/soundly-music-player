import {
  ADD_PLAYLIST_TO_LIBRARY,
  FIND_PLAYLIST_FROM_LIBRARY,
  FIND_SONGS_FROM_LIBRARY,
  ADD_SONG_TO_LIBRARY,
  CLEAR_CURRENT_PLAYLIST_LIBRARY,
  REMOVE_SONG_LIBRARY,
} from './types';

export const addPlayListToLibrary = (playlist) => (
  dispatch,
  getState,
  getFirebase
) => {
  const db = getFirebase().database().ref('users/1123/library/playlists');
  playlist = { ...playlist, isAdded: true };
  return db.push(playlist).then((res) => {
    dispatch({
      type: ADD_PLAYLIST_TO_LIBRARY,
      payload: {
        ...playlist,
        key: res.key,
      },
    });
  });
};
export const addSongToLibrary = (song) => (dispatch, getState, getFirebase) => {
  const db = getFirebase().database().ref('users/1123/library/songs');
  song = { ...song, isAdded: true };
  return db.push(song).then((res) => {
    dispatch({
      type: ADD_SONG_TO_LIBRARY,
      payload: {
        ...song,
        key: res.key,
      },
    });
  });
};

export const getPlayListLibrary = (id) => (dispatch, getState, getFirebase) => {
  const db = getFirebase().database().ref('users/1123/library/playlists');
  clearCurrentPlaylist();
  return db
    .orderByChild('id')
    .equalTo(id)
    .once('value', (snapshot) => {
      if (snapshot.exists()) {
        dispatch({
          type: FIND_PLAYLIST_FROM_LIBRARY,
          payload: {
            ...Object.values(snapshot.val())[0],
            key: Object.keys(snapshot.val())[0],
          },
        });
      }
    });
};
export const getSongsLibrary = () => (dispatch, getState, getFirebase) => {
  return getFirebase()
    .database()
    .ref('users/1123/library/songs')
    .on('value', (snapshot) => {
      const keys = Object.keys(snapshot.val());
      const values = Object.values(snapshot.val());
      values.map((val, index) => {
        val.key = keys[index];
        return val;
      });
      if (snapshot.exists()) {
        dispatch({
          type: FIND_SONGS_FROM_LIBRARY,
          payload: values,
        });
      }
    });
};

export const removeSongFromLibrary = (id) => (
  dispatch,
  getState,
  getFirebase
) => {
  const songs = getState().library.songs;
  const songKey = songs.find((song) => song.id === id).key;
  const db = getFirebase()
    .database()
    .ref(`users/1123/library/songs/${songKey}`);
  return db.remove().then(() => {
    dispatch({
      type: REMOVE_SONG_LIBRARY,
      payload: getState().library.songs.filter((song) => song.key !== songKey),
    });
  });
};
export const clearCurrentPlaylist = () => (dispatch) => {
  return dispatch({
    type: CLEAR_CURRENT_PLAYLIST_LIBRARY,
  });
};
