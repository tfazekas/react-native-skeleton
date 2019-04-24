import { StyleSheet, Platform, NativeModules } from 'react-native';

const isIphoneX = NativeModules.DeviceInfo.isIPhoneX_deprecated;

export default StyleSheet.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'white',
		width: '100%',
		height: Platform.OS === 'ios' && !isIphoneX ? 65 : 75,
		paddingBottom: 5,
	},
	bar: {
		flexDirection: 'row',
		width: '100%',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	leftButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: 40,
		marginLeft: 10,
		height: 40,
	},
	rightButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: 40,
		height: 40,
		marginRight: 10,
	},
	title: {
		fontSize: 22,
		fontFamily: 'roboto-slab-bold',
		color: 'grey',
	},
});
