import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

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
  container: {
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: '10px',
  },
  button: {
    marginTop: '10px',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={styles.component}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5">
              Please sign in!
            </Typography>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="login">Login</InputLabel>
              <Input
                id="login"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              className={classes.button}
              component={Link}
              to={`${process.env.PUBLIC_URL}/`}
            >
            Sign into system
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
