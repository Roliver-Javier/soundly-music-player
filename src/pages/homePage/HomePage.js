import React, { useEffect } from 'react';
import SongCard from '../../components/sections/SongCard';
import styles from './home.module.css';
import CoverArt from '../../components/sections/CoverArt';
import Banner from '../../components/sections/Banner';
import { connect } from 'react-redux';
import {
  getRandomArtistList,
  getTopTenPlaylist,
  getCover,
  getCategoriesPlaylist,
} from '../../actions/playlistAction';

const HomePage = ({
  cover,
  categoriesPlaylist,
  topTenPlaylist,
  randomArtistsList,
  getCategoriesPlaylist,
  getTopTenPlaylist,
  getRandomArtistList,
  getCover,
}) => {
  useEffect(() => {
    getCategoriesPlaylist();
    getTopTenPlaylist();
    getRandomArtistList();
    getCover();
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        {cover && (
          <CoverArt
            image={cover.album.cover_xl}
            artist={cover.artist.name}
            title={cover.title}
            showAlbum
            showActionBtn
            albumId={cover.album.id}
            description={`${cover.artist.name} walks us through his world new album, ${cover.title} .`}
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
            large={100}
            songs={categoriesPlaylist}
            imageType='picture'
            itemToShow={4.5}
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

const mapStateToProps = (state) => ({
  cover: state.playlist.cover,
  categoriesPlaylist: state.playlist.categoriesPlaylist,
  topTenPlaylist: state.playlist.topTenPlaylist,
  randomArtistsList: state.playlist.randomArtistsList,
});

export default connect(mapStateToProps, {
  getRandomArtistList,
  getCategoriesPlaylist,
  getTopTenPlaylist,
  getCover,
})(HomePage);
