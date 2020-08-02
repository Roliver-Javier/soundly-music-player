import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import libraryReducer from './libraryReducer';

export default combineReducers({
  playlist: playlistReducer,
  library: libraryReducer,
});
