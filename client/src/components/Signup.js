import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Visibility} from "@material-ui/icons";
import Axios from 'axios';

const styles = {
  root: {
    minWidth: 275,
    justifyContent: 'center'
  },
  card: {
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontweight: 'bold',
    fontsyle: 'italic'
  },
  btns: {
    fontFamily: "Raleway, sans-serif",
    
    background: '#60534c',
    color: '#faf0d9',
    fontWeight: 'bold',
    height: 35,
    fontSize: 15
  },
  images:{
    flexDirection:'column'
  },
  body: {
    paddingTop: 20,
  },
  form: {
    padding: 20,
    paddingRight:0,
  }
};

export default function Signup() {
	
  const { register } = useForm();
  const [signupUsername, setsignupUsername] = useState('');
  const [signupPassword, setsignupPassword] = useState('');
  const [signedIn, setSignedin] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const signup = () => {
      Axios({
          method: "POST",
          data: {
              username: signupUsername,
              password: signupPassword
          },
          withCredentials: true,
          url:"/signup"
      }).then((res) => setSignedin(true));
      
  };
  
  return (
    <Card style={styles.root}>
      {signedIn ? <Redirect to={{pathname:"/"}}/> : null}
      <CardContent style={styles.card}>
        <Typography style={styles.title} gutterBottom>
          Signup
        </Typography>
        <form>
        <Typography variant="h5" component="h2">
        <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <OutlinedInput
        name="username"
          id="component-outlined"
          ref={register({ required: "This is required." })}
          onChange={(e) => setsignupUsername(e.target.value)}
          label="username"
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
        name="password"
          id="component-outlined"
          type={passwordShown ? "text" : "password"}
          onChange={(e) => setsignupPassword(e.target.value)}
          label="password"
          ref={register({ required: "This is required." })}
        />
      </FormControl>
      <Visibility className="togglePassword" onClick={togglePasswordVisiblity}/>
            <Button style={styles.btns} onClick={signup}>Submit{' '} </Button>
        </Typography>
        </form>
      </CardContent>
    </Card>
  );
}

