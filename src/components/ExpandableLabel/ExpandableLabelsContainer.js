import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const ExpandableLabelsContainer = ({className, children}) => {
	const classes = classnames('ptr-ExpandableLabelsContainer', className);
	const labelsCount = React.Children.count(children);

	return (
		<div className={classes}>
			{React.Children.map(children, (child, i) =>
				React.cloneElement(child, {...child.props, zIndex: labelsCount - i})
			)}
		</div>
	);
};

ExpandableLabelsContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ExpandableLabelsContainer;
