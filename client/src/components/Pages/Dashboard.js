import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Calendar from '../Calendar';
import { UserContext } from '../libs/UserContext';
<<<<<<< HEAD
import Menu from '../Menu';
=======
import Menu from '../CreateMenu';
>>>>>>> 6d06c3ce70fad085fa258dc41845bcde83f6adbc
import MenuCard from '../MenuCard';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
	},
}));

export default function Dashboard() {
	const classes = useStyles();

	const [menus, setMenus] = useState([]);

	const getMenus = () => {
		Axios({
			method: 'GET',
			withCredentials: true,
			url: '/dashboard/menus',
		})
			.then((res) => {
				console.log(res.data);
				setMenus(res.data.menus);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(getMenus, []);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						Dine Or Dash: Order it, eat it, never forget it<hr></hr>
					</Paper>
				</Grid>
				<UserContext.Provider value={{}}>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							{/* the magnificent calendar */}
							
						</Paper>
					</Grid>

					{/* Need to render the goal input inside the following grid item so it renders beside the calendar on the page */}
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>Diner's Choice</Paper>
						<Paper className={classes.paper}>
<<<<<<< HEAD
							<Menu getGoals={getGoals} />
=======
							<Menu getMenus={getMenus} />
>>>>>>> 6d06c3ce70fad085fa258dc41845bcde83f6adbc
						</Paper>
						{
							///////Map goal card instead prop down into goal card  - props.goal and props.task; in side goal card opening tag,
						}
<<<<<<< HEAD
						{goals.map((goal) => (
							<MenuCard
								className={classes.paper}
								key={goal._id}
								title={goal.title}
								task={goal.task}
								start={goal.start}></MenuCard>
=======
						{
						menus && menus.map((menu) => (
							<MenuCard
								className={classes.paper}
								key={menu._id}
								title={menu.menu}
								task={menu.food}
								start={menu.start}>
								</MenuCard>
>>>>>>> 6d06c3ce70fad085fa258dc41845bcde83f6adbc
						))}
					</Grid>
				</UserContext.Provider>
			</Grid>
		</div>
	);
}
