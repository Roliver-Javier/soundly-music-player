import { SET_CURRENT_SONG, TOGGLE_PLAYING } from './types';

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
    default:
      return state;
  }
};
