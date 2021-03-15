import React from 'react';
import styles from './TablesEventsNew.module.scss';
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

const TablesEventsNew = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
                New event
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Number of people</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <form noValidate>
                      <TextField
                        id="date"
                        label="Date"
                        type="date"
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
                        defaultValue='12:00'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300,
                        }}
                      />
                    </form>
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="table"
                      label="Table"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField label="Client's Name" id="name" size="small" />
                    </form>
                  </TableCell>
                  <TableCell>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField label="Client's Email" id="contact" size="small" />
                    </form>
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
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
export default TablesEventsNew;
