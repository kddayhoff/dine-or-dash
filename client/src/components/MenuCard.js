import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import Moment from 'react-moment';
// import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function MenuCard(props) {
	const classes = useStyles();



	// const [goalData, setGoalData] = useState('');
	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{props.title}
				</Typography>

				<Typography variant='body2' component='p'>
					{props.task}
					<br />
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					{/* <Moment>{props.start}</Moment> */}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Edit Menu</Button>
				<Button size='small'>Dash Menu</Button>
				<FormControl component='fieldset'>
					<FormGroup aria-label='position' row>
						<FormControlLabel
							value='end'
							control={<Checkbox 
								color='primary'/>}
								// onChange={this.handleChange} />}
							label=''
							labelPlacement='end'
						/>
					</FormGroup>
				</FormControl>
			</CardActions>
		</Card>
	);
}
