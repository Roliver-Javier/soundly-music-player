import {
  TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CATEGORIES_PLAYLIST,
  GET_RANDOM_ARTIST_LIST,
  GET_TOP_TEN_PLAYLIST,
  GET_COVER,
} from '../actions/types';

const initialState = {
  audio: null,
  repeat: false,
  playing: true,
  cover: null,
  random: false,
  loading: false,

  currentPlayList: {
    title: '',
    picture: '',
    description: '',
    tracks: [],
    fans: 0,
    id: 0,
  },
  currentSong: {
    title: '',
    artist: '',
    picture: '',
    preview: '',
  },
  topTenPlaylist: [],
  randomArtistsList: [],
  categoriesPlaylist: [],
  songs: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
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
