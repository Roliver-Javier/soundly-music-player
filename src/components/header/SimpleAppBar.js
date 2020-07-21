import React from 'react';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide,
} from '@material-ui/core/';
import { Menu, Search } from '@material-ui/icons/';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 100,
  },
  input: {
    color: '#fff',
  },
};

const SimpleAppBar = () => {
  return (
    <>
      <AppBar
        id='navbar'
        style={{ background: 'transparent' }}
        position='sticky'
      >
        <Toolbar>
          <IconButton color='inherit' aria-label='Search'>
            <Search />
            <Typography variant='p' color='inherit' style={styles.title}>
              Buscar
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SimpleAppBar;
