import React, { Component } from 'react';

import Routes from './Routes';
import { withSnackbar, withNetworkOffline, withLoader } from '../../hoc';

class Router extends Component {
	state = {
		isReady: false,
	};

	render() {
		const { isReady } = this.state;
		if (!isReady) {
			return <Routes screenProps={{}} />;
		}
		return <Routes screenProps={{}} />;
	}
}

export default withLoader(withNetworkOffline(withSnackbar(Router)));
