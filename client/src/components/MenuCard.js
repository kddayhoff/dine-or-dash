import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import "./Layouts/index.css";
import { Grid } from "@material-ui/core";

// import Moment from 'react-moment';
// import FormLabel from '@material-ui/core/FormLabel';

const btnColor = "#6D4504";
const cursiveFont = "Shrikhand, cursive";
const sansSerifFont = "Raleway, sans-serif";
const red = "#A0340B";
const yellow = "#fadb6a";
const green = "#6b724e";
const brown = "#6D4504";
const blue = "#a0cbd8";

const styles = {
  container: {
    background: green,
  },
  cardBackground: {
    background: blue,
    align: "center",
    marginTop: 20,
    border: "solid",
    borderWidth: 10,
    borderColor: red,
  },
  header: {
    fontFamily: cursiveFont,
    fontSize: 30,
    textAlign: "center",
    color: brown,
  },
  foodItem: {
    fontFamily: sansSerifFont,
    fontSize: 20,
    textAlign: "left",
    // color: '#6D4504'
  },
  delivery: {
    fontFamily: sansSerifFont,
    fontSize: 25,
	textAlign: "left",
	margin: 2
    // color: '#6D4504'
  },
  submitBtn: {
    fontFamily: sansSerifFont,
    background: brown,
    color: "#faf0d9",
    fontWeight: "bold",
    height: 35,
    fontSize: 15,
  },
  input: {
    fontFamily: sansSerifFont,
    background: "white",
    // border: 10,

    margin: -3,
    align: "center",
  },
  dineDashLabel: {
	fontFamily: sansSerifFont,
	fontWeight: "bold",
    fontSize: 15,
  }
};

export default function MenuCard(props) {
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    dine: false,
    dash: false,
  });
  const { dine, dash } = state;

  return (
    <Container style={styles.container}>
      <Card style={styles.cardBackground}>
        <CardContent>
          <h1 style={styles.header}>{props.title}</h1>
		  <h2 style={styles.delivery}>Delivery Service:</h2>
		  {/* {props.delivery} */}
          <Grid container spacing={2}>
            <Grid item xs>
              <h2 style={styles.foodItem}>{props.task}</h2>
            </Grid>

            <Grid item xs={2}>
              <FormControl component="fieldset">
                <Typography style={styles.dineDashLabel}>Dine</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={dine}
                        onChange={handleChange}
                        name="dine"
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl component="fieldset" c>
			  <Typography style={styles.dineDashLabel}>Dash</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={dash}
                        onChange={handleChange}
                        name="dash"
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <div>
            <Button variant="contained" style={styles.submitBtn}>
              Edit Menu
            </Button>
          </div>
          <br></br>
          <div>
            <Button variant="contained" style={styles.submitBtn}>
              Dash Menu
            </Button>
          </div>
        </CardActions>
      </Card>
    </Container>
  );
}
