import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from './TableHeader';
import TableBody from '@material-ui/core/TableBody';
import SongRow from './SongRow';
import Table from '@material-ui/core/Table';

const DataGridSongs = ({ songs }) => {
  return (
    <TableContainer>
      <Table aria-label='playlist'>
        <TableHeader />
        <TableBody>
          {songs.map((row) => (
            <SongRow key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataGridSongs;
