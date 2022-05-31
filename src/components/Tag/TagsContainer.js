// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const TagsContainer = ({className, small, children}) => {
	const classes = classnames(
		'ptr-TagsContainer',
		{'is-small': small},
		className
	);

	return <div className={classes}>{children}</div>;
};

TagsContainer.propTypes = {
	small: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	className: PropTypes.string,
};

export default TagsContainer;
