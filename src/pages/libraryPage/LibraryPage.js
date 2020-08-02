import React, { Fragment, useState } from 'react';
import styles from './library.module.css';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabPanel from './sections/TabPanel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SubscribeCard from '../../components/sections/SubscribeCard';

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
          <Tab label='Podcasts' {...a11yProps(1)} />
          <Tab label='Artists' {...a11yProps(2)} />
          <Tab label='Albums' {...a11yProps(2)} />
        </Tabs>
      </div>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={styles.wrapContainer}>
            <Typography variant='h6' gutterBottom className={styles.title}>
              PlayLists
            </Typography>
            <div className={styles.wrapContainer}>
              <SubscribeCard className={styles.subscribeContainer} />
              {playlistLibraries.map((playlist) => (
                <Fragment>
                  <PlayListCard
                    picture={playlist.picture}
                    title={playlist.title}
                    tracks={playlist.tracks}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const PlayListCard = ({ title, picture, tracks }) => {
  return (
    <Card className={styles.cardItem}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={picture}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='p'
            component='p'
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={styles.title}
          >
            {`(${tracks.length}) songs`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  playlistLibraries: state.library.playlists,
});

export default connect(mapStateToProps, {})(LibraryPage);
