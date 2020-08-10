import React, { useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import AddOutlined from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import styles from './songRow.module.css';
import { connect } from 'react-redux';
import {
  addSongToLibrary,
  removeSongFromLibrary,
} from '../../../../actions/libraryAction';

const SongRow = ({
  row,
  currentSong,
  librarySongs,
  addSongToLibrary,
  removeSongFromLibrary,
  getSingleSongLibrary,
}) => {
  const [selected, setSelected] = React.useState(false);
  const { title, id, album, artist, duration, time_add } = row;
  const saveSongToLibrary = () => {
    if (!selected) {
      addSongToLibrary(row);
    } else {
      removeSongFromLibrary(row.id);
    }

    setSelected(!selected);
  };
  useEffect(() => {
    const song = librarySongs.find((song) => song.id === id);
    if (song) setSelected(true);
  }, [librarySongs, id]);

  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        <ToggleButton
          value='check'
          selected={selected}
          className={styles.toggleBtn}
          onChange={() => saveSongToLibrary()}
        >
          {selected && <CheckIcon className={styles.toggleSelected} />}
          {!selected && <AddOutlined />}
        </ToggleButton>
      </TableCell>
      <TableCell>
        <Typography variant='caption' display='block' gutterBottom>
          {title}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='caption' display='block' gutterBottom>
          {artist.name}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='caption' display='block' gutterBottom>
          {album.title}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='caption' display='block' gutterBottom>
          {time_add}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='caption' display='block' gutterBottom>
          {duration}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.library.currentSong,
  librarySongs: state.library.songs,
});

export default connect(mapStateToProps, {
  addSongToLibrary,
  removeSongFromLibrary,
})(SongRow);
