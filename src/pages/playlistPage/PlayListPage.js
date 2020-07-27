import React, { useEffect, useContext } from 'react';
import CoverArt from '../../components/sections/CoverArt';
import { useParams } from 'react-router-dom';
import PlayerContext from '../../context/playerContext';

const PlayListPage = () => {
  let { id } = useParams();
  const { currentPlayList, getCurrentPlayList } = useContext(PlayerContext);
  const { title, description, picture_xl } = currentPlayList;
  useEffect(() => {
    getCurrentPlayList(id);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CoverArt
        title={title}
        showActionBtn={false}
        image={picture_xl}
        showAlbum={false}
        description={description}
        artist=''
      />
    </div>
  );
};

export default PlayListPage;
