import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxNetworkProvider } from 'react-native-offline';

import { store, persistor } from './store';
import Router from './src/navigation/routing';

export default () => (
	<Provider store={store}>
		<ReduxNetworkProvider>
			<PersistGate loading={null} persistor={persistor} onBeforeLift={() => {}}>
				<Router />
			</PersistGate>
		</ReduxNetworkProvider>
	</Provider>
);
