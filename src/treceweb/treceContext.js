import React, { createContext, Component } from 'react';

import header1 from '../assets/treceweb/Header.png';

export const TreceContext = createContext();

class TreceProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ready: false,
			landingData: landingData,
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
			<TreceContext.Provider
				value={{
					...this.state,
				}}
			>
				{this.props.children}
			</TreceContext.Provider>
		);
	}
}

const landingData = [
	{
		img: header1,
		txtT: `No mas derrames<br/> o bolsas rotas`,
		txt1: 'Eleginos y logra el mejor resultado en tus tareas de todos los dias',
	},
	{ img: header1, txtT: 'title2', txt1: 'texto 2' },
	{ img: header1, txtT: 'title3', txt1: 'texto 3' },
];

export default TreceProvider;
