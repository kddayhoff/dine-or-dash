import React from "react";
import Copyright from '@material-ui/icons/CopyrightSharp';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import "./index.css"
// import Toolbar from '@material-ui/core/Toolbar';


export default function Footer() {

  const useStyles = makeStyles((theme) => ({
 
    footer: {
      background: '#a0cbd8',
      color: 'black',
      height: 48,
      paddingTop: '10px',
      fontSize: 15,
      textAlign: 'center',
      position: 'sticky',
      textFamily: "Raleway, sans-serif"
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      position: 'fixed',

    },
    
  }));

  const classes = useStyles();

  return (
    <>
    <AppBar className={classes.appBar}>
    <Typography className={classes.footer}>Dine Or Dash<Copyright  style={{fontSize: 14}}/> 2020</Typography>
    </AppBar>
    </>
  );
}

