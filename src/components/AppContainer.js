import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwipeMenu from './SwipeMenu';
import CurrentSection from './CurrentSection';
import DrawerMenu from './header/DrawerMenu';
import styles from './App.module.css';

const AppContainer = () => {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.menu}>
          <DrawerMenu />
        </div>
        <div className={styles.wrapper}>
          {/* <SimpleAppBar /> */}
          <Route component={CurrentSection} />
          <SwipeMenu />
        </div>
      </div>
    </Router>
  );
};

export default AppContainer;
