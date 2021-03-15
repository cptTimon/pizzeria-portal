import React from 'react';
import 'date-fns';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const demoContent = [
  {
    hour: '13:00',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'null' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '14:30',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '15:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'null':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
            Book new
        </Button>
      );
    case 'booked':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/1`}>
            Check Reservation
        </Button>
      );
    case 'event':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/1`}>
            Check Event
        </Button>
      );
    default:
      return null;
  }
};

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

const Tables = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
                Tables view
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button
              component={Link}
              to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
              New Reservation
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>
            <Button
              component={Link}
              to={`${process.env.PUBLIC_URL}/tables/events/new`}>
              New event
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Pick date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table 1</TableCell>
                  <TableCell>Table 2</TableCell>
                  <TableCell>Table 3</TableCell>
                  <TableCell>Table 4</TableCell>
                  <TableCell>Table 5</TableCell>
                  <TableCell>Table 6</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoContent.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.hour}
                    </TableCell>
                    {row.tables.map(table => (
                      <TableCell key={table.id}>
                        {renderActions(table.status)}
                      </TableCell>
                    ))}
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

export default Tables;
