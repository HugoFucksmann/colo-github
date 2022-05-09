import React, { createContext, Component } from 'react';

export const AppContext = createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ready: false,
		};
	}

	async componentDidMount() {
		this.setState({
			ready: true,
		});
	}

	render() {
		if (!this.state.ready) return <h1>Loading...</h1>;

		return (
			<AppContext.Provider
				value={{
					...this.state,
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
