import React from 'react';
import styles from './drawer.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import MusicNote from '@material-ui/icons/MusicNote';
import Mic from '@material-ui/icons/Mic';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const DrawerMenu = () => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        className={styles.root}
      >
        <Link to='/' className={styles.textMenu}>
          <ListItem>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/medium-blog-4c193.appspot.com/o/logo2.png?alt=media&token=0c7d358e-5747-4ecb-8bef-a923021788b8'
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </ListItem>
        </Link>

        <Link to='/' className={styles.textMenu}>
          <ListItem button>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText primary='Music' />
          </ListItem>
        </Link>
        <Link to='/library' className={styles.textMenu}>
          <ListItem button>
            <ListItemIcon>
              <Mic />
            </ListItemIcon>
            <ListItemText primary='My Library' />
          </ListItem>
        </Link>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
          <ListItemText primary='Explore' />
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Link to='/playlist' className={styles.textMenu}>
              <ListItem button className={styles.nested}>
                <ListItemText>
                  <Typography variant='caption' display='block' gutterBottom>
                    Playlist
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
            <ListItem button className={styles.nested}>
              <ListItemText>
                <Typography variant='caption' display='block' gutterBottom>
                  Albums
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
        {/* <ListItem>
          <SubscribeCard />
        </ListItem> */}
      </List>
    </div>
  );
};

export default DrawerMenu;
