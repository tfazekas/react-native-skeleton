import React from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { openSnackbar } from '../../ducks/snackbar';

export default connect(
	null,
	{ openSnackbar },
)(props => (
	<View style={{ flex: 1, backgroundColor: 'red' }}>
		<Text>Oldal1</Text>
		<Button
			title="SNACKBAR"
			onPress={() =>
				props.openSnackbar({
					msg: 'An error occured.',
					type: 'error',
					title: 'Error',
				})
			}
		/>
	</View>
));
