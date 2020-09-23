import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Layouts/Footer';
import Navbar from './components/Layouts/Navbar';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const styles = {
	app: {
	  background: "#6b724e",
	  backgroundSize: "100%",
	  border: 'solid',
	  borderBottomWidth: 200,
	  borderColor: "#6B724e"
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
