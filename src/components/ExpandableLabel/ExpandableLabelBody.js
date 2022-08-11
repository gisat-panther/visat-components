import classnames from 'classnames';
import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from 'react';

import './style.scss';

export const ExpandableLabelBody = ({className, expanded, children}) => {
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef(null);
	const classes = classnames(
		`ptr-ExpandableLabelBody`,
		{
			'is-expanded': expanded,
		},
		className
	);

	useEffect(() => {
		setContentHeight(contentRef?.current?.getBoundingClientRect().height);
	}, []);

	let bodyStyle = {};
	if (contentHeight && expanded) {
		bodyStyle.height = `${contentHeight}px`;
	}

	return (
		<div className={classes} style={bodyStyle}>
			<div ref={contentRef}>{children}</div>
		</div>
	);
};

ExpandableLabelBody.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	className: PropTypes.string,
	expanded: PropTypes.bool,
};

export default ExpandableLabelBody;
