import React from 'react';
import AppContainer from './AppContainer';
import PlayerState from '../context/PlayerState';

function App() {
  return (
    <PlayerState>
      <AppContainer />
    </PlayerState>
  );
}

export default App;
