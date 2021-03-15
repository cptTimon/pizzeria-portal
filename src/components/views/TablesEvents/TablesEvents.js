import React from 'react';
import styles from './TablesEvents.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const demoEvent = [
  {
    id: '1',
    date: '2021-03-14',
    time: '15:00',
    table: '3',
    name: 'Rychu',
    contact: 'Rychu@gmail.com',
    people: '3',
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
  },
}));

const TablesEvents = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
                Event details
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Number of people</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoEvent.map(event => (
                  <TableRow key={event.id}>
                    <TableCell>
                      {event.id}
                    </TableCell>
                    <TableCell>
                      <form noValidate>
                        <TextField
                          id="date"
                          label="Date"
                          type="date"
                          defaultValue={event.date}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </TableCell>
                    <TableCell>
                      <form noValidate>
                        <TextField
                          id="time"
                          label="Pick hour"
                          type="time"
                          defaultValue={event.time}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </form>
                    </TableCell>
                    <TableCell>
                      <TextField
                        className={styles.number}
                        id="standard-number"
                        label="Table"
                        type="number"
                        defaultValue={event.table}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <form className={classes.root} noValidate autoComplete="off">
                        <TextField label="Client's Name" id="standard-size-small" defaultValue={event.name} size="small" />
                      </form>
                    </TableCell>
                    <TableCell>
                      <form className={classes.root} noValidate autoComplete="off">
                        <TextField label="Client's Email" id="standard-size-small" defaultValue={event.contact} size="small" />
                      </form>
                    </TableCell>
                    <TableCell>
                      <TextField
                        className={styles.number}
                        id="standard-number"
                        label="Number"
                        type="number"
                        defaultValue={event.people}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" color="primary">
            SAVE CHANGES
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default TablesEvents;
