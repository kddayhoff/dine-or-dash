import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Calendar from '../Calendar';
// import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../libs/UserContext";
import CreateMenu from "../CreateMenu";
import MenuCard from "../MenuCard";
import Axios from "axios";

const btnColor = '#6D4504'
const cursiveFont = 'Shrikhand, cursive'
const sansSerifFont = 'Raleway, sans-serif'
const red = "#A0340B";
const yellow = "#fadb6a";
const green = "#6b724e";
const brown = "#6D4504";
const blue = "#a0cbd8";

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
    color: brown,
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
  },
  paper: {
    textAlign: "center",
	
	backgroundColor: green,
	border: 'none'
  },
}


export default function Dashboard() {

  const [goals, setGoals] = useState([]);

  const getGoals = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/dashboard/goals",
    })
      .then((res) => {
        console.log(res.data);
        setGoals(res.data.goals);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getGoals, []);

  return (
    <Container style={styles.root}>
      <UserContext.Provider value={{}}>
        <Card style={styles.cardBackground}>
          <CardContent>
            <Typography style={styles.header}>Dine-Or-Dash:</Typography>
            <Typography style={styles.subheader}>
              Order it, eat it, never forget it!
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          <Grid item xs>
            <CreateMenu getGoals={getGoals}  />
          </Grid>
          <Grid item xs={6}>
            
              {goals.map((goal) => (
                <MenuCard
                  style={styles.paper}
                  key={goal._id}
                  title={goal.title}
                  task={goal.task}
                  start={goal.start}
                ></MenuCard>
              ))}
            
          </Grid>
        </Grid>
      </UserContext.Provider>
    </Container>
  );
}
