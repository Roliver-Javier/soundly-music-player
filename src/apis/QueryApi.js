import axios from 'axios';

const query = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '8614af7b39mshc8d1d2165688e1dp1408cdjsndbe44aae29b7',
  },
});

export const getPlayList = async (playListId) => {
  return await query.get(`/playlist/${playListId}`);
};

export const getAlbum = async (id) => {
  return await query.get(`/album/${id}`);
};

export const getPodcastList = async () => {
  const podcastList = [
    query.get('/playlist/5174094184'),
    query.get('/playlist/2098157264'),
    query.get('/playlist/5014647904'),
    query.get('/playlist/1273315391'),
    query.get('/playlist/760160361'),
    query.get('/playlist/1440614715'),
  ];
  return await axios.all([...podcastList]);
};

export const getPlaylistByCategories = async () => {
  const categoriesReq = [
    query.get('/playlist/5174094184'),
    query.get('/playlist/2098157264'),
    query.get('/playlist/5014647904'),
    query.get('/playlist/1273315391'),
    query.get('/playlist/760160361'),
    query.get('/playlist/1440614715'),
  ];
  return await axios.all([...categoriesReq]);
};
