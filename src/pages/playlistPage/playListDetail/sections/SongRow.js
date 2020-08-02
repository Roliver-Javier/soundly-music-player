import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import AddOutlined from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import styles from './songRow.module.css';

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

export default SongRow;
