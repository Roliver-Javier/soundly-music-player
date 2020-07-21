import React from 'react';
import styles from './drawer.module.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MusicNote from '@material-ui/icons/MusicNote';
import Mic from '@material-ui/icons/Mic';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SubscribeCard from '../sections/SubscribeCard';
import Typography from '@material-ui/core/Typography';

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

        <ListItem button>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary='Music' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mic />
          </ListItemIcon>
          <ListItemText primary='Shows' />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
          <ListItemText primary='Explore' />
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={styles.nested}>
              <ListItemText>
                <Typography variant='caption' display='block' gutterBottom>
                  Playlist
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button className={styles.nested}>
              <ListItemText>
                <Typography variant='caption' display='block' gutterBottom>
                  Albums
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <SubscribeCard />
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerMenu;
