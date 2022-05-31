import React, {useEffect, useRef, useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import IconTool from '../IconTool';

import './style.scss';

export const ExpandableLabelHeader = ({
	className,
	expanded,
	onExpand,
	roundedCorners,
	children,
	wholeInteractive,
}) => {
	const classes = classnames(`ptr-ExpandableLabelHeader ${className || ''}`, {
		'is-expanded': expanded,
		'is-rounded': roundedCorners,
		'is-interactive': wholeInteractive,
	});

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			onExpand(!expanded);
		}
	};

	return (
		<div
			className={classes}
			onClick={wholeInteractive ? () => onExpand(!expanded) : () => {}}
			onKeyDown={wholeInteractive ? handleKeyDown : () => {}}
			tabIndex={wholeInteractive ? 0 : -1}
		>
			<div className="ptr-ExpandableLabelHeader-content">{children}</div>
			<IconTool
				tooltip={{
					text: 'Layer tools',
					position: 'right',
					id: 'ExpendableLayerLabel',
				}}
				active={expanded}
				onClick={() => onExpand(!expanded)}
				icon="ri-chevron-down"
				rectangular={!roundedCorners}
				small
				className="ptr-ExpandableLabelHeader-controlButton"
			/>
		</div>
	);
};

ExpandableLabelHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	expanded: PropTypes.bool,
	roundedCorners: PropTypes.bool,
	onExpand: PropTypes.func,
	wholeInteractive: PropTypes.bool,
};

export const ExpandableLabelBody = ({
	className,
	expanded,
	height,
	children,
}) => {
	const classes = classnames(`ptr-ExpandableLabelBody ${className || ''}`, {
		'is-expanded': expanded,
	});

	let bodyStyle = {};
	if (height && expanded) {
		bodyStyle.height = `${height}rem`;
	}

	let contentStyle = {};
	if (height) {
		contentStyle.height = `${height}rem`;
	}

	return (
		<div className={classes} style={bodyStyle}>
			<div style={contentStyle}>{children}</div>
		</div>
	);
};

ExpandableLabelBody.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	className: PropTypes.string,
	expanded: PropTypes.bool,
	height: PropTypes.number,
};

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

// Hook
function useOnClickOutside(ref, handler) {
	useEffect(
		() => {
			const listener = event => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		// Add ref and handler to effect dependencies
		// It's worth noting that because passed in handler is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap handler in useCallback before ...
		// ... passing it into this hook.
		[ref, handler]
	);
}
