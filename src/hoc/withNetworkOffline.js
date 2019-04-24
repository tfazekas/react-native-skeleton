import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import PropTypes from 'prop-types';

export default function(WrappedComponent) {
	class WithNetworkOfflineHOC extends Component {
		static propTypes = {
			isConnected: PropTypes.bool.isRequired,
		};

		componentDidMount() {
			const { isConnected } = this.props;
			if (!isConnected) {
				this.dropdown.alertWithType(
					'warn',
					'Network offline',
					'You are having trouble connecting to the internet. Enable Wifi of mobile data.',
				);
			}
		}

		componentWillReceiveProps(nextProps) {
			const { isConnected } = nextProps;
			if (!isConnected) {
				this.dropdown.alertWithType(
					'warn',
					'Network offline',
					'You are having trouble connecting to the internet. Enable Wifi of mobile data.',
				);
			}
		}

		render() {
			return (
				<Fragment>
					<WrappedComponent {...this.props} />
					<DropdownAlert
						ref={ref => {
							this.dropdown = ref;
						}}
					/>
				</Fragment>
			);
		}
	}

	const ConnectedComponent = connect(({ network }) => ({ isConnected: network.isConnected }))(
		WithNetworkOfflineHOC,
	);

	return ConnectedComponent;
}
