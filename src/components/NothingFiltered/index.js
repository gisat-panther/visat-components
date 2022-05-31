// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NothingFiltered = () => {
	return (
		<div className="ptr-NothingFiltered">
			<div className="ptr-NothingFiltered-title">Nothing filtered</div>
			<div className="ptr-NothingFiltered-description">
				None of the datasets match filtering parameters
			</div>
		</div>
	);
};

NothingFiltered.propTypes = {
	onCtaClick: PropTypes.func,
};

export default NothingFiltered;
