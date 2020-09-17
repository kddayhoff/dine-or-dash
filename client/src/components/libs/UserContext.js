import React, { Component, createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
	state = {
		isAuthenticated: false,
		user: null,
	};

	toggleUser = () => {
		this.setState({ isAuthenticated: !this.state.isAuthenticated });
	};

	render() {
		return (
			<UserContext.Provider
				value={{ ...this.state, toggleUser: this.toggleUser }}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

export default UserContextProvider;
