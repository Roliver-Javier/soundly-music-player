import {
  SET_CURRENT_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CATEGORIES_PLAYLIST,
  TOGGLE_PLAYING,
  GET_RANDOM_ARTIST_LIST,
  GET_TOP_TEN_PLAYLIST,
  GET_COVER,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };

    case SET_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlayList: action.payload,
      };

    case SET_CATEGORIES_PLAYLIST:
      return {
        ...state,
        categoriesPlaylist: [...action.payload],
      };
    case GET_RANDOM_ARTIST_LIST:
      return {
        ...state,
        randomArtistsList: [...action.payload],
      };
    case GET_TOP_TEN_PLAYLIST:
      return {
        ...state,
        topTenPlaylist: [...action.payload],
      };

    case GET_COVER:
      return {
        ...state,
        cover: { ...action.payload },
      };
    default:
      return state;
  }
};
