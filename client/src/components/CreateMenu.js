import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Axios from "axios";
import "./Layouts/index.css";

const btnColor = "#6D4504";
// const cursiveFont = 'Shrikhand, cursive'
const sansSerifFont = "Raleway, sans-serif";

const red = "#A0340B";
const yellow = "#fadb6a";
const green = "#6b724e";
const brown = "#6D4504";
const blue = "#a0cbd8";

const styles = {
  container: {
    background: "#6b724e",
  },
  cardBackground: {
    background: yellow,
    align: "center",
    marginTop: 20,
    border: "solid",
    borderWidth: 10,
    borderColor: red,
  },
  header: {
    fontFamily: sansSerifFont,
    fontSize: 33,
    textAlign: "center",
    // color: '#6D4504',
    fontWeight: "extra bold",
  },
  subheader: {
    fontFamily: sansSerifFont,
    fontSize: 28,
    textAlign: "left",
    fontWeight: "extra bold",
    // color: '#6D4504'
  },
  subheader2: {
    fontFamily: sansSerifFont,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "extra bold",
    // color: '#6D4504'
  },
  deliveryOptions: {
    fontFamily: sansSerifFont,
    fontSize: 25,
    text: "center",
  },
  foodItemBtn: {
    fontFamily: sansSerifFont,
    background: btnColor,
    color: "#faf0d9",
    fontWeight: "bold",
    height: 35,
    fontSize: 15,
    margin: 10,
  },
  createMenuBtn: {
    fontFamily: sansSerifFont,
    background: btnColor,
    color: "#faf0d9",
    fontWeight: "bold",
    height: 35,
    fontSize: 15,
    margin: 10,
    alignItems: "center",
  },
  input: {
    fontFamily: sansSerifFont,
    background: "white",

    margin: 1,
    align: "center",
    borderRadius: 5,
    border: "solid",
    borderColor: yellow,
    borderWidth: 3,
  },
  input2: {
    fontFamily: sansSerifFont,
    background: "white",
    margin: 1,
    align: "center",
  },
};

// radio customization
const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#a0340b",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function refreshPage() {
  window.location.reload(true);
}

export default function Goal(props) {
  const classes = useStyles();

  const [postGoal, setGoal] = useState("");
  const [postTask, setTask] = useState("");
  const [value, setValue] = React.useState("delivery");

  const goal = () => {
    Axios({
      method: "POST",
      data: {
        title: postGoal,
        task: postTask,
      },
      withCredentials: true,
      url: "/dashboard",
    }).then((res) => props.getGoals());
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Card style={styles.cardBackground}>
        <CardContent>
          <h1 style={styles.header}>Create New Dine-or-Dash Menu:</h1>
          <div>
            <form>
              <FormControl component="fieldset">
                <h2 style={styles.subheader}>Delivery Service</h2>
                <RadioGroup
                  aria-label="deliveryService"
                  name="delivery"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="doordash"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        Doordash
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="grubhub"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        Grubhub
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="ubereats"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        UberEats
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="postmates"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        Postmates
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="seamless"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        Seamless
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="instacart"
                    control={<StyledRadio />}
                    label={
                      <Typography style={styles.deliveryOptions}>
                        Instacart
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <h2 style={styles.subheader}>Enter Restaurant Name:</h2>
              <FormControl style={styles.input} variant="outlined">
                <InputLabel style={styles.input2} htmlFor="component-outlined">
                  Restaurant
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  onChange={(e) => setGoal(e.target.value)}
                  label="restaurant"
                />
              </FormControl>
            </form>
            <form>
              <h2 style={styles.subheader2}>Add Food To Your Menu:</h2>

              <FormControl style={styles.input} variant="outlined">
                <InputLabel style={styles.input2} htmlFor="component-outlined">
                  Food Item
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  onChange={(e) => setTask(e.target.value)}
                  label="food item"
                />
              </FormControl>
            </form>

            <Button
              variant="contained"
              style={styles.foodItemBtn}

              // onClick={() => {
              // 	goal();
              // 	refreshPage();
              // }}
            >
              Add Food Item
            </Button>
            <br></br>
            <div align="center" justify="center">
              <Button
                variant="contained"
                align="center"
                style={styles.createMenuBtn}
                onClick={() => {
                  goal();
                  refreshPage();
                }}
              >
                Create Menu
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
