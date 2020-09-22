import React from "react";
import Copyright from '@material-ui/icons/CopyrightSharp';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



export default function Footer() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(45deg, #3f51b5 30%, #32408f 90%)',
      textAlign: 'center',
    },
    title: {
      flexGrow: 1,
    },
    footer: {
      background: '#a0cbd8',
      color: 'black',
      height: 48,
      paddingTop: '10px',
      fontSize: 14,
    },
  }));

  const classes = useStyles();

  return (
    <>
    <footer className={classes.root}>
    <Typography className={classes.footer}>Dine Or Dash<Copyright  style={{fontSize: 14}}/> 2020</Typography>
    </footer>
    </>
  );
}

