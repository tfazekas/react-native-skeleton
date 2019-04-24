import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { LoadingScreen } from '../components/loaders';

export default function(WrappedComponent) {
	const hocComponent = ({ ...props }) => (
		<View style={{ flex: 1 }}>
			{/* eslint-disable-line */ props.loading && <LoadingScreen />}
			<WrappedComponent {...props} />
		</View>
	);

	const mapStateToProps = ({ loading }) => ({ loading });

	return connect(mapStateToProps)(hocComponent);
}
