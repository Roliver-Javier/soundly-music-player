import React, { Suspense, lazy } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { withRouter, Route, Switch } from 'react-router-dom';

let previousLocation;
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const MaxMusicArt = lazy(() => import('../components/player/MaxMusicArt'));
const PlayListPage = lazy(() => import('../pages/playlistPage/PlaylistPage'));
const PlayListDetailPage = lazy(() =>
  import('../pages/playlistPage/playListDetail/PlaylistDetailPage')
);
const LibraryPage = lazy(() => import('../pages/libraryPage/LibraryPage'));

const CurrentSection = ({ history, location }) => {
  const circularLoader = (
    <Grid
      style={{ height: '100vh' }}
      container
      justify='center'
      alignItems='center'
    >
      <CircularProgress />
    </Grid>
  );

  const checkPrevLocation = () => {
    if (location.pathname === '/play') {
      return previousLocation;
    } else {
      return location;
    }
  };

  return (
    <div>
      <Suspense fallback={circularLoader}>
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/player' render={() => <MaxMusicArt />} />
          <Route exact path='/playList' render={() => <PlayListPage />} />
          <Route
            exact
            path='/playlist/:id'
            render={() => <PlayListDetailPage />}
          />
          <Route exact path='/library' render={() => <LibraryPage />} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(CurrentSection);
