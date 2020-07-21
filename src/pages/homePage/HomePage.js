import React, { useEffect, useRef, useState } from 'react';
import SongCard from '../../components/sections/SongCard';
import styles from './home.module.css';
import { getPlayList, getPlaylistByCategories } from '../../apis/QueryApi';
import CoverArt from '../../components/sections/CoverArt';
import Banner from '../../components/sections/Banner';

const HomePage = (props) => {
  const [topTenPlaylist, setTopTenPlaylist] = useState([]);
  const [categoriesPlaylist, setCategoriesPlaylist] = useState([]);
  const [cover, setCover] = useState(null);
  const [randomArtistsList, setRandomArtistList] = useState([]);

  useEffect(() => {
    getPlaylistByCategories().then((res) => {
      const data = res.map((item) => item.data);
      setCategoriesPlaylist(data);
    });
  }, []);

  useEffect(() => {
    getPlayList().then((res) => {
      setTopTenPlaylist(res.data.tracks.data.slice(0, 10));
      setRandomArtistList(res.data.tracks.data.reverse());
      const randomNum = Math.floor(
        Math.random() * (res.data.tracks.data.length / 2)
      );
      setCover(res.data.tracks.data[randomNum]);
      console.log('cover:', res.data);
    });
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        {cover && (
          <CoverArt
            image={cover.album.cover_xl}
            artist={cover.artist.name}
            title={cover.title}
            albumId={cover.album.id}
          />
        )}
        <div className={styles.col}>
          <label className={styles.wrapper__title}>Top 10 Artist</label>
          <SongCard
            wide={250}
            large={420}
            songs={topTenPlaylist}
            imageType='album'
            itemToShow={3.6}
          />
        </div>
        <div className={styles.col}>
          <label className={styles.wrapper__title}>Playlist</label>
          <SongCard
            wide={100}
            large={50}
            songs={categoriesPlaylist}
            imageType='picture'
            itemToShow={4.6}
          />
        </div>

        <div className={styles.col}>
          <Banner />
        </div>
      </div>
      {/* <MiniMusicArt
        playerPause={{
          player: player,
          minimized: 'minimized',
          audioState: 'paused',
        }}
      /> */}
    </>
  );
};

export default HomePage;
