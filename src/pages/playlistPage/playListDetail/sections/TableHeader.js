import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import ScheduleOutlined from '@material-ui/icons/ScheduleOutlined';
import DateRangeOutlined from '@material-ui/icons/DateRangeOutlined';

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='center'></TableCell>
        <TableCell>
          <Typography
            variant='caption'
            style={{ fontSize: 12 }}
            display='block'
            gutterBottom
          >
            TITLE
          </Typography>
        </TableCell>
        <TableCell align='center'>
          <Typography
            variant='caption'
            style={{ fontSize: 12 }}
            display='block'
            gutterBottom
          >
            ARTIST
          </Typography>
        </TableCell>
        <TableCell align='center'>
          <Typography
            variant='caption'
            style={{ fontSize: 12 }}
            display='block'
            gutterBottom
          >
            ALBUM
          </Typography>
        </TableCell>
        <TableCell align='center'>
          <DateRangeOutlined style={{ fontSize: 16 }} />
        </TableCell>
        <TableCell align='center'>
          <ScheduleOutlined style={{ fontSize: 16 }} />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
