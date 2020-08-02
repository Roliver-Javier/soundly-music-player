import { ADD_PLAYLIST_TO_LIBRARY, ADD_SONG_TO_LIBRARY } from './types';
export const addPlayListToLibrary = (playlist) => async (dispatch) => {
  return dispatch({
    type: ADD_PLAYLIST_TO_LIBRARY,
    payload: playlist,
  });
};

export const addSongToLibrary = (song) => async (dispatch) =>
  dispatch({
    type: ADD_SONG_TO_LIBRARY,
    payload: song,
  });
