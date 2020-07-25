import React, { useReducer } from 'react';
import PlayerContext from './playerContext';
import PlayerReducer from './playerReducer';
import { TOGGLE_PLAYING, SET_CURRENT_SONG } from './types';

const PlayerState = (props) => {
  const initialState = {
    currentSong: {
      title: '',
      artist: '',
      title: '',
      picture: '',
      preview: '',
    },
    songs: [],
    repeat: false,
    random: false,
    playing: true,
    loading: false,
    audio: null,
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const togglePlaying = () =>
    dispatch({ type: TOGGLE_PLAYING, payload: !state.playing });

  const setCurrentSong = (song, artist, title, picture) =>
    dispatch({
      type: SET_CURRENT_SONG,
      payload: {
        title,
        artist,
        title,
        picture,
        preview: song,
      },
    });

  const handleEnd = () => {
    togglePlaying();
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.songs,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        togglePlaying,
        setCurrentSong,
        handleEnd,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
