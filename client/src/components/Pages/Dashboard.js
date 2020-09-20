import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import Calendar from '../Calendar';
import { UserContext } from '../libs/UserContext';
import Menu from '../CreateMenu';
import MenuCard from '../MenuCard';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		
		textAlign: 'left',

	},
}));

export default function Dashboard() {
	const classes = useStyles();

	const [menus, setMenus] = useState([]);

	const getMenus= () => {
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
						Dine Or Dash: Order it, eat it, remember it<hr></hr>
					</Paper>
				</Grid>
				<UserContext.Provider value={{}}>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							{/* the magnificent calendar */}
							{/* <Calendar /> */}
						</Paper>
					</Grid>

					{/* Need to render the goal input inside the following grid item so it renders beside the calendar on the page */}
					<Grid item xs={12} sm={6}>
						<Card>
						<Paper className={classes.paper}>Diner's Choice</Paper>
						<Paper className={classes.paper}>
							<Menu getMenus={getMenus} />
						</Paper>
						{
							///////Map goal card instead prop down into goal card  - props.goal and props.task; in side goal card opening tag,
						}
						{menus.map((menu) => (
							<MenuCard
								className={classes.paper}
								key={menu._id}
								title={menu.menu}
								task={menu.food}
								start={menu.start}></MenuCard>
						))}
						</Card>
					</Grid>
				</UserContext.Provider>
			</Grid>
		</div>
	);
}
