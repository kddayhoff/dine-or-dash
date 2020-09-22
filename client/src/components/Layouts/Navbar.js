import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { Redirect} from "react-router-dom";
import "./index.css"

const fontText =  "Raleway, sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    background: '#a0cbd8',
  },
  title: {
    flexGrow: 1,
  },
  btns: {
    background: '#60534c',
    color: '#faf0d9',
    fontFamily: fontText,
    height: 35,
    fontSize: 15,
    margin: 20
  },
  btn1:{
    background: '#60534c',
    color: '#faf0d9',
    height: 35,
    fontSize: 15,
    fontFamily: fontText,
    margin: 20
  }
}));




export default function Navbar() {
  const classes = useStyles();
  // const user = getUser();

  const [loggedOut, setLoggedOut] = useState(false); 

const logout = () => {
  Axios({
        method: "GET",
        withCredentials: true,
        url:"/logout"
     }).then((res) => {
        //  setData(res.data);
        setLoggedOut(true)
     })}
 

    
  return (
    <div className={classes.root}>
      {loggedOut ? <Redirect to={{pathname:"/login"}}/> : null}
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            
            <Link style={{ textDecoration: 'none' }} to ={"/dashboard"}><Button variant="contained" className={classes.btn1}>My Menus</Button></Link>
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="/">
          <Button variant="contained" className={`'btnFont' ${classes.btns} `}>Log In</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/logout">
          <Button variant="contained" className={classes.btns} onClick={logout}>Log Out</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}