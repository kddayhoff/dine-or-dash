import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		justifyContent: 'center',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 20,
		fontweight: 'bold',
		fontsyle: 'italic',
		alignItems: 'center',
	},
	pos: {
		marginBottom: 12,
	},
	btns: {
		background: 'linear-gradient(45deg, #3f51b5 30%, #32408f 90%)',
		color: 'black',
		height: 48,
		padding: '0 8px',
		fontSize: 18,
	},
	body: {
		justifyContent: 'center',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

function refreshPage() {
	window.location.reload(true);
}

export default function Goal(props) {
	const classes = useStyles();

	const [postGoal, setGoal] = useState('');
	const [postTask, setTask] = useState('');
	

	const goal = () => {
		Axios({
			method: 'POST',
			data: {
				title: postGoal,
				task: postTask
			},
			withCredentials: true,
			url: '/dashboard',
		}).then((res) => props.getGoals());
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom>
					Dine or Dash?
				</Typography>
				<div className={classes.body}>
					<form>
						<Typography variant='h5' component='h2'>
							<FormControl variant='outlined'>
								<InputLabel htmlFor='component-outlined'>Restaurant</InputLabel>
								<OutlinedInput
									id='component-outlined'
									onChange={(e) => setGoal(e.target.value)}
									label='restaurant'
								/>
							</FormControl>
						</Typography>
					</form>
					<form>
						<Typography variant='h5' component='h2'>
							<FormControl variant='outlined'>
								<InputLabel htmlFor='component-outlined'>Food Item</InputLabel>
								<OutlinedInput
									id='component-outlined'
									onChange={(e) => setTask(e.target.value)}
									label='food item'
								/>
							</FormControl>
						</Typography>
					</form>

					<br></br>
					<Button
						className={classes.btns}
						// onClick={() => {
						// 	goal();
						// 	refreshPage();
						// }}
						>
						Add Food Item
					</Button>
					<br></br>
					<br></br>
					<Button
						className={classes.btns}
						onClick={() => {
							goal();
							refreshPage();
						}}>
						Create Menu
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
