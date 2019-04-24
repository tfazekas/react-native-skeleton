import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
	body: {
		color: 'blue',
		margin: 20,
		fontSize: 17,
		textAlign: 'center',
	},
	view: {
		padding: 30,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Loading = () => (
	<LinearGradient colors={['#566dd9', '#a327f6']} style={styles.view}>
		<View>
			<ActivityIndicator size="large" color="white" />
		</View>
	</LinearGradient>
);

export default Loading;
