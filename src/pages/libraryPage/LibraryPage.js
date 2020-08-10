import React, { Fragment, useState } from 'react';
import styles from './library.module.css';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './sections/TabPanel';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SubscribeCard from '../../components/sections/SubscribeCard';
import Search from '@material-ui/icons/Search';
import { IconButton, Typography } from '@material-ui/core/';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

const LibraryPage = ({ playlistLibraries }) => {
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
          <Tab label='Songs' {...a11yProps(1)} />
          <Tab label='Artists' {...a11yProps(2)} />
        </Tabs>
      </div>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TabContent
            title='Playlist'
            showTracks
            showPublicity
            data={playlistLibraries}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TabContent title='Songs' data={[]} showTracks={false} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TabContent title='Artists' data={[]} showTracks={false} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const TabContent = ({ title, showTracks, showPublicity, data }) => {
  return (
    <div className={styles.wrapContainer}>
      <Typography variant='h6' gutterBottom className={styles.title}>
        {title}
      </Typography>
      <div className={styles.wrapContainer}>
        {showPublicity && (
          <SubscribeCard className={styles.subscribeContainer} />
        )}
        {data.map((item) => (
          <Fragment>
            <PlayListCard
              picture={item.picture}
              title={item.title}
              showTracks={showTracks}
              tracks={item.tracks}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
const PlayListCard = ({ title, picture, showTracks, tracks }) => {
  const [IsMouseInside, setIsMouseInside] = useState(false);

  const mouseEnter = () => {
    setIsMouseInside(true);
  };
  const mouseLeave = () => {
    setIsMouseInside(false);
  };
  return (
    <Card
      className={styles.cardItem}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={picture}
          title={title}
        />
        <CardContent className={styles.cardContent}>
          <div>
            <Typography
              gutterBottom
              variant='p'
              component='p'
              className={styles.title}
            >
              {title}
            </Typography>
            {showTracks && (
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className={styles.title}
              >
                {`(${tracks.length}) songs`}
              </Typography>
            )}
          </div>
          {IsMouseInside && (
            <IconButton
              color='inherit'
              aria-label='Search'
              className={styles.playBtn}
            >
              <PlayCircleOutline
                style={{
                  color: '#1db954',
                }}
              />
            </IconButton>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  playlistLibraries: state.library.playlists,
});

export default connect(mapStateToProps, {})(LibraryPage);
