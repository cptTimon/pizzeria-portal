import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 3,
  },
  container: {
    justifyContent: 'center',
  },
  formControl: {
    marginTop: '10px',
  },
  button: {
    marginTop: '15px',
  },
  radio: {
    width: '80%',
    marginTop: '10px',
  },
}));

const WaiterOrderNew = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const [state, setState] = React.useState({
    olives: false,
    mushrooms: false,
    peppers: false,
    cucumbers: false,
    tomatoes: false,
    feta: false,
  });
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const {olives, mushrooms, peppers, cucumbers, tomatoes, feta } = state;

  return (
    <div className={styles.component}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Doughnut</TableCell>
                  <TableCell>Coffee</TableCell>
                  <TableCell>Pizza</TableCell>
                  <TableCell>Salad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="table" name="table" onChange={handleRadioChange}>
                        <FormControlLabel value="one" control={<Radio />} label="one" />
                        <FormControlLabel value="two" control={<Radio />} label="two" />
                        <FormControlLabel value="three" control={<Radio />} label="three" />
                        <FormControlLabel value="four" control={<Radio />} label="four" />
                        <FormControlLabel value="five" control={<Radio />} label="five" />
                        <FormControlLabel value="six" control={<Radio />} label="six" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="doughnut" name="doughnut" onChange={handleRadioChange}>
                        <FormControlLabel value="doughnut" control={<Radio />} label="Doughnut" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="coffee" name="coffee" onChange={handleRadioChange}>
                        <FormControlLabel value="Latte" control={<Radio />} label="Latte" />
                        <FormControlLabel value="Cappucino" control={<Radio />} label="Cappucino" />
                        <FormControlLabel value="Espresso" control={<Radio />} label="Espresso" />
                        <FormControlLabel value="Macchiato" control={<Radio />} label="Macchiato" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl component="fieldset" className={classes.radio}>
                      <FormLabel component="legend">Sauce</FormLabel>
                      <RadioGroup aria-label="sauce" name="SAUCE" onChange={handleRadioChange}>
                        <FormControlLabel value="Tomato" control={<Radio />} label="Tomato" />
                        <FormControlLabel value="Saur Cream" control={<Radio />} label="Saur Cream" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <div className={classes.root}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={cucumbers} onChange={handleChange} name="cucumbers" />}
                            label="Cucumbers"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={tomatoes} onChange={handleChange} name="tomatoes" />}
                            label="Tomatoes"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={feta} onChange={handleChange} name="feta" />}
                            label="Feta"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <FormControl component="fieldset" className={classes.radio}>
                      <FormLabel component="legend">Crust</FormLabel>
                      <RadioGroup aria-label="crust" name="crust" onChange={handleRadioChange}>
                        <FormControlLabel value="Thin" control={<Radio />} label="Thin" />
                        <FormControlLabel value="Thick" control={<Radio />} label="Thick" />
                        <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className={classes.root}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Toppings</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={olives} onChange={handleChange} name="olives" />}
                            label="Olives"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={mushrooms} onChange={handleChange} name="mushrooms" />}
                            label="Mushrooms"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={peppers} onChange={handleChange} name="peppers" />}
                            label="Peppers"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="doughnout-number"
                      label="Amount"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="coffee-number"
                      label="Amount"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="pizza-number"
                      label="Amount"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      className={styles.number}
                      id="salad-number"
                      label="Amount"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="outlined" color="primary" className={classes.button}>
            NEW ORDER
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default WaiterOrderNew;
