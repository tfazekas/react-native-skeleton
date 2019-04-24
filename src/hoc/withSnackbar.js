import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import PropTypes from 'prop-types';

import { closeSnackbar } from '../ducks/snackbar';

export default function(WrappedComponent) {
	const mapDispatchToProps = {
		closeSnackbar,
	};
	const mapStateToProps = ({ snackbar }) => ({
		snackbar,
		title: snackbar.title,
		msg: snackbar.msg,
		open: snackbar.open,
		type: snackbar.type,
	});

	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(
		class WithSnackbar extends Component {
			static propTypes = {
				open: PropTypes.bool.isRequired,
				title: PropTypes.string.isRequired,
				msg: PropTypes.string.isRequired,
				type: PropTypes.string.isRequired,
				closeSnackbar: PropTypes.func.isRequired,
			};

			componentWillReceiveProps(nextProps) {
				const { open: nextOpen, type, title, msg } = nextProps;
				const { open: thisOpen } = this.props;
				if (!thisOpen && nextOpen) {
					this.dropdown.alertWithType(type, title, msg);
					this.props.closeSnackbar();
				}
			}

			render() {
				return (
					<Fragment>
						<WrappedComponent {...this.props} />
						<DropdownAlert
							ref={ref => {
								this.dropdown = ref;
							}}
						/>
					</Fragment>
				);
			}
		},
	);
}
