import React, { Suspense, lazy } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

let previousLocation;
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const MaxMusicArt = lazy(() => import('../components/player/MaxMusicArt'));
const PlayListPage = lazy(() => import('../pages/playlistPage/PlayListPage'));

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
    if (location.pathname == '/play') {
      return previousLocation;
    } else {
      return location;
    }
  };

  return (
    <div>
      <Suspense fallback={circularLoader}>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => {
              return <HomePage />;
            }}
          />
          <Route
            exact
            path='/player'
            render={(props) => {
              return <MaxMusicArt />;
            }}
          />
          <Route
            exact
            path='/playlist/:id'
            render={(props) => {
              return <PlayListPage />;
            }}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(CurrentSection);
