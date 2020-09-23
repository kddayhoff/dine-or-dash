import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link, Redirect} from "react-router-dom";
import {Visibility} from "@material-ui/icons";
import Axios from 'axios';
import "./login.css"
import { useForm } from "react-hook-form";
// import Signup from '../Signup';

const btnColor = '#6D4504'
const red = "#A0340B"
const yellow = "#fadb6a"
const green = "#6b724e"
const brown = "#6D4504"
const blue = "#a0cbd8"
const cursiveFont = 'Shrikhand, cursive'
const sansSerifFont = 'Raleway, sans-serif'

const styles = {
  container: {
    background: green
  },
  cardBackground: {
    background: yellow,
    align: 'center',
    marginTop: 100,
    border: 'solid',
    borderWidth: 20,
    borderColor: red
  },
  header: {
    fontFamily: cursiveFont,
    fontSize: 50,
    textAlign: 'center',
    color: brown
    
  },
  subheader: {
    fontFamily: cursiveFont,
    fontSize: 30,
    textAlign: 'center',
    color: brown
  },
  subheader2: {
    fontFamily: cursiveFont,
    fontSize: 20,
    text: 'center',
  },
  submitBtn: {
    fontFamily: sansSerifFont,
    background: btnColor,
    color: '#faf0d9',
    fontWeight: 'bold',
    height: 35,
    fontSize: 15
  },
  input: {
    fontFamily: sansSerifFont,
    background: 'white',
    border: 10,
    borderColor:'#a7ada',
   margin: 1,
   align: 'center'
  }
}



function Login() {
  // const classes= useStyles();
  const { register} = useForm();
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loggedin, setLoggedin] = useState(false); 
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const login = () => { 
    
    Axios({
    method: "POST",
    data: {
        username: loginUsername,
        password: loginPassword
    },
    withCredentials: true,
    url:"/login"
}).then((res) => setLoggedin(true))
}

return (
  <Container style={styles.container} maxWidth="sm" >
  <Card style={styles.cardBackground}>
    {loggedin ? <Redirect to={{pathname:"/dashboard/goals"}}/> : null}
    <CardContent>
      <Typography style={styles.header} >
        Dine Or Dash:
      </Typography>
      <Typography style={styles.subheader}>Order it, eat it, never forget it! 
      </Typography>

      <form >
      <FormControl variant="outlined">
        <InputLabel style={styles.input} htmlFor="component-outlined">username</InputLabel>
        <OutlinedInput style={styles.input}
        name="username"
        type="text"
        label="username"
        ref={register({ required: "This is required." })}
        onChange={(e) => setLoginUsername(e.target.value)}
        />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel style={styles.input} htmlFor="component-outlined">password</InputLabel>
        <OutlinedInput style={styles.input}
          name="password"
          type={passwordShown ? "text" : "password"}
          label="password"
          onChange={(e) => setLoginPassword(e.target.value)} 
          ref={register({ required: "This is required." })}>
        
          </OutlinedInput>
         
      </FormControl>
     
      <Visibility className="togglePassword" onClick={togglePasswordVisiblity}/>
      </form>
      <br></br>

      <Button variant="contained" style={styles.submitBtn} onClick={login}>Log In</Button> 
      <br></br>
      <br></br>
              <div style={styles.subheader2} >
                Not already a member? <Link 
                style={{textDecoration: 'none'}} 
                to= "/Signup">
                  <Button variant="contained" style={styles.submitBtn}>Sign Up</Button></Link>
                </div>
    </CardContent>
  </Card>
  </Container>
);


    }

    export default Login;