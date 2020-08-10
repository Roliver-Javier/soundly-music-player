import { getPlayList, getPlaylistByCategories } from '../apis/QueryApi';
import {
  TOGGLE_PLAYING,
  SET_CURRENT_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CATEGORIES_PLAYLIST,
  GET_TOP_TEN_PLAYLIST,
  GET_RANDOM_ARTIST_LIST,
  GET_COVER,
} from './types';

export const togglePlaying = (isPlaying) => async (dispatch) =>
  dispatch({ type: TOGGLE_PLAYING, payload: !isPlaying });

export const getCurrentSong = (song, artist, title, picture) => async (
  dispatch
) =>
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
export const getCurrentPlayList = (playlistCode) => async (dispatch) => {
  const res = await getPlayList(playlistCode);

  return dispatch({
    type: SET_CURRENT_PLAYLIST,
    payload: {
      title: res.data.title,
      picture: res.data.picture_xl,
      description: res.data.description,
      tracks: res.data.tracks.data,
      fans: res.data.fans,
    },
  });
};

export const getCategoriesPlaylist = () => async (dispatch) => {
  const res = await getPlaylistByCategories();
  return dispatch({
    type: SET_CATEGORIES_PLAYLIST,
    payload: res.map((item) => item.data),
  });
};
export const getRandomArtistList = () => async (dispatch) => {
  const res = await getPlayList('3155776842');
  const data = res.data.tracks.data.reverse();
  dispatch({
    type: GET_RANDOM_ARTIST_LIST,
    payload: data,
  });
};

export const getTopTenPlaylist = () => async (dispatch) => {
  const res = await getPlayList('3155776842');
  const data = res.data.tracks.data.slice(0, 10);
  return dispatch({
    type: GET_TOP_TEN_PLAYLIST,
    payload: data,
  });
};

export const getCover = () => async (dispatch) => {
  const res = await getPlayList('3155776842');
  const randomNum = Math.floor(
    Math.random() * (res.data.tracks.data.length / 2)
  );
  const data = res.data.tracks.data[randomNum];
  return dispatch({
    type: GET_COVER,
    payload: data,
  });
};
