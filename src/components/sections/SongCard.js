import React, { useEffect, useState, useContext } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import SongCardItem from './SongCardItem';
import CategoryCardItem from './CategoryCardItem';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Slide } from 'pure-react-carousel';
import PlayerContext from '../../context/playerContext';
import { useHistory } from 'react-router-dom';

const SongCard = ({ wide, large, songs, imageType, itemToShow }) => {
  const { setCurrentSong } = useContext(PlayerContext);
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
              setCurrentSong(
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
          />
        );
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

export default SongCard;
