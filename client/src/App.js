import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Layouts/Footer';
import Navbar from './components/Layouts/Navbar';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const red = "#A0340B";
const yellow = "#fadb6a";
const green = "#6b724e";
const brown = "#6D4504";
const blue = "#a0cbd8";

const styles = {
	app: {
	  background: green,
	  backgroundSize: "100%",
	  border: 'solid',
	  borderBottomWidth: 1000,
	  borderColor: green
	}
}

function App() {
	return (
		<>
			<div className='App'style={styles.app}>
				<React.Fragment>
					<Router>
						<CssBaseline />
						<Navbar  />

						<Route path='/dashboard/' component={Dashboard} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/' component={Login} />

						<Footer />
					</Router>
				</React.Fragment>
			</div>
		</>
	);
}

export default App;
