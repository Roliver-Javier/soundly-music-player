import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import libraryReducer from './libraryReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  playlist: playlistReducer,
  library: libraryReducer,
  firebase: firebaseReducer,
});
