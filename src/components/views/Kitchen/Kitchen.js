import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';

const demoContent = [
  {
    number: '1',
    table: '1',
    name: 'pizza',
    option: ['feta', 'paprica', 'olives'],
    amount: 1,
    price: '323',
  },
  {
    number: '2',
    table: 'remote',
    name: 'salad',
    option: ['feta', 'tomato', 'olives', 'butter'],
    amount: 1,
    price: '222',
  },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Dish</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.number}>
            <TableCell>{row.number}</TableCell>
            <TableCell>{row.table}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.option.join(', ')}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>
              <FormControlLabel control={<Checkbox name="checkedC" />} label="Done" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
