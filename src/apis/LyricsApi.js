import axios from 'axios';
import { LYRICS_MUSIC_MATCH_API_KEY } from '../config';

const BASE_URL = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get';

export const getLyricsByArtistAndTrack = async (track, artist) => {
  return await axios.get(BASE_URL, {
    params: {
      format: 'jsonp',
      callback: 'callback',
      q_track: track,
      q_artist: artist,
      apikey: 'a096d62a6838a21eb2102780fb264553',
    },
  });
};

export default { getLyricsByArtistAndTrack };
