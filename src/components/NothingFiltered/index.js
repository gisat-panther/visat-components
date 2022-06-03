// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NothingFiltered = ({message}) => {
	return (
		<div className="ptr-NothingFiltered">
			<div className="ptr-NothingFiltered-title">Nothing filtered</div>
			<div className="ptr-NothingFiltered-description">
				{message || 'None of the datasets match filtering parameters'}
			</div>
		</div>
	);
};

NothingFiltered.propTypes = {
	message: PropTypes.string,
};

export default NothingFiltered;
