import React from 'react';
import Header from './Header';

export const headerMain = ({
	props,
	title,
	backgroundColor,
	leftColor,
	rightColor,
	rightAction,
	titleColor,
	gradientColors,
	leftImage,
	rightImage,
	navigateTo,
}) => ({
	header: (
		<Header
			leftImage={leftImage}
			rightImage={rightImage}
			leftAction={props.navigation && props.navigation.openDrawer}
			leftColor={leftColor}
			rightAction={rightAction}
			title={title}
			backgroundColor={backgroundColor}
			rightColor={rightColor}
			titleColor={titleColor}
			gradientColors={gradientColors}
			navigateTo={navigateTo}
			navigation={props.navigation}
		/>
	),
});

export const headerBack = ({ props, leftImage, title, titleColor, leftColor }) => ({
	header: (
		<Header
			leftImage={leftImage}
			leftAction={() => props.navigation.goBack()}
			title={title}
			titleColor={titleColor}
			leftColor={leftColor}
		/>
	),
});
