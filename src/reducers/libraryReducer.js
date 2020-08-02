import { ADD_PLAYLIST_TO_LIBRARY, ADD_SONG_TO_LIBRARY } from '../actions/types';

const initialState = {
  playlists: [],
  songs: [],
  artists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLIST_TO_LIBRARY:
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    case ADD_SONG_TO_LIBRARY:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };

    default:
      return state;
  }
};