import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fireConfig from '../config';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
firebase.initializeApp(fireConfig);

function App() {
  const rfConfig = {
    userProfile: 'users',
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        dispatch={store.dispatch}
        config={rfConfig}
        createFirestoreInstance={createFirestoreInstance}
      >
        <AppContainer />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
