import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `soundly-d30c8.firebaseapp.com`,
  databaseURL: `https://soundly-d30c8.firebaseio.com`,
  projectId: `soundly-d30c8`,
  storageBucket: `soundly-d30c8.appspot.com`,
  messagingSenderId: `732274802077`,
  appId: `1:732274802077:web:c58a1f673af2d5eeb2c374`,
};

const LYRICS_MUSIC_MATCH_API_KEY = `${process.env.MUSIC_MATCH_API_KEY}`;

export { firebaseConfig, LYRICS_MUSIC_MATCH_API_KEY };
