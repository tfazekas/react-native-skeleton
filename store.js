import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as networkReducer } from 'react-native-offline';
import { reducer as formReducer } from 'redux-form';
import rootSaga from './src/sagas';
import { reducers } from './src/ducks';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'viddl',
	storage,
	whitelist: ['oauth2'],
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({ ...reducers, form: formReducer, network: networkReducer }),
);
export const store = createStore(persistedReducer, {}, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
