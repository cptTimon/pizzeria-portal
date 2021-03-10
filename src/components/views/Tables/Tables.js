import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  {id: '1', type: 'reservation', duration: 5},
  {id: '2', type: 'reservation', duration: 2},
  {id: '3', type: 'event', duration: 6},
  {id: '4', type: 'reservation', duration: 3},
  {id: '5', type: 'event', duration: 4},
  {id: '6', type: 'reservation', duration: 5},
];

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody />
    </Table>
  </Paper>
);

export default Tables;
