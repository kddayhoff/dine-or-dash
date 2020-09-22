import React from "react";
import Copyright from '@material-ui/icons/CopyrightSharp';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

const styles = {
 
    footer: {
      background: '#a0cbd8',
      color: 'black',
      height: 55,
      paddingTop: '10px',
      fontSize: 20,
      textAlign: 'center',
      position: 'sticky',
      fontFamily: "Raleway, sans-serif"
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      position: 'fixed'
    }

  }
export default function Footer() {
  return (
    <>
    <AppBar style={styles.appBar}>
    <Typography style={styles.footer}>Dine Or Dash<Copyright  style={{fontSize: 14}}/> 2020</Typography>
    </AppBar>
    </>
  );
  }

