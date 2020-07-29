import React, { useEffect, useContext } from 'react';
import styles from './playlist.module.css';
import { useParams } from 'react-router-dom';
import PlayerContext from '../../context/playerContext';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DateRangeOutlined from '@material-ui/icons/DateRangeOutlined';
import ScheduleOutlined from '@material-ui/icons/ScheduleOutlined';
import CheckIcon from '@material-ui/icons/Check';
import AddOutlined from '@material-ui/icons/AddOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ClearOutlined from '@material-ui/icons/ClearOutlined';
import IconButton from '@material-ui/core/IconButton';

const PlayListPage = () => {
  let { id } = useParams();
  const { currentPlayList, getCurrentPlayList } = useContext(PlayerContext);
  const { title, picture, description, tracks, fans } = currentPlayList;
  useEffect(() => {
    getCurrentPlayList(id);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.topContent}>
        <div className={styles.topLeftCol}>
          <img src={picture} width='220px' height='220px' />
        </div>

        <div className={styles.topRightCol}>
          <div className={styles.captionText}>
            <Typography variant='caption' display='block' gutterBottom>
              Playlist
            </Typography>
            <Typography variant='h3' gutterBottom>
              {title}
            </Typography>
            <Typography variant='body2' gutterBottom>
              {description}
            </Typography>
            <Typography variant='body2' gutterBottom>
              {tracks.length} songs
            </Typography>
            <Typography variant='body2' gutterBottom>
              Followers: {fans}
            </Typography>

            <div className={styles.actionBtn}>
              <Button
                style={{ backgroundColor: '#1DB954', color: '#fff' }}
                variant='contained'
              >
                Play
              </Button>
            </div>
          </div>
          <div className={styles.closeBtn}>
            <IconButton
              aria-label='close playlist'
              component='span'
              style={{ background: 'none', color: '#fff' }}
            >
              <ClearOutlined />
            </IconButton>
          </div>
        </div>
      </div>

      <div className={styles.bottomContent}>
        <DataGridSongs songs={tracks} />
      </div>
    </div>
  );
};
const SongRow = ({ row }) => {
  const [selected, setSelected] = React.useState(false);
  const { title, album, artist, duration, time_add } = row;
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        <ToggleButton
          value='check'
          selected={selected}
          className={styles.toggleBtn}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          {selected && (
            <CheckIcon className={styles.toggleSelected} color='#fff' />
          )}
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
const DataGridSongs = ({ songs }) => {
  return (
    <TableContainer>
      <Table aria-label='playlist'>
        <TableHead>
          <TableRow>
            <TableCell align='center'></TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell align='center'>ARTIST</TableCell>
            <TableCell align='center'>ALBUM</TableCell>
            <TableCell align='center'>
              <DateRangeOutlined color='#fff' />
            </TableCell>
            <TableCell align='center'>
              <ScheduleOutlined color='#fff' />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((row) => (
            <SongRow key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PlayListPage;
