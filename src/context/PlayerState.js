import React, { useReducer } from 'react';
import PlayerContext from './playerContext';
import PlayerReducer from './playerReducer';
import { getPlayList, getPlaylistByCategories } from '../apis/QueryApi';
import {
  TOGGLE_PLAYING,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_CATEGORIES_PLAYLIST,
  GET_TOP_TEN_PLAYLIST,
  GET_RANDOM_ARTIST_LIST,
  GET_COVER,
} from './types';

const PlayerState = (props) => {
  const initialState = {
    audio: null,
    cover: null,
    repeat: false,
    random: false,
    playing: true,
    loading: false,
    currentPlayList: {
      title: '',
      picture: '',
      description: '',
    },
    currentSong: {
      title: '',
      artist: '',
      title: '',
      picture: '',
      preview: '',
    },
    topTenPlaylist: [],
    randomArtistsList: [],
    categoriesPlaylist: [],
    songs: [],
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const togglePlaying = () =>
    dispatch({ type: TOGGLE_PLAYING, payload: !state.playing });

  const getCurrentPlayList = async (playlistCode) => {
    const res = await getPlayList(playlistCode);
    dispatch({
      type: SET_CURRENT_PLAYLIST,
      payload: res.data,
    });
  };

  const getCurrentSong = (song, artist, title, picture) =>
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

  const getCategoriesPlaylist = async () => {
    const res = await getPlaylistByCategories();
    dispatch({
      type: SET_CATEGORIES_PLAYLIST,
      payload: res.map((item) => item.data),
    });
  };

  const getTopTenPlaylist = async () => {
    const res = await getPlayList('3155776842');
    const data = res.data.tracks.data.slice(0, 10);
    dispatch({
      type: GET_TOP_TEN_PLAYLIST,
      payload: data,
    });
  };

  const getCover = async () => {
    const res = await getPlayList('3155776842');
    const randomNum = Math.floor(
      Math.random() * (res.data.tracks.data.length / 2)
    );
    const data = res.data.tracks.data[randomNum];
    dispatch({
      type: GET_COVER,
      payload: data,
    });
  };

  const getRandomArtistList = async () => {
    const res = await getPlayList('3155776842');
    const data = res.data.tracks.data.reverse();
    dispatch({
      type: GET_RANDOM_ARTIST_LIST,
      payload: data,
    });
  };

  const handleEnd = () => {
    togglePlaying();
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong: state.currentSong,
        currentPlayList: state.currentPlayList,
        categoriesPlaylist: state.categoriesPlaylist,
        topTenPlaylist: state.topTenPlaylist,
        randomArtistsList: state.randomArtistsList,
        songs: state.songs,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        cover: state.cover,
        togglePlaying,
        getCurrentSong,
        getCurrentPlayList,
        getCategoriesPlaylist,
        getTopTenPlaylist,
        getRandomArtistList,
        getCover,
        handleEnd,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
