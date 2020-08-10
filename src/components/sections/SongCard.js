import React from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import SongCardItem from './SongCardItem';
import CategoryCardItem from './CategoryCardItem';
import { Slide } from 'pure-react-carousel';
import { useHistory } from 'react-router-dom';
import { getCurrentSong } from '../../actions/playlistAction';
import { connect } from 'react-redux';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SongCard = ({
  wide,
  large,
  songs,
  imageType,
  itemToShow,
  getCurrentSong,
}) => {
  let history = useHistory();
  const showSongCard = (obj, index) => {
    switch (imageType) {
      case 'album':
        return (
          <SongCardItem
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
          />
        );
      case 'picture':
        return (
          <CategoryCardItem
            image={obj.picture_xl}
            title={obj.title}
            large={large}
            size={obj.tracks.data.length}
            playlistCode={obj.id}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <div>
      {songs && (
        <CarouselProvider
          naturalSlideWidth={wide}
          naturalSlideHeight={large}
          className='carousel'
          totalSlides={songs.length}
          visibleSlides={itemToShow}
          lockOnWindowScroll
        >
          <Slider>
            {songs.map((item, index) => (
              <Slide key={index} index={index}>
                {showSongCard(item, index)}
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
};

export default connect(null, {
  getCurrentSong,
})(SongCard);
