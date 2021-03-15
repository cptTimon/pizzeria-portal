import React from 'react';
import styles from './WaiterOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const demoContent = [
  {
    id: '1',
    table: '1',
    doughnut: {
      amount: '1',
    },
    coffee: '2x espresso',
    pizza: '2x tomato sauce, thin crust, olives and mushrooms',
    salad: '1x cucumbers and tomatoes',
    price: '176$',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
  },
}));

const WaiterOrder = () => {
  const classes = useStyles();

  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order id</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>Doughnut</TableCell>
                  <TableCell>Coffee</TableCell>
                  <TableCell>Pizza</TableCell>
                  <TableCell>Salad</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoContent.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.table}</TableCell>
                    <TableCell>{row.doughnut.amount}</TableCell>
                    <TableCell>{row.coffee}</TableCell>
                    <TableCell>{row.pizza}</TableCell>
                    <TableCell>{row.salad}</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default WaiterOrder;
