import React, { Fragment, useState, useEffect } from 'react';
import styles from './library.module.css';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './sections/TabPanel';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SubscribeCard from '../../components/sections/SubscribeCard';
import { Typography } from '@material-ui/core/';
import PlaylistCardItem from './sections/PlaylistCardItem';
import {
  getPlaylistLibrary,
  getSongsLibrary,
} from '../../actions/libraryAction';
import Podcast from './sections/Podcast';

const LibraryPage = ({
  playlistLibraries,
  songListLibraries,
  getPlaylistLibrary,
  getSongsLibrary,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };
  useEffect(() => {
    getPlaylistLibrary();
    getSongsLibrary();
  }, [getPlaylistLibrary, getSongsLibrary]);

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
          <Tab label='Songs' {...a11yProps(1)} />
          <Tab label='Podcasts' {...a11yProps(2)} />
        </Tabs>
      </div>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TabContent title='Playlist' showPublicity>
            {playlistLibraries.map((item) => (
              <PlaylistCardItem
                data={item}
                isSong={false}
                showTracks
                tracks={item.tracks}
              />
            ))}
          </TabContent>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TabContent title='Songs'>
            {songListLibraries.map((item) => (
              <PlaylistCardItem data={item} isSong showTracks={false} />
            ))}
          </TabContent>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TabContent title='Podcasts'>
            <Podcast />
          </TabContent>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const TabContent = ({ title, showPublicity, children }) => {
  return (
    <div className={styles.wrapContainer}>
      <Typography variant='h6' gutterBottom className={styles.title}>
        {title}
      </Typography>
      <div className={styles.wrapContainer}>
        {showPublicity && (
          <SubscribeCard className={styles.subscribeContainer} />
        )}

        <Fragment>{children}</Fragment>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playlistLibraries: state.library.playlists,
  songListLibraries: state.library.songs,
});

export default connect(mapStateToProps, {
  getSongsLibrary,
  getPlaylistLibrary,
})(LibraryPage);
