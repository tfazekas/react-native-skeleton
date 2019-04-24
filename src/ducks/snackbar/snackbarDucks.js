const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const Types = {
	OPEN_SNACKBAR,
	CLOSE_SNACKBAR,
};

const initialState = {
	open: false,
	msg: 'An error occured.',
	type: 'error',
	title: 'Error',
};

const snackbar = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case OPEN_SNACKBAR:
			return {
				...state,
				open: true,
				...action.payload,
			};
		case CLOSE_SNACKBAR:
			return initialState;
		default:
			return state;
	}
};

export const openSnackbar = payload => ({
	type: Types.OPEN_SNACKBAR,
	payload,
});

export const closeSnackbar = payload => ({
	type: Types.CLOSE_SNACKBAR,
	payload,
});

export const Actions = {
	openSnackbar,
	closeSnackbar,
};

export default snackbar;
