import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Calendar from '../Calendar';
import { UserContext } from "../libs/UserContext";
import Menu from "../Menu";
import MenuCard from "../MenuCard";
import Axios from "axios";

const btnColor = '#704911'

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  cardBackground: {
    background: "#fadb6a",
    align: 'center',
	marginTop: 100,
	marginBottom: 20, 
    border: 'solid',
    borderWidth: 20,
    borderColor: '#A0340B'
  },
  header: {
    fontFamily: "Shrikhand, cursive",
    fontSize: 50,
    text: 'center',
	display: 'block',
	textAlign: 'center'
    
  },
  subheader: {
    fontFamily: "Shrikhand, cursive",
    fontSize: 30,
    textAlign: 'center',
  },
};

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
	<Card style={styles.cardBackground} >
	  <CardContent>
      <Typography style={styles.header} >
        Dine Or Dash:
      </Typography>
      <Typography style={styles.subheader}>Order it, eat it, never forget it! 
      </Typography>
	  </CardContent>
        </Card>
    
		<Grid item xs={12} sm={6}>
          <Menu getGoals={getGoals} />
</Grid>
<Grid item xs={12} sm={6}>
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
      </UserContext.Provider>
    </Container>
  );
}
