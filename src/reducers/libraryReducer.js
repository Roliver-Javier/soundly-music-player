import {
  ADD_PLAYLIST_TO_LIBRARY,
  ADD_SONG_TO_LIBRARY,
  FIND_PLAYLIST_FROM_LIBRARY,
  FIND_SONGS_FROM_LIBRARY,
  CLEAR_CURRENT_PLAYLIST_LIBRARY,
  REMOVE_SONG_LIBRARY,
  FIND_PLAYLIST_ARRAY_FROM_LIBRARY,
} from '../actions/types';

const initialState = {
  currentPlayList: {},
  currentSong: {},
  currentArtist: {},
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
        currentPlayList: { ...action.payload },
      };
    case ADD_SONG_TO_LIBRARY:
      return {
        ...state,
        songs: [...state.songs, action.payload],
        currentSong: { ...action.payload },
      };
    case FIND_PLAYLIST_FROM_LIBRARY:
      return {
        ...state,
        currentPlayList: {
          ...action.payload,
        },
      };
    case FIND_SONGS_FROM_LIBRARY:
      return {
        ...state,
        songs: action.payload,
      };

    case FIND_PLAYLIST_ARRAY_FROM_LIBRARY:
      return {
        ...state,
        playlists: action.payload,
      };

    case REMOVE_SONG_LIBRARY:
      return {
        ...state,
        songs: [...action.payload],
      };

    case CLEAR_CURRENT_PLAYLIST_LIBRARY:
      return {
        ...state,
        currentPlayList: {},
      };
    default:
      return state;
  }
};
