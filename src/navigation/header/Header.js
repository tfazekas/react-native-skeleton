import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './headerStyle';

const Header = props => {
	const {
		leftImage: LeftImage,
		rightImage: RightImage,
		backgroundColor,
		title,
		titleColor,
		rightAction,
		leftAction,
		leftColor,
		rightColor,
		navigateTo,
	} = props;
	console.log('HEADER CALLED');
	const backgroundColorStyleObject = backgroundColor ? { backgroundColor } : {};
	const titleColorObject = titleColor ? { color: titleColor } : {};
	return (
		<View style={[styles.main, backgroundColorStyleObject]}>
			<View style={styles.bar}>
				<TouchableOpacity style={styles.leftButton} onPress={leftAction}>
					{LeftImage && leftAction && <LeftImage color={leftColor} />}
				</TouchableOpacity>
				{title && <Text style={[styles.title, titleColorObject]}>{title}</Text>}
				<TouchableOpacity
					style={styles.rightButton}
					onPress={() => rightAction(navigateTo)}
				>
					{RightImage && rightAction && <RightImage color={rightColor} />}
				</TouchableOpacity>
			</View>
		</View>
	);
};

Header.propTypes = {
	leftImage: PropTypes.func,
	rightImage: PropTypes.func,
	backgroundColor: PropTypes.string,
	title: PropTypes.string.isRequired,
	rightAction: PropTypes.func,
	leftAction: PropTypes.func,
	titleColor: PropTypes.string,
	leftColor: PropTypes.string,
	rightColor: PropTypes.string,
	navigateTo: PropTypes.string,
};

Header.defaultProps = {
	leftImage: undefined,
	rightImage: undefined,
	backgroundColor: '',
	titleColor: '',
	leftColor: '',
	rightColor: '',
	navigateTo: '',
	leftAction: null,
	rightAction: null,
};

export default Header;
