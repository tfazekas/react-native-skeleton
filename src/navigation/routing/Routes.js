import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import OldalOne from '../../screens/oldal-one/OldalOne';
import OldalTwo from '../../screens/oldal-two/OldalTwo';

const OldalOneTabNav = createMaterialTopTabNavigator(
	{
		Oldal2Per1: {
			screen: OldalOne,
		},
		Oldal2Per2: {
			screen: OldalTwo,
		},
	},
	{
		tabBarOptions: {},
	},
);

const Tabs = createBottomTabNavigator(
	{
		Oldal1: {
			screen: OldalOneTabNav,
		},
		Oldal2: {
			screen: OldalTwo,
		},
		Oldal3: {
			screen: OldalOne,
		},
		Oldal4: {
			screen: OldalTwo,
		},
	},
	{
		initialRouteName: 'Oldal1',
	},
);

export default createAppContainer(Tabs);
