import React, {useRef, useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ExpandableLabelHeader from './ExpandableLabelHeader';
import ExpandableLabelBody from './ExpandableLabelBody';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.scss';

const ExpandableLabel = ({
	className,
	expanded,
	floating,
	roundedCorners,
	zIndex,
	children,
}) => {
	const wrapperEl = useRef(null);
	const [isExpanded, setExpanded] = useState(expanded);

	const classes = classnames(`ptr-ExpandableLabel ${className || ''}`, {
		'is-expanded': isExpanded,
		'is-floating': floating,
		'is-rounded': roundedCorners,
	});

	useOnClickOutside(wrapperEl, () => setExpanded(false));

	return (
		<div
			className={classes}
			style={{zIndex: zIndex ? zIndex : 0}}
			ref={wrapperEl}
		>
			{React.Children.map(children, child => {
				if (child.type === ExpandableLabelHeader) {
					return React.cloneElement(child, {
						...child.props,
						onExpand: setExpanded,
						expanded: isExpanded,
						roundedCorners: roundedCorners,
					});
				} else if (child.type === ExpandableLabelBody) {
					return React.cloneElement(child, {
						...child.props,
						expanded: isExpanded,
					});
				} else {
					return child;
				}
			})}
		</div>
	);
};

ExpandableLabel.propTypes = {
	children: PropTypes.array,
	className: PropTypes.string,
	expanded: PropTypes.bool,
	floating: PropTypes.bool,
	roundedCorners: PropTypes.bool,
	zIndex: PropTypes.number,
};

export default ExpandableLabel;
