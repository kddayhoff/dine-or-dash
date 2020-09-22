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

const styles = {
  pgBackground: {
    background: "#fadb6a",
    align: 'center'
  },
  header: {
    fontFamily: "Shrikhand, cursive",
    fontSize: 40,
    text: 'center',
    display: 'block',
    
  },
  subheader: {
    fontFamily: "Shrikhand, cursive",
    fontSize: 20,
    text: 'center',
    
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
  <Container style={styles.pgBackground} maxWidth="sm" >
  <Card >
    {loggedin ? <Redirect to={{pathname:"/dashboard/goals"}}/> : null}
    <CardContent>
      <Typography style={styles.header} >
        Dine Or Dash:
      </Typography>
      <Typography style={styles.subheader}>Order it, eat it, never forget it! 
      </Typography>

      <form >
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">username</InputLabel>
        <OutlinedInput
        name="username"
        type="text"
        label="username"
        ref={register({ required: "This is required." })}
        onChange={(e) => setLoginUsername(e.target.value)}
        />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">password</InputLabel>
        <OutlinedInput
          name="password"
          type={passwordShown ? "text" : "password"}
          label="password"
          onChange={(e) => setLoginPassword(e.target.value)} 
          ref={register({ required: "This is required." })}>
        
          </OutlinedInput>
         
      </FormControl>
     
      <Visibility className="togglePassword" onClick={togglePasswordVisiblity}/>
      </form>

      <Button onClick={login}>Submit </Button> 
   
              <div >
                Not already a member? <Link 
                style={{textDecoration: 'none'}} 
                to= "/Signup">
                  <Button>Sign Up</Button></Link>
                </div>
    </CardContent>
  </Card>
  </Container>
);


    }

    export default Login;