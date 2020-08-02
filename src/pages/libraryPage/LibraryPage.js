import React, { useState } from 'react';
import styles from './library.module.css';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SongCardItem from '../../components/sections/SongCardItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LibraryPage = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <ArrowBackIosOutlined className={styles.directionArrow} />
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          style={{ color: 'white' }}
          variant='fullWidth'
          aria-label='Menu bar'
        >
          <Tab label='Playlists' {...a11yProps(0)} />
          <Tab label='Podcasts' {...a11yProps(1)} />
          <Tab label='Artists' {...a11yProps(2)} />
          <Tab label='Albums' {...a11yProps(2)} />
        </Tabs>
      </div>
      <div className={styles.wrapContainer}>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography variant='h6' gutterBottom className={styles.title}>
              PlayLists
            </Typography>
            {/* <SongCardItem
              image={obj.album.cover_big}
              artist={obj.artist.name}
              song={obj.title}
              large={large}
              clickAction={() => {
                getCurrentSong(
                  obj.preview,
                  obj.artist.name,
                  obj.title,
                  obj.album.cover_big
                );
                history.push('/player');
              }}
            /> */}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default LibraryPage;
